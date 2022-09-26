import Image from "next/image";
import mypic from "../members/team1.png";
const Team1: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  );
};

export default Team1;
