import { PROJECTS } from "../constants";
import {motion} from "framer-motion"
const Project = ()=>{
    return <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>
        {PROJECTS.map((project,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="w-full lg:w-1/4">
                <img src={project.image} className="mb-6 rounded" width={150} height={150} alt={project.title} />
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 rounded px-2 py-1 bg-neutral-800 text-sm font-medium text-lime-600">
                            {tech}
                        </span> 
                    ))} <br/>
                    <button className="border-gray-300 rounded mt-2 p-2 bg-zinc-300 text-amber-950 font-semibold"><a href={project.Link}>Code</a></button>
                </motion.div>

            </div>
        ))}
        </div>

    </div> 

} 
 export default Project;