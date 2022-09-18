import Image from 'next/image'
import mypic from '/Users/mukta/sachacks update/sachacks-2022/public/assets/member111.png'
const Team111: React.FC = () => {
  return (
    <Image
    className='w-full'
      src={mypic}
      alt="Picture of team member"
    //   width="1055px"
    //   height="242px"
    />
  )}
  
export default Team111;
  