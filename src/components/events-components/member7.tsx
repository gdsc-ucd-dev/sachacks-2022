import Image from 'next/image'
import mypic from '/Users/mukta/sachacks update/sachacks-2022/public/assets/member7.png'
const Team7: React.FC = () => {
  return (
    <Image
      src={mypic}
      alt="Picture of team member"
      width="170px"
      height="242px"
    />
  )}
  
export default Team7;
  