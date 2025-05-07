import * as matter from 'matter-js';
import { Shape } from '../../engine/shape/Shape';
import { Sprite } from '../../engine/ui/Sprite';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { SettingDebug } from '../../base/SettingDebug';
import { Main } from '../../base/Main';
import { DebugLog } from '../../base/DebugLog';
import { ImageUtil } from '../../util/ImageUtil';
import { SettingMatter } from '../../base/SettingMatter';

export enum GameObjectState {
    ALIVE,
    DYING,
    DEAD,
}

export enum Breakable {
    NO,
    YES,
}

/** ********************************************************************************************************************
*   The abstract class of all game objects.
***********************************************************************************************************************/
export abstract class GameObject {
    public shape: Shape   = null;
    public sprite: Sprite = null;
    public state: GameObjectState = GameObjectState.ALIVE;
    public breakable: Breakable = Breakable.NO;
    public energy: number = 100.0;

    /** ****************************************************************************************************************
    *   Creates a new game object.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use for this game object.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *   @param breakable      If the game object can be destroyed.
    *******************************************************************************************************************/
    protected constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number,
        breakable: Breakable = Breakable.NO
    ) {
        this.shape = shape;
        this.setSprite(spriteTemplate);
        this.breakable = breakable;

        matter.Body.translate(this.shape.body, matter.Vector.create(x, y));
    }

    /** ****************************************************************************************************************
    *   Renders the current game object.
    *******************************************************************************************************************/
    public render(): void {
        if (this.sprite !== null) {
            // render sprite and check frame change
            if (this.sprite.render()) {
                this.setImageFromSprite();
            }
        }

        if (this.state === GameObjectState.DYING) {
            this.checkFallingDead();
        }
    }

    /** ****************************************************************************************************************
    *   Sets the visibility for this object.
    *
    *   @param visible The desired visibility.
    *******************************************************************************************************************/
    public setVisible(visible: boolean): void {
        if (visible) {
            this.setImageFromSprite();
        } else {
            this.shape.body.render.sprite.texture = null;
        }
    }

    /** ****************************************************************************************************************
    *   Check if the enemy falls to death by falling out of the level.
    *******************************************************************************************************************/
    protected checkFallingDead(): void {
        if (this.shape.body.position.y - this.shape.getHeight() / 2 > Main.game.level.height) {
            DebugLog.character.log('Game object has fallen to dead');

            // remove character body from world
            Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);

            // flag as dead
            this.state = GameObjectState.DEAD;
        }
    }

    /** ****************************************************************************************************************
    *   Sets the specified sprite template.
    *
    *   @param spriteTemplate The sprite template to use for this new sprite.
    *******************************************************************************************************************/
    protected setSprite(spriteTemplate: SpriteTemplate): void {
        if (spriteTemplate !== null) {
            // only set new sprite if it differs from current sprite
            if (this.sprite !== null && this.sprite.template === spriteTemplate) {
                return;
            }

            // assign new sprite and 1st image/texture
            this.sprite = new Sprite(spriteTemplate);
            this.setImageFromSprite();

            // do NOT update body shape dimensions! immediate collisions will occur and block the game!
            // this.shape.updateDimensions( this.sprite.width, this.sprite.height );
        }
    }

    /** ****************************************************************************************************************
    *   Assigns the current active sprite frame as the game objects image.
    *******************************************************************************************************************/
    protected setImageFromSprite(): void {
        if (!SettingDebug.DISABLE_SPRITES) {
            this.shape.body.render.sprite.texture = this.sprite.getCurrentFrameImageUrl();
            this.shape.body.render.sprite.xScale  = this.sprite.template.getScale();
            this.shape.body.render.sprite.yScale  = this.sprite.template.getScale();
        }
    }

    /** ****************************************************************************************************************
    *   Assigns the specified opacity for drawing this game object.
    *******************************************************************************************************************/
    protected setOpacity(opacity: number): void {
        this.shape.body.render.opacity = opacity;
    }

    /** ****************************************************************************************************************
    *   Avoids this game object from rotating.
    *******************************************************************************************************************/
    protected resetRotation(): void {
        matter.Body.setAngularVelocity(this.shape.body, 0.0);
        matter.Body.setAngle(this.shape.body, 0.0);
    }

    /** ****************************************************************************************************************
    *   Clips this body to the horizontal level bounds.
    *******************************************************************************************************************/
    protected clipToHorizontalLevelBounds(): void {
        // clip left bound
        if (this.shape.body.position.x < this.shape.getWidth() / 2) {
            matter.Body.setPosition(
                this.shape.body,
                {
                    x: this.shape.getWidth() / 2,
                    y: this.shape.body.position.y,
                }
            );
        }

        // clip right bound
        if (this.shape.body.position.x > Main.game.level.width - this.shape.getWidth() / 2) {
            matter.Body.setPosition(
                this.shape.body,
                {
                    x: Main.game.level.width - this.shape.getWidth() / 2,
                    y: this.shape.body.position.y,
                }
            );
        }
    }

    public hurt(damage: number, damageForce: number): void {
        // apply force on non-static objects
        if (!this.shape.body.isStatic) {
            matter.Body.setVelocity(
                this.shape.body,
                matter.Vector.create(damageForce, -10.0)
            );
        }

        if (!this.breakable || this.state !== GameObjectState.ALIVE) {
            return;
        }

        DebugLog.character.log('Character hits a level object (movable)');

        // TODO add particle effect / decos on hurt/smash!
        this.energy -= damage;
        DebugLog.character.log('New level object energy: [' + String(this.energy) + ']');

        // darken img
        this.darkenImage();

        // check if game object breaks
        if (this.energy <= 0.0) {
            DebugLog.character.log('Game Object BREAKS!');
            this.break();

            // TODO add particle effect / decos on breaking etc!

            // apply force on break
            matter.Body.setVelocity(
                this.shape.body,
                matter.Vector.create(damageForce, -10.0)
            );
        }
    }

    private darkenImage(): void {
        const img = new Image();
        img.src = this.shape.body.render.sprite.texture;
        img.onload = (): void => {
            const darkenedImg = ImageUtil.darkenImage(
                img,
                (): void => { /* */ }
            );
            this.shape.body.render.sprite.texture = darkenedImg.src;
        }
    }

    private break(): void {
        this.state = GameObjectState.DYING;

        // freeze & make non-collidable
        this.shape.body.isStatic = false;
        this.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_DEAD_OBJECT;
        this.shape.body.mass = 1.0;
        this.shape.body.friction = 1.0;
        this.shape.body.restitution = 0.0;

        // bring body to foreground
        Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
        Main.game.engine.matterJsSystem.addToWorld(this.shape.body);

        // remove from world ?
        // Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
    }
}
