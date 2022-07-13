import join from "@/utils/join";

const SectionTitle: SectionTitleComponent = ({ title, color }) => {
  return (
    <h3
      className={join(
        "font-bold text-3xl lg:text-4xl 2xl:text-5xl",
        color === "light" ? "text-light" : "text-highlight"
      )}
    >
      {title}
    </h3>
  );
};
export default SectionTitle;
