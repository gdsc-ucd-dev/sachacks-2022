import Image from "next/image";
import mypic from "../members/member5.png";
const Team5: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  );
};

export default Team5;
