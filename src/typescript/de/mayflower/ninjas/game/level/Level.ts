import * as ninjas from '../../ninjas';

/** ********************************************************************************************************************
*   Represents the current level.
***********************************************************************************************************************/
export abstract class Level
{
    /** Player start position X. */
    public      playerStartX            :number                         = 0.0;
    /** Player start position Y. */
    public      playerStartY            :number                         = 0.0;
    /** Player initial parachute state. */
    public      playerInitialFloat      :boolean                        = false;
    /** Player initial facing. */
    public      playerInitialFacing     :ninjas.CharacterFacing         = ninjas.CharacterFacing.RIGHT;

    /** The width of this level. */
    public      width                   :number                         = 0.0;
    /** The height of this level. */
    public      height                  :number                         = 0.0;

    /** The player instance. */
    public      player                  :ninjas.Player                  = null;
    /** All enemies. */
    public      enemies                 :ninjas.Bot[]                   = [];
    /** All obstacles. */
    public      obstacles               :ninjas.Obstacle[]              = [];
    /** All movables. */
    public      movables                :ninjas.Movable[]               = [];
    /** All decos in bg. */
    public      decosBg                 :ninjas.Decoration[]            = [];
    /** All decos in fg. */
    public      decosFg                 :ninjas.Decoration[]            = [];
    /** All site triggers. */
    public      siteTriggers            :ninjas.SiteTrigger[]           = [];
    /** All sigsaws. */
    public      sigsaws                 :ninjas.SigSaw[]                = [];
    /** All bounces. */
    public      bounces                 :ninjas.Bounce[]                = [];
    /** All platforms. */
    public      platforms               :ninjas.Platform[]              = [];
    /** All parallax bgs. */
    public      parallaxBgs             :ninjas.ParallaxDeco[]          = [];
    /** All parallax fgs. */
    public      parallaxFgs             :ninjas.ParallaxDeco[]          = [];
    /** All shrines. TODO prune? */
    public      shrines                 :ninjas.Shrine[]                = [];

    /** ****************************************************************************************************************
    *   Sets the player and the game objects.
    *******************************************************************************************************************/
    protected abstract createGameObjects() : void;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *
    *   @param matterJsSystem The matter.js instance to add all elements to.
    *******************************************************************************************************************/
    public init( matterJsSystem:ninjas.MatterJsSystem ) : void
    {
        this.createGameObjects();

        // order affects z layer

        for ( const parallaxBg of this.parallaxBgs )
        {
            matterJsSystem.addToWorld( parallaxBg.shape.body );
        }
        for ( const siteTrigger of this.siteTriggers )
        {
            matterJsSystem.addToWorld( siteTrigger.shape.body );
        }
        for ( const sigsaw of this.sigsaws )
        {
            matterJsSystem.addToWorld( sigsaw.shape.body );
        }
        for ( const bounce of this.bounces )
        {
            matterJsSystem.addToWorld( bounce.shape.body );
        }
        for ( const platform of this.platforms )
        {
            matterJsSystem.addToWorld( platform.shape.body );
            matterJsSystem.addToWorld( platform.frictionShape.body );
        }
        for ( const obstacle of this.obstacles )
        {
            matterJsSystem.addToWorld( obstacle.shape.body );
        }
        for ( const decoBg of this.decosBg )
        {
            matterJsSystem.addToWorld( decoBg.shape.body );
        }
        for ( const movable of this.movables )
        {
            matterJsSystem.addToWorld( movable.shape.body );
        }
        for ( const enemy of this.enemies )
        {
            matterJsSystem.addToWorld( enemy.shape.body );
        }

        // player last - highest Z layer
        matterJsSystem.addToWorld( this.player.shape.body );

        for ( const gameObject of this.decosFg )
        {
            matterJsSystem.addToWorld( gameObject.shape.body );
        }
        for ( const gameObject of this.parallaxFgs )
        {
            matterJsSystem.addToWorld( gameObject.shape.body );
        }
    }

    /** ****************************************************************************************************************
    *   Renders all level components (except parallax game objects).
    *
    *   @param keySystem The keySystem of the engine.
    *******************************************************************************************************************/
    public render( keySystem:ninjas.KeySystem ) : void
    {
        for ( const decoBg of this.decosBg )
        {
            decoBg.render();
        }
        for ( const shrine of this.shrines )
        {
            shrine.render();
        }
        for ( const siteTrigger of this.siteTriggers )
        {
            siteTrigger.render();
        }
        for ( const sigsaw of this.sigsaws )
        {
            sigsaw.render();
        }
        for ( const bounce of this.bounces )
        {
            bounce.render();
        }
        for ( const platform of this.platforms )
        {
            platform.render();
        }
        for ( const obstacle of this.obstacles )
        {
            obstacle.render();
        }
        for ( const movable of this.movables )
        {
            movable.render();
        }

        this.player.render();

        for ( const enemy of this.enemies )
        {
            enemy.render();
        }

        for ( const decoFg of this.decosFg )
        {
            decoFg.render();
        }
    }

    /** ****************************************************************************************************************
    *   Renders all parallax game objects.
    *******************************************************************************************************************/
    public renderParallaxElements() : void
    {
        for ( const gameObject of this.parallaxBgs )
        {
            gameObject.render();
        }

        for ( const gameObject of this.parallaxFgs )
        {
            gameObject.render();
        }
    }

    /** ****************************************************************************************************************
    *   Opens or closes the book of the specified shrine visible.
    *
    *   @param content The site content of the shrine to toggle the book.
    *   @param open    Specifies if the book shall be opened.
    *******************************************************************************************************************/
    public setShrineBookOpen( content:ninjas.SiteContent, open:boolean ) : void
    {
        for ( const gameObject of this.shrines )
        {
            if ( gameObject.content === content )
            {
                if ( open )
                {
                    gameObject.setBookOpen( true );
                }
                else
                {
                    gameObject.setBookOpen( false );
                }
            }
        }
    }
}
