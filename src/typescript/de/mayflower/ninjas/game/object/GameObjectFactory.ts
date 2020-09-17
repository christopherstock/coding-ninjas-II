
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /** ****************************************************************************************************************
    *   Creates customized instances of game objects.
    *******************************************************************************************************************/
    export abstract class GameObjectFactory
    {
        /** ************************************************************************************************************
        *   Creates a wooden crate.
        *
        *   TODO remove and simplify!
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor for bottom Y.
        *
        *   @return The created box.
        ***************************************************************************************************************/
        public static createWoodenCrate( x:number, yBottom:number ):ninjas.Movable
        {
            const sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage(
                ninjas.ImageData.IMAGE_CRATE_WOOD
            );

            return new ninjas.Movable
            (
                new ninjas.ShapeRectangle
                (
                    sprtiteTemplate.width,
                    sprtiteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    ninjas.StaticShape.NO,
                    0.0,
                    ninjas.BodyFriction.NONE,
                    ninjas.BodyDensity.WOOD,
                    ninjas.BodyRestitution.WOOD
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates a bouncing movable with rectangular shape.
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor for bottom Y.
        *   @param imageId  The id of the image to use.
        *
        *   @return The created movable.
        ***************************************************************************************************************/
        public static createMovableRect
        (
            x       :number,
            yBottom :number,
            imageId :string
        )
        : ninjas.Movable
        {
            const sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( imageId );

            return new ninjas.Movable
            (
                new ninjas.ShapeRectangle
                (
                    sprtiteTemplate.width,
                    sprtiteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    ninjas.StaticShape.NO,
                    0.0,
                    ninjas.BodyFriction.NONE,
                    ninjas.BodyDensity.DEFAULT,
                    ninjas.BodyRestitution.RUBBER
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates a bouncing movable with a circular shape.
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor for bottom Y.
        *   @param imageId  The id of the image to use.
        *   @param angle    The initial rotation angle for this movable.
        *
        *   @return The created movable.
        ***************************************************************************************************************/
        public static createMovableCircular
        (
            x       :number,
            yBottom :number,
            imageId :string,
            angle   :number
        )
        : ninjas.Movable
        {
            const sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( imageId );

            return new ninjas.Movable
            (
                new ninjas.ShapeCircle
                (
                    sprtiteTemplate.width,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    ninjas.StaticShape.NO,
                    angle,
                    ninjas.BodyFriction.NONE,
                    ninjas.BodyDensity.MINIMUM,
                    ninjas.BodyRestitution.RUBBER
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates a sphere.
        *
        *   @param x           Anchor X.
        *   @param yBottom     Anchor of bottom Y.
        *   @param friction    The surface friction for this object.
        *   @param density     The density for this object.
        *   @param restitution The restitution for this object.
        *
        *   @return The created sphere.
        *
        *   @throws An error if the dimensions of the assigned sprite are not square.
        ***************************************************************************************************************/
        public static createSphere
        (
            x           :number,
            yBottom     :number,
            friction    :ninjas.BodyFriction,
            density     :ninjas.BodyDensity,
            restitution :ninjas.BodyRestitution
        )
        : ninjas.Movable
        {
            const spriteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage(
                ninjas.ImageData.IMAGE_TEST_SPHERE
            );

            if ( spriteTemplate.width !== spriteTemplate.height )
            {
                throw new Error(
                    'Non-square sprite template dimensions for circular deco - sprite image ['
                    + spriteTemplate.imageIds[ 0 ]
                    + ']'
                );
            }

            return new ninjas.Movable
            (
                new ninjas.ShapeCircle
                (
                    spriteTemplate.width,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    ninjas.StaticShape.NO,
                    0.0,
                    friction,
                    density,
                    restitution
                ),
                spriteTemplate,
                x,
                ( yBottom - spriteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates an item.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return The created item.
        ***************************************************************************************************************/
        public static createItem( x:number, y:number ):ninjas.Item
        {
            return new ninjas.Item
            (
                new ninjas.ShapeRectangle
                (
                    30.0,
                    52.0,
                    ninjas.DebugColor.COLOR_DEBUG_ITEM,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.IMAGE_ITEM ),
                x,
                y
            );
        }

        /** ************************************************************************************************************
        *   Creates an rectangular obstacle with a specified sprite.
        *
        *   @param xLeft           Anchor for left X.
        *   @param yBottom         Anchor for top Y.
        *   @param spriteTemplate  The sprite template to use for this obstacle.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *   @param staticShape     Specifies if this obstacle should be static or not.
        *   @param density         The density of this obstacle.
        *   @param restitution     The restitution of this obstacle.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createObstacleSpriteful
        (
            xLeft           :number,
            yBottom         :number,
            spriteTemplate  :ninjas.SpriteTemplate,
            angle           :number = 0,
            jumpPassThrough :ninjas.JumpPassThrough = ninjas.JumpPassThrough.NO,
            staticShape     :ninjas.StaticShape = ninjas.StaticShape.YES,
            density         :ninjas.BodyDensity = ninjas.BodyDensity.DEFAULT,
            restitution     :ninjas.BodyRestitution = ninjas.BodyRestitution.DEFAULT
        )
        : ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    staticShape,
                    angle,
                    ninjas.BodyFriction.OBSTACLE,
                    density,
                    restitution
                ),
                xLeft,
                ( yBottom - spriteTemplate.height ),
                spriteTemplate,
                jumpPassThrough
            );
        }

        /** ************************************************************************************************************
        *   Creates an rectangular obstacle without an assigned sprite.
        *
        *   @param xLeft           Anchor for left X.
        *   @param yTop            Anchor for top Y.
        *   @param width           Width of the obstacle.
        *   @param height          Height of the obstacle.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createObstacleSpriteless
        (
            xLeft           :number,
            yTop            :number,
            width           :number,
            height          :number,
            angle           :number,
            jumpPassThrough :ninjas.JumpPassThrough
        )
        : ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    ninjas.StaticShape.YES,
                    angle,
                    ninjas.BodyFriction.OBSTACLE,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                xLeft,
                yTop,
                null,
                jumpPassThrough
            );
        }

        /** ************************************************************************************************************
        *   Creates a free form.
        *
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param vertices       All vertices that build up the free form.
        *   @param angle          The initial rotation of the form.
        *   @param spriteTemplate The sprite template to use for this game object.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createFreeForm(
            x:number, y:number, vertices:matter.Vector[], angle:number, spriteTemplate:ninjas.SpriteTemplate
        )
        : ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeFreeForm
                (
                    vertices,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    ninjas.StaticShape.YES,
                    angle,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                x,
                y,
                spriteTemplate,
                ninjas.JumpPassThrough.NO
            );
        }

        /** ************************************************************************************************************
        *   Creates an elevated ramp obstacle.
        *
        *   @param x               Anchor X.
        *   @param y               Anchor Y.
        *   @param width           The ramp width.
        *   @param height          The ramp height.
        *   @param deltaY          The slope of the ramp. Can be positive (descending) or negative (ascending).
        *   @param spriteTemplate  The sprite template to use for this game object.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        *
        *   @return The created obstacle ramp.
        ***************************************************************************************************************/
        public static createElevatedRamp
        (
            x               :number,
            y               :number,
            width           :number,
            height          :number,
            deltaY          :number,
            spriteTemplate  :ninjas.SpriteTemplate,
            jumpPassThrough :ninjas.JumpPassThrough
        )
        : ninjas.Obstacle
        {
            const vertices :matter.Vector[] = [];

            // shape ramp
            vertices.push( matter.Vector.create( 0.0,   0.0             ) );
            vertices.push( matter.Vector.create( width, deltaY          ) );
            vertices.push( matter.Vector.create( width, height + deltaY ) );
            vertices.push( matter.Vector.create( 0.0,   height          ) );

            if ( deltaY <= 0.0 )
            {
                y += deltaY;
            }

            return new ninjas.Obstacle
            (
                new ninjas.ShapeFreeForm
                (
                    vertices,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                x,
                y,
                spriteTemplate,
                jumpPassThrough
            );
        }

        /** ************************************************************************************************************
        *   Creates an enemy.
        *
        *   @param x                  Anchor X.
        *   @param yBottom            Anchor bottom Y.
        *   @param lookingDirection   The enemies initial looking and walking direction.
        *   @param walkingTargetLeft  Left walking target X.
        *   @param walkingTargetRight Right walking target X.
        *   @param characterSpriteSet The sprite set to use for this enemy.
        *
        *   @return The created enemy.
        ***************************************************************************************************************/
        public static createEnemy
        (
            x                  :number,
            yBottom            :number,
            lookingDirection   :ninjas.CharacterLookingDirection,
            walkingTargetLeft  :number,
            walkingTargetRight :number,
            characterSpriteSet :ninjas.CharacterSpriteSet
        )
        : ninjas.Bot
        {
            const diamondSprite:ninjas.SpriteTemplate = ninjas.SpriteTemplateData.SPRITE_ENEMY_NINJA_1_STAND_LEFT;

            return new ninjas.Bot
            (
                GameObjectFactory.createCharacterDiamondShape( diamondSprite, ninjas.DebugColor.COLOR_DEBUG_ENEMY ),
                x,
                yBottom - diamondSprite.height,
                walkingTargetLeft,
                walkingTargetRight,
                lookingDirection,
                diamondSprite,
                characterSpriteSet
            );
        }

        /** ************************************************************************************************************
        *   Creates a rectangular decoration with dimensions from the assigned sprite.
        *
        *   @param xLeft          Anchor for left X.
        *   @param yBottom        Anchor for bottom Y.
        *   @param isStatic       Specifies if the decoration is static.
        *   @param spriteTemplate The sprite template to use for this decoration.
        *   @param debugColor     The debug color for this deco if no sprite is assigned.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createDecorationRect
        (
            xLeft          :number,
            yBottom        :number,
            isStatic       :ninjas.StaticShape,
            spriteTemplate :ninjas.SpriteTemplate,
            debugColor     :ninjas.DebugColor = ninjas.DebugColor.COLOR_DEBUG_DECORATION
        )
        : ninjas.Decoration
        {
            return new ninjas.Decoration
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    debugColor,
                    isStatic,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.RUBBER,
                    ninjas.BodyRestitution.RUBBER
                ),
                spriteTemplate,
                xLeft,
                ( yBottom - spriteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates a circular decoration with dimensions from the assigned sprite.
        *
        *   @param xLeft          Anchor for left X.
        *   @param yBottom        Anchor for bottom Y.
        *   @param isStatic       Specifies if the decoration is static.
        *   @param spriteTemplate The sprite template to use for this decoration.
        *
        *   @return The created decoration.
        *
        *   @throws An error if the dimensions of the assigned sprite are not square.
        ***************************************************************************************************************/
        public static createDecorationCircular
        (
            xLeft          :number,
            yBottom        :number,
            isStatic       :ninjas.StaticShape,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : ninjas.Decoration
        {
            if ( spriteTemplate.width !== spriteTemplate.height )
            {
                throw new Error( 'Non-square sprite template dimensions for circular deco - sprite image ['
                    + String( spriteTemplate.imageIds[ 0 ] )
                    + ']'
                );
            }

            return new ninjas.Decoration
            (
                new ninjas.ShapeCircle
                (
                    spriteTemplate.width,
                    ninjas.DebugColor.COLOR_DEBUG_DECORATION,
                    isStatic,
                    0.0,
                    ninjas.BodyFriction.RUBBER,
                    ninjas.BodyDensity.RUBBER,
                    ninjas.BodyRestitution.RUBBER
                ),
                spriteTemplate,
                xLeft,
                ( yBottom - spriteTemplate.height )
            );
        }

        /** ************************************************************************************************************
        *   Creates a parallax scrolling decoration.
        *
        *   @param level          The level to append this parallax deco to.
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param parallaxRatio  The parallax ratio according to the level width.
        *   @param decoPosition   The position of this decoration - foreground or background.
        *   @param spriteTemplate The decoration sprite.
        ***************************************************************************************************************/
        public static createParallaxDeco
        (
            level          :ninjas.Level,
            x              :number,
            y              :number,
            parallaxRatio  :number,
            decoPosition   :ninjas.DecoPosition,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : void
        {
            const parallaxDeco :ninjas.ParallaxDeco = new ninjas.ParallaxDeco
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    ninjas.DebugColor.COLOR_TRANSPARENT,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                spriteTemplate,
                x,
                y,
                parallaxRatio
            );

            switch ( decoPosition )
            {
                case ninjas.DecoPosition.FG:
                {
                    level.parallaxFgs.push( parallaxDeco );
                    break;
                }

                case ninjas.DecoPosition.BG:
                {
                    level.parallaxBgs.push( parallaxDeco );
                    break;
                }
            }
        }

        /** ************************************************************************************************************
        *   Creates a site trigger.
        *
        *   @param level               The level to add the site trigger to.
        *   @param x                   Anchor X.
        *   @param yBottom             Anchor of bottom Y.
        *   @param width               Width for the site trigger.
        *   @param height              Height for the site trigger.
        *   @param content             The site content to display on releasing this trigger.
        *   @param sitePanelAppearance The position for the site panel to appear.
        *   @param spriteTemplate      The decoration sprite to display in bg of this site trigger.
        ***************************************************************************************************************/
        public static createSiteTrigger
        (
            level               :ninjas.Level,
            x                   :number,
            yBottom             :number,
            width               :number,
            height              :number,
            content             :ninjas.SiteContent,
            sitePanelAppearance :ninjas.SitePanelAppearance,
            spriteTemplate      :ninjas.SpriteTemplate
        )
        : void
        {
            const siteTrigger :ninjas.SiteTrigger = new ninjas.SiteTrigger
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_SITE_TRIGGER,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                spriteTemplate,
                x,
                yBottom - height,
                content,
                sitePanelAppearance
            );

            level.siteTriggers.push( siteTrigger );
        }

        /** ************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param level          The level to add the sigsaw to.
        *   @param xLeft          Anchor X.
        *   @param yTop           Anchor Y.
        *   @param width          Object width.
        *   @param height         Object height.
        *   @param spriteTemplate The decoration sprite.
        ***************************************************************************************************************/
        public static createSigsaw
        (
            level          :ninjas.Level,
            xLeft          :number,
            yTop           :number,
            width          :number,
            height         :number,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : void
        {
            const sigsaw :ninjas.SigSaw = new ninjas.SigSaw
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_SIGSAW,
                    ninjas.StaticShape.NO,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.DEFAULT,
                    ninjas.BodyRestitution.DEFAULT
                ),
                spriteTemplate,
                xLeft,
                yTop
            );

            level.sigsaws.push( sigsaw );
        }

        /** ************************************************************************************************************
        *   Creates a platform.
        *
        *   @param width          Object width.
        *   @param height         Object height.
        *   @param spriteTemplate The decoration sprite.
        *   @param speed          Moving speed of the platform in px per tick.
        *   @param waypoints      Moving waypoints. First waypoint is the startup position.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createPlatform
        (
            width          :number,
            height         :number,
            spriteTemplate :ninjas.SpriteTemplate,
            speed          :number,
            waypoints      :matter.Vector[]
        )
        :ninjas.Platform
        {
            // TODO see 'static friction example'

            return new ninjas.Platform
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_PLATFORM,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.INFINITE,
                    ninjas.BodyRestitution.DEFAULT
                ),
                spriteTemplate,
                speed,
                waypoints
            );
        }

        /** ************************************************************************************************************
        *   Creates a bounce.
        *
        *   @param level          The level to add the sigsaw to.
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param width          Object width.
        *   @param height         Object height.
        *   @param spriteTemplate The decoration sprite.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createBounce(
            level          :ninjas.Level,
            x              :number,
            y              :number,
            width          :number,
            height         :number,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : void
        {
            const bounce :ninjas.Bounce = new ninjas.Bounce
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_BOUNCE,
                    ninjas.StaticShape.NO,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.DEFAULT,
                    ninjas.BodyRestitution.DEFAULT
                ),
                spriteTemplate,
                x,
                y
            );

            level.bounces.push( bounce );
        }

        /** ************************************************************************************************************
        *   Creates a diamond shape for the given sprite template.
        *
        *   @param spriteTemplate The sprite template to create a diamond shape for.
        *   @param debugColor     The debug color to use for this shape.
        *
        *   @return The created diamond shape.
        ***************************************************************************************************************/
        public static createCharacterDiamondShape(
            spriteTemplate :ninjas.SpriteTemplate,
            debugColor     :ninjas.DebugColor
        )
        : ninjas.ShapeFreeForm
        {
            const gapSizeX :number = ( spriteTemplate.width / 2 );
            const gapSizeY :number = ninjas.SettingMatter.PLAYER_EDGE_GAP_Y;

            const vertices :matter.Vector[] = [];

            // draw diamond path
            vertices.push( matter.Vector.create( gapSizeX,                        0.0                              ) );
            vertices.push( matter.Vector.create( spriteTemplate.width - gapSizeX, 0.0                              ) );
            vertices.push( matter.Vector.create( spriteTemplate.width,            gapSizeY                         ) );
            vertices.push( matter.Vector.create( spriteTemplate.width,            spriteTemplate.height - gapSizeY ) );
            vertices.push( matter.Vector.create( spriteTemplate.width - gapSizeX, spriteTemplate.height            ) );
            vertices.push( matter.Vector.create( gapSizeX,                        spriteTemplate.height            ) );
            vertices.push( matter.Vector.create( 0.0,                             spriteTemplate.height - gapSizeY ) );
            vertices.push( matter.Vector.create( 0.0,                             gapSizeY                         ) );

            return new ninjas.ShapeFreeForm
            (
                vertices,
                debugColor,
                ninjas.StaticShape.NO,
                0.0,
                ninjas.BodyFriction.PLAYER,
                ninjas.BodyDensity.PLAYER,
                ninjas.BodyRestitution.DEFAULT
            );
        }
    }
