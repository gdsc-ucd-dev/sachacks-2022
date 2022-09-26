import Image from "next/image";
import mypic from "../members/member8.png";
const Team8: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="230px"
      height="242px"
    />
  );
};

export default Team8;
