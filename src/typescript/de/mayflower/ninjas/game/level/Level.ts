
    import * as ninjas from '../../ninjas';

    /** ****************************************************************************************************************
    *   Represents the current level.
    *******************************************************************************************************************/
    export abstract class Level
    {
        /** The width of this level. */
        public      width                   :number                         = 0.0;
        /** The height of this level. */
        public      height                  :number                         = 0.0;

        /** All parallax bgs. */
        public      parallaxBgs             :ninjas.ParallaxDeco[]          = [];
        /** All decos in bg. */
        public      decosBg                 :ninjas.Decoration[]            = [];
        /** All shrines. */
        public      shrines                 :ninjas.Shrine[]                = [];
        /** All site triggers. */
        public      siteTriggers            :ninjas.SiteTrigger[]           = [];
        /** All obstacles. */
        public      obstacles               :ninjas.Obstacle[]              = [];
        /** All movables. */
        public      movables                :ninjas.Movable[]               = [];
        /** All enemies. */
        public      enemies                 :ninjas.Enemy[]                 = [];
        /** The player instance. */
        public      player                  :ninjas.Player                  = null;
        /** All decos in fg. */
        public      decosFg                 :ninjas.Decoration[]            = [];
        /** All parallax fgs. */
        public      parallaxFgs             :ninjas.ParallaxDeco[]          = [];

        /** ************************************************************************************************************
        *   Sets the player and the game objects.
        ***************************************************************************************************************/
        protected abstract createGameObjects();

        /** ************************************************************************************************************
        *   Inits a new level.
        *
        *   @param matterJsSystem The matter.js instance to add all elements to.
        ***************************************************************************************************************/
        public init( matterJsSystem:ninjas.MatterJsSystem ) : void
        {
            this.createGameObjects();

            for ( const parallaxBg of this.parallaxBgs )
            {
                matterJsSystem.addToWorld( parallaxBg.shape.body );
            }
            for ( const siteTrigger of this.siteTriggers )
            {
                matterJsSystem.addToWorld( siteTrigger.shape.body );
            }
            for ( const decoBg of this.decosBg )
            {
                matterJsSystem.addToWorld( decoBg.shape.body );
            }
            for ( const obstacle of this.obstacles )
            {
                matterJsSystem.addToWorld( obstacle.shape.body );
            }
            for ( const movable of this.movables )
            {
                matterJsSystem.addToWorld( movable.shape.body );
            }
            for ( const enemy of this.enemies )
            {
                matterJsSystem.addToWorld( enemy.shape.body );
            }

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

        /** ************************************************************************************************************
        *   Renders all level components (except parallax game objects).
        *
        *   @param keySystem The keySystem of the engine.
        ***************************************************************************************************************/
        public render( keySystem:ninjas.KeySystem ) : void
        {
            for ( const gameObject of this.decosBg )
            {
                gameObject.render();
            }
/*
            for ( let gameObject of this.shrines )
            {
                gameObject.render();
            }
*/
            for ( const gameObject of this.siteTriggers )
            {
                gameObject.render();
            }
            for ( const gameObject of this.obstacles )
            {
                gameObject.render();
            }
            for ( const gameObject of this.movables )
            {
                gameObject.render();
            }

            this.player.render();
            this.player.handleKeys( keySystem );
            this.player.renderAfterKeys();

            for ( const gameObject of this.enemies )
            {
                gameObject.render();
            }

            for ( const gameObject of this.decosFg )
            {
                gameObject.render();
            }
        }

        /** ************************************************************************************************************
        *   Renders all parallax game objects.
        ***************************************************************************************************************/
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

        /** ************************************************************************************************************
        *   Opens or closes the book of the specified shrine visible.
        *
        *   @param content The site content of the shrine to toggle the book.
        *   @param open    Specifies if the book shall be opened.
        ***************************************************************************************************************/
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
