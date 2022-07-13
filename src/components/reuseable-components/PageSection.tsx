/**
 * These components should be mounted to each section of each page
 * Do Not Use Them as children components
 * Current element variant is 'div', you can change to 'block' element such as 'section', 'article', ...
 * @param children : JSX.Element
 * @param className : (optional) string | undefined
 * @param id : (optional) string | undefined
 * @returns JSX.Element
 */
const PageSection: PageSectionComponent = ({ children, className, id }) => {
  return <div {...{ id, className }}>{children}</div>;
};
export default PageSection;
