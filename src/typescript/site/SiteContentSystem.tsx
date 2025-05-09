import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import { ContentWelcome } from './component/ContentWelcome';
import { ContentServices } from './component/ContentServices';

/** ********************************************************************************************************************
*   Specifies all existing site contents.
***********************************************************************************************************************/
export enum SiteContent
{
    CONTENT_WELCOME,
    CONTENT_SERVICES,
}

/** ********************************************************************************************************************
*   Manages all site contents for the site panel.
***********************************************************************************************************************/
export class SiteContentSystem {
    public  discoveredContents: SiteContent[]       = [];

    private contentWelcome: JSX.Element             = null;
    private contentServices: JSX.Element            = null;

    /** ****************************************************************************************************************
    *   Inits all site contents.
    *******************************************************************************************************************/
    public initAllContents(): void {
        this.contentWelcome    = <ContentWelcome    />;
        this.contentServices   = <ContentServices   />;
    }

    /** ****************************************************************************************************************
    *   Mounts the specified content to the specified container.
    *
    *   @param content   The site content to mount.
    *   @param container The container to mount the content to.
    *******************************************************************************************************************/
    public mountContent(content: SiteContent, container: HTMLDivElement): void {
        // unmount existent component if any
        ReactDOM.unmountComponentAtNode(
            container
        );

        // add to discovered contents if not already discovered
        if (!this.discoveredContents.includes(content)) {
            this.discoveredContents.push(content);
        }

        // pick new content to mount
        let elementToMount: JSX.Element = null;
        switch (content) {
            case SiteContent.CONTENT_WELCOME:
            {
                elementToMount = this.contentWelcome;
                break;
            }

            case SiteContent.CONTENT_SERVICES:
            {
                elementToMount = this.contentServices;
                break;
            }
        }

        // mount content to DOM node
        ReactDOM.render(
            elementToMount,
            container
        );
    }
}
