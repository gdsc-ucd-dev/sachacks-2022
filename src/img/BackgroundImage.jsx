/* eslint-disable @next/next/no-img-element */
import bgImageOne from './sachacks_landing_bg_1.png';
import bgImageTwo from './sachacks_landing_bg_2.png';
import bgImageThree from './sachacks_landing_bg_3.png';

export default function BackgroundImage() {
  return (
    <div className="absolute top-0 z-0 w-full h-full left-0 overflow-hidden">
      {[bgImageOne, bgImageTwo, bgImageThree].map((eachImage, index) => (
        <img
          key={index}
          src={eachImage.src}
          alt={`background image ${index}`}
          className="w-full opacity-50"
        />
      ))}
    </div>
  );
}
