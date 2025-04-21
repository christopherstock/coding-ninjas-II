/* eslint-disable max-len */

import * as matter from 'matter-js';
import * as ninjas from '../../ninjas';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelHut extends ninjas.Level
{
    /** Player start position X. */
    public  playerStartX            :number                             = 2480;
    /** Player start position Y. */
    public  playerStartY            :number                             = 2000; // 1200;
    /** Player initial parachute state. */
    public  playerInitialFloat      :boolean                            = false;
    /** Player initial facing. */
    public  playerInitialFacing     :ninjas.CharacterFacing             = ninjas.CharacterFacing.RIGHT;

    /** The width of this level. */
    public  width                   :number                             = 7500;
    /** The height of this level. */
    public  height                  :number                             = 2500;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects() : void
    {
        // player
        ninjas.GameObjectBundleFactory.createPlayer( this );

        // parallax bg "Mount Fuji"
        ninjas.GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, ninjas.DecoPosition.BG, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.IMAGE_BG_JAPAN ) );

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine() : void
    {
        // ground
        ninjas.GameObjectBundleFactory.createSolidGround( this, 0, 2000, 40,  5, ninjas.Slope.NONE, ninjas.CapHorz.NONE, ninjas.GroundData.TILESET_SNOW );
        ninjas.GameObjectBundleFactory.createSolidGround( this, 5120, 2000, 5,  5, ninjas.Slope.DESCENDING, ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );
        ninjas.GameObjectBundleFactory.createSolidGround( this, 5760, 2100, 15, 5, ninjas.Slope.NONE,       ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );

        // statue
        // ninjas.GameObjectBundleFactory.createObstacle(this, 2000, 2000, ninjas.ImageData.IMAGE_STATUE_3 );

        // dojo
        // ninjas.GameObjectBundleFactory.createDecoImage(this, 4600, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_DOJO );

        // bridge and blue water
        ninjas.GameObjectBundleFactory.createWaterArea(   this, 3050, 2260, 6, 4, ninjas.ImageData.IMAGE_WATER_CENTER );
        ninjas.GameObjectBundleFactory.createBridge(      this, 3120, 2100 );

        // ground
    }
}
