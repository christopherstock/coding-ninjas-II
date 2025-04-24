import {GameObjectState, GameObject} from '../GameObject';
import {Shape} from '../../../engine/shape/Shape';
import {SpriteTemplate} from '../../../engine/ui/SpriteTemplate';
import {Debug} from '../../../base/Debug';
import {Main} from '../../../base/Main';
import {ImageUtil} from '../../../util/ImageUtil';
import {SettingMatter} from '../../../base/SettingMatter';

/** ********************************************************************************************************************
*   Represents a movable box.
***********************************************************************************************************************/
export class Movable extends GameObject {
    public energy: number = 100.0;

    /** ****************************************************************************************************************
    *   Creates a new movable.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite for this box.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y
        );
    }

    /** ****************************************************************************************************************
    *   Renders this movable.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        if (this.state === GameObjectState.DYING) {
            if (this.checkFallingDead()) {
                this.state = GameObjectState.DEAD;
            }
        }

        // this.clipToHorizontalLevelBounds();
    }

    public hurt(damage: number): void {
        if (this.state !== GameObjectState.ALIVE) {
            return;
        }

        // TODO add particle effect / decos on hurt/smash!
        this.energy -= damage;
        Debug.character.log('New level object energy: [' + String(this.energy) + ']');

        // darken img
        const img = new Image();
        img.src = this.shape.body.render.sprite.texture;
        img.onload = (): void => {
            const darkenedImg = ImageUtil.darkenImage(
                img,
                (): void => { /* */ }
            );
            this.shape.body.render.sprite.texture = darkenedImg.src;
        }

        // smaller scale (testwise)
        this.shape.body.render.sprite.xScale = 0.90;
        this.shape.body.render.sprite.yScale = 0.90;

        // this.shape.body.render.sprite.
        // this.shape.body.render.

        if (this.energy <= 0.0) {
            Debug.character.log('Game Object BREAKS!');
            // TODO add particle effect / decos on breaking etc!
            this.break();
        }
    }

    private break(): void {
        this.state = GameObjectState.DYING;

        // freeze & make non-collidable
        // this.shape.body.isStatic = true;
        this.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_DEAD_OBJECT;

        // bring body to foreground
        Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
        Main.game.engine.matterJsSystem.addToWorld(this.shape.body);

        // remove from world ?
        // Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
    }
}
