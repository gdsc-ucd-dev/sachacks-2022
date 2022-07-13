/**
 * component type declarations here
 */

/**
 * LAYOUT COMPONENT
 */
interface LayoutComponentProps {
  children: JSX.Element;
}
declare type LayoutComponent = React.FC<LayoutComponentProps>;

/**
 * REUSEABLE COMPONENT FOR PAGE SECTION
 */
interface PageSectionComponentProps {
  children: JSX.Element;
  className?: string | undefined;
  id?: string | undefined;
}
declare type PageSectionComponent = React.FC<PageSectionComponentProps>;

/**
 * REUSEABLE COMPONENT FOR PAGE WRAPPER
 */
interface PageWrapperComponentProps {
  children: JSX.Element;
  className?: string | undefined;
  id?: string | undefined;
}
declare type PageWrapperComponent = React.FC<PageWrapperComponentProps>;

/**
 * REUSABLE COMPONENT FOR HEAD TITLE
 */
interface HeadTitleComponentProps {
  mountedIn: "header" | "footer";
}
declare type HeadTitleComponent = React.FC<HeadTitleComponentProps>;

/**
 * REUSABLE COMPONENT FOR SECTION TITLE
 */
interface SectionTitleComponentProps {
  title: string;
  color: "light" | "dark";
}
declare type SectionTitleComponent = React.FC<SectionTitleComponentProps>;

/**
 * FAQ COMPONENT
 */
declare type FAQComponent = React.FC<FAQData>;
