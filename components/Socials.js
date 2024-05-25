import Link from 'next/link';

import {RiYoutubeLine,RiInstagramLine,RiFacebookLine,RiDribbbleLine,RiLinkedinFill,RiPinterestLine} from 'react-icons/ri';


const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.youtube.com/channel/UCJ37mNvwJw_-A8NcZ9E-UCQ'} className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/davidmv1204/'} className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/davidmv1204/'} className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiInstagramLine />
      </Link>
      
      <Link href={'https://www.linkedin.com/in/david-mejia-vilca-68a5581ab/'} className='hover:text-accent transition-all duration-300' target="_blank" rel="noopener noreferrer">
        <RiLinkedinFill />
      </Link>
      
    </div>

  );
};

export default Socials;
