export interface subMenuProps {
    content?: string | JSX.Element
    external_link?: string;
    title: string;
    link?: string;
}

export interface pageDataProps {
    content?: string | JSX.Element | undefined;
    external_link?: string;
    title: string;
    link?: string;
    sub_menu?: subMenuProps[]
}

export interface pageTemplateProps {
    name: string | undefined
}