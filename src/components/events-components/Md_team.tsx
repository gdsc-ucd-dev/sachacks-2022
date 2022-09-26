import Image from "next/image";
import mypic from "../members/Md_team.png";
const Md_team: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="1100px"
      height="1400px"
    />
  );
};

export default Md_team;
