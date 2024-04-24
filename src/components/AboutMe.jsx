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
                        <p className="my-2 max-w-xl py-6">I am now seeking opportunities to apply my skills and knowledge in a professional setting.I am excited to contribute my technical expertise,
                         learn from experienced professionals, and further develop my abilities. Let's connect and explore how we can collaborate to leverage technology for transformative solutions.</p>
                    </div>
                    </motion.div>
                </div>
            </div>
  );
} 
export default About;