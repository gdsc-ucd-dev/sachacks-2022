import join from "@/utils/join";

interface MLHPopUpProps {
  scroll: boolean;
}
const MLHPopUp: React.FC<MLHPopUpProps> = ({ scroll }) => {
  return (
    <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">
      <svg
      className={join(
        "transition-all fixed z-50 top-0 right-16 transform",
        scroll ? "-translate-y-full" : "translate-y-0"
      )}
      width="87"
      height="150"
      viewBox="0 0 87 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="0.598633" width="86" height="150" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_308_4061"
            transform="scale(0.0116279 0.00666667)"
          />
        </pattern>
        <image
          id="image0_308_4061"
          width="86"
          height="150"
          xlinkHref="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
        />
      </defs>
    </svg>
    </a>
  );
};
export default MLHPopUp;
