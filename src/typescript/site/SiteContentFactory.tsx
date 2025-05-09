import * as React                         from 'react';
import * as antd                          from 'antd';
import { TooltipPlacement               } from 'antd/lib/tooltip';
import { ButtonType                     } from 'antd/lib/button';
import { CarouselEffect                 } from 'antd/lib/carousel';
import { RadioChangeEvent               } from 'antd/es/radio';
import { ProgressType                   } from 'antd/es/progress/progress';
import { SettingEngine } from '../base/SettingEngine';
import { SiteContent } from './SiteContentSystem';

/** ********************************************************************************************************************
*   Creates content components for the factory.
***********************************************************************************************************************/
export class SiteContentFactory {
    /** ****************************************************************************************************************
    *   Creates a step indicator.
    *
    *   @param content The content to create the step indicator for.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static createStepIndicator(content: SiteContent): JSX.Element {
        const index: number = 2;

        /*
        Main.game.engine.siteSystem.contentSystem.discoveredContents.indexOf(
            content
        );
        */

        return <antd.Steps size="small" current={ index } status="process">
            <antd.Steps.Step title="" description="" />
            <antd.Steps.Step title="" description="" />
            <antd.Steps.Step title="" description="" />
            <antd.Steps.Step title="" description="" />
            <antd.Steps.Step title="" description="" />
            <antd.Steps.Step title="" description="" />
        </antd.Steps>;
    }

    /** ****************************************************************************************************************
    *   Creates a divider.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createDivider(): JSX.Element {
        return <antd.Divider />;
    }

    /** ****************************************************************************************************************
    *   Creates a vertical spacer of the default distance.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createSpacerVertical(): JSX.Element {
        return <div className="sitePanel verticalSpacer" />;
    }

    /** ****************************************************************************************************************
    *   Creates an image container as a JSX element.
    *
    *   @param src The url to the image.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createImageFullWidth(src: string): JSX.Element {
        return <div className="sitePanel defaultImageContainer">
            <img
                className="sitePanel defaultImage"
                src={ src }
                alt=""
            />
        </div>;
    }

    /** ****************************************************************************************************************
    *   Creates a floating image with the specified float.
    *
    *   @param float The desired float.
    *   @param src   The url to the image.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createImageFloating(float: any, src: string): JSX.Element {
        const marginLeft: string = (float === 'right' ? '10px' : '0');
        const marginRight: string = (float === 'left'  ? '10px' : '0');

        return <img
            style={
                {
                    float:        float,
                    marginLeft:   marginLeft,
                    marginRight:  marginRight,
                    marginBottom: '10px',
                }
            }
            src={ src }
            alt=""
        />;
    }

    /** ****************************************************************************************************************
    *   Creates a site headline.
    *
    *   @param text The text to display in the headline.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createHeadline(text: string): JSX.Element {
        const className: string = 'sitePanel defaultHeadline';

        return <h1 className={ className }>
            { text }
        </h1>;
    }

    /** ****************************************************************************************************************
    *   Creates a paragraph JSX element.
    *
    *   @param text      The text to be contained in the paragraph.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createParagraph(text: string, textAlign: any = 'left'): JSX.Element {
        return <p
            className={ 'sitePanel defaultParagraph' }
            style={{ textAlign: textAlign }}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    }

    /** ****************************************************************************************************************
    *   Creates a progress bar.
    *
    *   @param type    The type of progress bar to create.
    *   @param percent The current progress value in percent.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createProgress(type: ProgressType, percent: number): JSX.Element {
        return <antd.Progress type={ type } percent={ percent } status='active' />;
    }

    /** ****************************************************************************************************************
    *   Creates an icon.
    *
    *   @param type The type of icon to create.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createIcon(type: string): JSX.Element {
        return <antd.Icon type={ type } />;
    }

    /** ****************************************************************************************************************
    *   Creates an avatar.
    *
    *   @param src  The src of the image to display in the avatar.
    *   @param icon The icon to use in this avatar.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createAvatar(src: string, icon: string): JSX.Element {
        return <antd.Avatar
            src={ src }
            style={{ backgroundColor: SettingEngine.COLOR_PRIMARY_CSS }}
            icon={ icon }
        />;
    }

    /** ****************************************************************************************************************
    *   Creates a tag.
    *
    *   @param colorFg The foreground color to use for this tag.
    *   @param colorBg The background color to use for this tag.
    *   @param text    The label text for this tag.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createTag(colorFg: string, colorBg: string, text: string): JSX.Element {
        return <antd.Tag color={ colorFg } style={{ backgroundColor: colorBg }}>{ text }</antd.Tag>;
    }

    /** ****************************************************************************************************************
    *   Creates a badge.
    *
    *   @param count   The count to display in this badge.
    *   @param colorFg The foreground color for the count.
    *   @param colorBg The background color for the badge.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createBadge(count: string, colorFg: string, colorBg: string): JSX.Element {
        return <antd.Badge count={ count } style={{ color: colorFg, backgroundColor: colorBg }} />;
    }

    /** ****************************************************************************************************************
    *   Creates a toggle switch.
    *
    *   @param iconOn         The icon for the 'on'  state.
    *   @param iconOff        The icon for the 'off' state.
    *   @param defaultChecked Flags if the switch shall initially be checked.
    *   @param onChange       The callback being invoked when the switch is changed.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createSwitch(
        iconOn: string,
        iconOff: string,
        defaultChecked: boolean,
        onChange: (checked: boolean)=> void
    ): JSX.Element {
        return <antd.Switch
            checkedChildren={   <antd.Icon type={ iconOn  } /> }
            unCheckedChildren={ <antd.Icon type={ iconOff } /> }
            defaultChecked={    defaultChecked                 }
            onChange={          onChange                       }
        />;
    }

    /** ****************************************************************************************************************
    *   Creates a button.
    *
    *   @param tooltipPlacement The cardinal point for the tooltip to showup.
    *   @param toolTipTitle     The title for the tooltip.
    *   @param buttonType       The type of button.
    *   @param icon             The icon to use for this button.
    *   @param onClick          The callback being invoked when the button is clicked.
    *   @param caption          The caption for the button.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createButton(
        tooltipPlacement: TooltipPlacement,
        toolTipTitle: string,
        buttonType: ButtonType,
        icon: string,
        onClick: React.MouseEventHandler<HTMLElement>,
        caption: string
    ): JSX.Element {
        return <antd.Tooltip placement={ tooltipPlacement } title={ toolTipTitle }>
            <antd.Button
                type={    buttonType }
                icon={    icon }
                loading={ false }
                onClick={ onClick }
            >
                { caption }
            </antd.Button>
        </antd.Tooltip>;
    }

    /** ****************************************************************************************************************
    *   Creates a carousel.
    *
    *   @param effect        The effect for the next carousel page to showup.
    *   @param autoplay      Specifies if the carousel should automatically change pages.
    *   @param autoplaySpeed The delay speed for automatic page changes.
    *   @param changeSpeed   The duration for one change animation.
    *   @param pages         All pages to show up in the carousel.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createCarousel(
        effect: CarouselEffect,
        autoplay: boolean,
        autoplaySpeed: number,
        changeSpeed: number,
        pages: JSX.Element[]
    ): JSX.Element {
        const contents: JSX.Element[] = [];

        for (let key: number = 0; key < pages.length; ++key) {
            contents.push(<div key={ key }>{ pages[ key ] }</div>);
        }

        return <antd.Carousel
            effect={ effect }
            autoplay={ autoplay }
            autoplaySpeed={ autoplaySpeed }
            speed={ changeSpeed }
            className="tester"
        >
            { contents }
        </antd.Carousel>;
    }

    /** ****************************************************************************************************************
    *   Creates an accordion.
    *
    *   @param headers All headers for all contents.
    *   @param pages   All contents.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createAccordion(
        headers: string[],
        pages: JSX.Element[]
    ): JSX.Element {
        const contents: JSX.Element[] = [];

        for (let key: number = 0; key < pages.length; ++key) {
            contents.push(
                <antd.Collapse.Panel header={ headers[ key ] } key={ String(key) }>
                    { pages[ key ] }
                </antd.Collapse.Panel>
            );
        }

        return <antd.Collapse accordion defaultActiveKey={ [ '0' ] }>
            { contents }
        </antd.Collapse>;
    }

    /** ****************************************************************************************************************
    *   Creates a tabbed pane.
    *
    *   @param defaultActiveTab The initially active tab. Index is zero based.
    *   @param headers          The headlines for all tabs.
    *   @param pages            The contents for all tabs.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createTabbedPane(
        defaultActiveTab: number,
        headers: JSX.Element[],
        pages: JSX.Element[]
    ): JSX.Element {
        const contents: JSX.Element[] = [];

        for (let key: number = 0; key < pages.length; ++key) {
            contents.push(
                <antd.Tabs.TabPane tab={ headers[ key ] } key={ String(key) }>
                    { pages[ key ] }
                </antd.Tabs.TabPane>
            );
        }

        return <antd.Tabs defaultActiveKey={ String(defaultActiveTab) }>
            { contents }
        </antd.Tabs>;
    }

    /** ****************************************************************************************************************
    *   Creates a timeline.
    *
    *   @param colors The colors for the single items.
    *   @param items  The items for this timeline to display.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createTimeline(
        colors: string[],
        items: JSX.Element[]
    ): JSX.Element {
        const contents: JSX.Element[] = [];

        for (let key: number = 0; key < items.length; ++key) {
            contents.push(
                <antd.Timeline.Item color={ colors[ key ] } key={ String(key) } >
                    { items[ key ] }
                </antd.Timeline.Item>
            );
        }

        return <antd.Timeline>
            { contents }
        </antd.Timeline>;
    }

    /** ****************************************************************************************************************
    *   Creates a button group.
    *
    *   @param defaultValue The initially selected value of the group.
    *   @param values       All values for all buttons in the group.
    *   @param labels       All labels for all buttons in the group.
    *   @param onChange     The callback being invoked when the selected value in the group has changed.
    *
    *   @return The created JSX element.
    *******************************************************************************************************************/
    public static createButtonGroup(
        defaultValue: string,
        values: string[],
        labels: string[],
        onChange: (e: RadioChangeEvent)=> void
    ): JSX.Element {
        const contents: JSX.Element[] = [];

        for (let key: number = 0; key < values.length; ++key) {
            contents.push(
                <antd.Radio.Button value={ values[ key ] } key={ String(key) }>
                    { labels[ key ] }
                </antd.Radio.Button>
            );
        }

        return <antd.Radio.Group
            onChange={     onChange     }
            defaultValue={ defaultValue }
        >
            { contents }
        </antd.Radio.Group>;
    }
}
