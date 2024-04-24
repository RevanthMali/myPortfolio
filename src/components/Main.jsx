import profile1 from "../assets/profile1.jpg"
import resume from "../assets/resume.pdf"
import {motion} from "framer-motion"
const Main = () =>{
    return (
        <div className="border-b border-neutral-900 pb-5 lg:mb-40 lg:mt-32">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:pl-10">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5 , delay:1}}
                        className="pb-16 ml-5 pl-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-slate-400">
                            Revanth Mali</motion.h1>
                        <motion.span
                         initial={{x:-100, opacity:0}}
                         animate={{x:0, opacity:1}}
                         transition={{duration:0.5 , delay:1}}
                        className="bg-gradient-to-r lg:ml-5 lg:pl-5 from-cyan-900 via-stone-400 to-fuchsia-700 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                         initial={{x:-100, opacity:0}}
                         animate={{x:0, opacity:1}}
                         transition={{duration:0.5 , delay:1}}
                        className="text-gray-300 lg:ml-5 pl-5 my-2 max-w-xl py-6 font-light tracking-tight">To seek an entry-level position to begin my career in a high-level Professional environment, where I can apply 
                        my skills and knowledge to make a significant contribution to the success of the company. Additionally, I am to 
                        continuously updating myself to handle with the emerging technologies. </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center flex-col items-center">
                        <motion.img  initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5 , delay:1}} className="rounded-tl-3xl rounded-br-3xl opacity-75 lg:size-80 md:size-56 sm:size-52 p-2" src={profile1} alt="Revanth Mali" /> 
                    <div>
                       <button className="bg-blue-900 rounded p-2 hover:bg-gray-700 hover:text-white"><a href={resume}>Download CV</a></button> 
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Main;