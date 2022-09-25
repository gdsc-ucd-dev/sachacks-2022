import Image from "next/image";
import mypic from "../members/member9.png";
const Team9: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="1055px"
      height="243px"
    />
  );
};

export default Team9;
