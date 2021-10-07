import { SizeProp } from "@fortawesome/fontawesome-svg-core";

// EXAMPLE TOOLS
export interface ObjectDataProps { 
    [x: string]: string | JSX.Element | undefined
}


export interface TargetProps { 
    target: { 
        value: any; 
    }
}

// SITE ICON
export interface SiteIconProps {
    type: string | undefined; 
    size: SizeProp | undefined; 
    color?: string;
}

export interface LinkRendererProps {
    title?: string | undefined; 
    link?: string | undefined;
    icon?: string;
    content?: string | JSX.Element;
    external_link?: string 
}

// Site Link Props
export interface SiteLinkProps {
    link: string;
    type: "local" | "external"
    placeholder: string | number | undefined
}

export interface SiteRenderProps { 
    fetch: { 
        loading: boolean; 
        error: boolean; 
        response: any
    }; 
    component: JSX.IntrinsicAttributes; 
}