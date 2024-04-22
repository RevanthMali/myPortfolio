import profile3 from "../assets/profile3.jpg"
import {motion} from "framer-motion"
const About = ()=>{
  return(
        <div className="border-b border-neutral-900">
            <motion.h1 
             whileInView={{opacity:1,y:0}}
             initial={{opacity:0,y:100}}
             transition={{duration:1}}
            className="my-20 text-center text-3xl">
                About  
                <span className="text-gray-700 font-bold"> Me </span>
                </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5, delay:0.5}}
                className="w-full  lg:w-1/2  lg:p-8"> 
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl lg:size-80 md:size-56 opacity-75" src={profile3} alt="Revanth Mali" />
                    </div>
                </motion.div>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{x:100,opacity:0}}
                    transition={{duration:0.5, delay:0.5}}
                    className="w-full  lg:w-1/2  lg:p-8">
                    <div className=" flex justify-center lg:justify-start"> 
                        <p className="my-2 max-w-xl py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Aliquam iure laborum quis quam fuga consectetur assumenda, 
                            impedit repudiandae dolores deserunt inventore beatae quisquam officiis voluptatum?
                             Magnam, distinctio?</p>
                    </div>
                    </motion.div>
                </div>
            </div>
  );
} 
export default About;