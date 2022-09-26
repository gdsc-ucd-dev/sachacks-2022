import Image from "next/image";
import mypic from "../members/member2.png";
const Team2: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  );
};

export default Team2;
