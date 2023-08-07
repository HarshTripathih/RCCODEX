import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
    <div className="flex justify-between items-center">
    <div className="flex">
     <img className="ml-9" src="https://see.fontimg.com/api/renderfont4/p781R/eyJyIjoiZHciLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiJ9/UmNjb2RleA/montserrat-bold.png" alt="Logo" />
    </div>

    <motion.p
  whileHover={{ scale: 1.2, }}
  
>
    <AddIcon style={{ fontSize: 100 }} className=" md:mr-52 md:mt-7 " />
    </motion.p>
    {/* <motion.div
        style={{ scale: 1.5, rotate: 45 }}
        className="md:mr-52 md:mt-7"
      >
        <AddIcon />
      </motion.div> */}
</div>
  <div>
  <p className='text-4xl   text-black font-bold'>Address</p>
  <p className='mt-2'>Sector 54</p>
  <p>Gurgaon Haryana</p>
  <p>singhvaibhav654@gmail.com</p>
  <p  className='flex justify-center items-center'> <motion.p whileHover={{ scale: 1.2, }}><InstagramIcon  className='m-3' style={{ fontSize: 50 }}/></motion.p><motion.p whileHover={{ scale: 1.2, }}>  <LinkedInIcon className='m-3' style={{ fontSize: 50 }}/></motion.p><motion.p whileHover={{ scale: 1.2, }}> <TwitterIcon className='m-3' style={{ fontSize: 50 }}/></motion.p> </p>
  
  </div>
  </div>
  );
};

export default Footer;
