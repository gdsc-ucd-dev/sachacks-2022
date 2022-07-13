/**
 * These components should be mounted as a DIRECT CHILD of a page section component
 * Do Not Use Them as children components other than 'PageSection' components
 * Current element variant is 'section', you can change to 'block' element such as 'div', 'article', ...
 * USE THIS for giving internal spacing for each section to help maintain the full-screen background style while giving edge spaces
 * @param children : JSX.Element
 * @param className : (optional) string | undefined
 * @param id : (optional) string | undefined
 * @returns JSX.Element
 */
const PageWrapper: PageWrapperComponent = ({ children, className, id }) => {
  return <div {...{ id, className }}>{children}</div>;
};
export default PageWrapper;
