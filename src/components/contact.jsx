import { ADDRESS } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion"
const Contact = ()=>{
        return<div className="border-b  border-neutral-900 pb-20">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <div className="text-center tracking-tight">
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="my-4 ">{ADDRESS.email} </motion.p>
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="my-4 ">(+91) {ADDRESS.num} </motion.p>
                <motion.div 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:100}}
                transition={{duration:1}}
                className="m-8 flex items-center justify-center gap-4 text-white">
                   <a href="https://www.linkedin.com/in/mali-revanth-reddy/"><FaLinkedin/></a>   
                    <a href="https://github.com/RevanthMali"><FaGithub/></a>
                    <a href="https://twitter.com/MaliRevanth"><FaXTwitter/></a>
                </motion.div>
                <p>Copyright &#169; 2024 <span className="bg-gradient-to-r bg-clip-text tracking-tight text-transparent from-purple-700 via-gray-300 to-pink-500">Revanth Mali</span>.All Rights Reserved.</p>

            </div>
            
        </div>
}
export default Contact;