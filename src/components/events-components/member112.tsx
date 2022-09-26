import Image from "next/image";
import mypic from "../members/member112.png";
const Team112: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="1115px"
      height="242px"
    />
  );
};

export default Team112;
