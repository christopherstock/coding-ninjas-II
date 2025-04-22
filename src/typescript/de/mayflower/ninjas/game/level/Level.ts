import { Player } from '../object/being/Player';
import { Bot } from '../object/being/Bot';
import { Obstacle } from '../object/primal/Obstacle';
import { Movable } from '../object/primal/Movable';
import { Decoration } from '../object/deco/Decoration';
import { SiteTrigger } from '../object/special/SiteTrigger';
import { SigSaw } from '../object/special/SigSaw';
import { Bounce } from '../object/special/Bounce';
import { Platform } from '../object/special/Platform';
import { ParallaxDeco } from '../object/deco/ParallaxDeco';
import { Shrine } from '../object/deco/Shrine';
import { Door } from '../object/special/Door';
import { MatterJsSystem } from '../../engine/MatterJsSystem';
import { SiteContent } from '../../site/SiteContentSystem';
import { CharacterFacing } from '../object/being/CharacterFacing';

export enum LevelId {
    LEVEL_START,
    LEVEL_HUT,
}

/** ********************************************************************************************************************
*   Represents the current level.
***********************************************************************************************************************/
export abstract class Level {
    public      playerStartX: number                         = 0.0;
    public      playerStartY: number                         = 0.0;
    public      playerInitialFloat: boolean                        = false;
    public      playerInitialFacing: CharacterFacing         = CharacterFacing.RIGHT;

    public      width: number                         = 0.0;
    public      height: number                         = 0.0;

    public      player: Player                  = null;
    public      enemies: Bot[]                   = [];
    public      obstacles: Obstacle[]              = [];
    public      movables: Movable[]               = [];
    public      decosBg: Decoration[]            = [];
    public      decosFg: Decoration[]            = [];
    public      siteTriggers: SiteTrigger[]           = [];
    public      sigsaws: SigSaw[]                = [];
    public      bounces: Bounce[]                = [];
    public      platforms: Platform[]              = [];
    public      parallaxBgs: ParallaxDeco[]          = [];
    public      parallaxFgs: ParallaxDeco[]          = [];
    public      shrines: Shrine[]                = [];
    public      doors: Door[]                = [];

    /** ****************************************************************************************************************
    *   Sets the player and the game objects.
    *******************************************************************************************************************/
    protected abstract createGameObjects(): void;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *
    *   @param matterJsSystem The matter.js instance to add all elements to.
    *******************************************************************************************************************/
    public init( matterJsSystem: MatterJsSystem ): void {
        this.createGameObjects();

        // order affects z layer

        for ( const parallaxBg of this.parallaxBgs ) {
            matterJsSystem.addToWorld( parallaxBg.shape.body );
        }
        for ( const siteTrigger of this.siteTriggers ) {
            matterJsSystem.addToWorld( siteTrigger.shape.body );
        }
        for ( const door of this.doors ) {
            matterJsSystem.addToWorld( door.shape.body );
        }
        for ( const sigsaw of this.sigsaws ) {
            matterJsSystem.addToWorld( sigsaw.shape.body );
        }
        for ( const bounce of this.bounces ) {
            matterJsSystem.addToWorld( bounce.shape.body );
        }
        for ( const platform of this.platforms ) {
            matterJsSystem.addToWorld( platform.shape.body );
            matterJsSystem.addToWorld( platform.frictionShape.body );
        }
        for ( const obstacle of this.obstacles ) {
            matterJsSystem.addToWorld( obstacle.shape.body );
        }
        for ( const decoBg of this.decosBg ) {
            matterJsSystem.addToWorld( decoBg.shape.body );
        }
        for ( const movable of this.movables ) {
            matterJsSystem.addToWorld( movable.shape.body );
        }
        for ( const enemy of this.enemies ) {
            matterJsSystem.addToWorld( enemy.shape.body );
        }

        // player last - highest Z layer
        matterJsSystem.addToWorld( this.player.shape.body );

        for ( const gameObject of this.decosFg ) {
            matterJsSystem.addToWorld( gameObject.shape.body );
        }
        for ( const gameObject of this.parallaxFgs ) {
            matterJsSystem.addToWorld( gameObject.shape.body );
        }
    }

    /** ****************************************************************************************************************
    *   Renders all level components (except parallax game objects).
    *******************************************************************************************************************/
    public render(): void {
        for ( const decoBg of this.decosBg ) {
            decoBg.render();
        }
        for ( const shrine of this.shrines ) {
            shrine.render();
        }
        for ( const siteTrigger of this.siteTriggers ) {
            siteTrigger.render();
        }
        for ( const door of this.doors ) {
            door.render();
        }
        for ( const sigsaw of this.sigsaws ) {
            sigsaw.render();
        }
        for ( const bounce of this.bounces ) {
            bounce.render();
        }
        for ( const platform of this.platforms ) {
            platform.render();
        }
        for ( const obstacle of this.obstacles ) {
            obstacle.render();
        }
        for ( const movable of this.movables ) {
            movable.render();
        }

        this.player.render();

        for ( const enemy of this.enemies ) {
            enemy.render();
        }

        for ( const decoFg of this.decosFg ) {
            decoFg.render();
        }
    }

    /** ****************************************************************************************************************
    *   Renders all parallax game objects.
    *******************************************************************************************************************/
    public renderParallaxElements(): void {
        for ( const gameObject of this.parallaxBgs ) {
            gameObject.render();
        }

        for ( const gameObject of this.parallaxFgs ) {
            gameObject.render();
        }
    }

    /** ****************************************************************************************************************
    *   Opens or closes the book of the specified shrine visible.
    *
    *   @param content The site content of the shrine to toggle the book.
    *   @param open    Specifies if the book shall be opened.
    *******************************************************************************************************************/
    public setShrineBookOpen( content: SiteContent, open: boolean ): void {
        for ( const gameObject of this.shrines ) {
            if ( gameObject.content === content ) {
                if ( open ) {
                    gameObject.setBookOpen( true );
                } else {
                    gameObject.setBookOpen( false );
                }
            }
        }
    }
}
