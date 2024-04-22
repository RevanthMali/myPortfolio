import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {animate, motion} from "framer-motion"
export const IconAnimate =(duration)=>( {
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    }
})
const Technology=()=>{
    return <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">Tech Stack</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{x:-100, opacity:0}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center  justify-center gap-4">
        <motion.div 
        variants={IconAnimate(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
           <SiMongodb className="text-6xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={IconAnimate(3)}
        initial="initial"
        animate="animate"  className="rounded-2xl border-2 border-neutral-800 p-4">
           <FaNodeJs className="text-6xl text-blue-200"/>
        </motion.div>
        <motion.div 
            variants={IconAnimate(2)}
            initial="initial"
            animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
           <RiReactjsLine className="text-6xl text-sky-500"/>
        </motion.div>
        <motion.div 
        variants={IconAnimate(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
           <FaGitAlt className="text-6xl text-gray-600"/>
        </motion.div> 
        <motion.div
        variants={IconAnimate(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
           <FaGithub className="text-6xl text-gray-600"/>
        </motion.div> 
        <motion.div 
            variants={IconAnimate(2)}
            initial="initial"
            animate="animate"
        className="rounded-2xl border-2 border-neutral-800 p-4">
           <SiPostman className="text-6xl text-orange-500"/>
        </motion.div> 

        </motion.div>
    </div>
} 
export default Technology;