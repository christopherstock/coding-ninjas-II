import { GameObject } from '../GameObject';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import {Debug} from "../../../base/Debug";
import {Main} from "../../../base/Main";

/** ********************************************************************************************************************
*   Represents a movable box.
***********************************************************************************************************************/
export class Movable extends GameObject {
    public energy: number = 100.0;
    public broken: boolean = false;
    public vanishCountdown: number = 0.0;

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

        // this.clipToHorizontalLevelBounds();

        if (this.energy < 100.0) {
            this.shape.body.render.opacity = 0.5 + ((0.5 * this.energy) / 100.0);
        }

        if (this.broken && this.vanishCountdown > 0) {
            --this.vanishCountdown;
            if (this.vanishCountdown === 0) {
                Debug.character.log('Broken Game Object vanishes');

                // vanish this broken movable
                Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
            }
        }
    }

    public hurt(damage: number): void {
        if (this.broken) {
            return;
        }

        // TODO add particle effect / decos on hurt/smash!
        this.energy -= damage;
        Debug.character.log('New level object energy: [' + String(this.energy) + ']');

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
        this.broken = true;
        this.vanishCountdown = 100;
    }
}
