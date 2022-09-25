import Image from "next/image";
import mypic from "../members/member6.png";
const Team6: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  );
};

export default Team6;
