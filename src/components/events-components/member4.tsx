import Image from "next/image";
import mypic from "../members/member4.png";
const Team4: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="1055px"
      height="242px"
    />
  );
};

export default Team4;
