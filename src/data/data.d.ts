/**
 * data type declarations here
 */
interface LinkData {
  href: string;
  displayAs: string;
}
// internal routes type
declare type Routes = Array<LinkData>;
// external links type
declare type Links = Array<LinkData>;

interface FAQData {
  Q: string;
  A: string;
  links: string[] | null;
}
// FAQ question-response-links data type
declare type FAQs = Array<FAQData>;
