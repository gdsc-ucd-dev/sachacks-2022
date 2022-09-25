import Image from "next/image";
import mypic from "../members/member7.png";
const Team7: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  );
};

export default Team7;
