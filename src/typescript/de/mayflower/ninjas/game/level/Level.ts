
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
        ***************************************************************************************************************/
        public init() : void
        {
            this.createGameObjects();

            for ( const gameObject of this.parallaxBgs )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.siteTriggers )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.decosBg )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.obstacles )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.movables )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.enemies )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }

            ninjas.Main.game.engine.matterJsSystem.addToWorld( this.player.shape.body );

            for ( const gameObject of this.decosFg )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
            for ( const gameObject of this.parallaxFgs )
            {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
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
