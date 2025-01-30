import React, {forwardRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Skill} from "@/data/projects";
import { PiSealWarningFill } from "react-icons/pi";

interface PrivateProjectPopupProps {
    title: string;
    description: string;
    technologies: string[];
    skills: Skill[];
    detailedDescription?: string[];
    onClose: (e: React.MouseEvent) => void;
}

const PrivateProjectPopup= forwardRef<HTMLDivElement, PrivateProjectPopupProps>(({ title, description, technologies, skills,detailedDescription , onClose }, ref) => {
       return (<AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
                <motion.div
                    ref={ref}
                    initial={{scale: 0.9, opacity: 0, y: 20}}
                    animate={{scale: 1, opacity: 1, y: 0}}
                    exit={{scale: 0.9, opacity: 0, y: 20}}
                    transition={{type: "spring", damping: 15, stiffness: 100}}
                    className="bg-card text-card-foreground p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                >
                    <motion.button
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.2}}
                        className="flex items-center bg-dot-primary justify-center text-primary-foreground pl-7 pb-6 rounded"
                    >
                        <PiSealWarningFill className="fill-red-600 text-4xl"/>
                        <motion.p
                            initial={{x: -20, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.5}}
                            className="mb-1 px-2 text-red-600"
                        >
                            This is a private project cannot provide the code
                        </motion.p>
                    </motion.button>
                    <motion.h2
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.1}}
                        className="text-2xl font-bold mb-2"
                    >
                        {title}
                    </motion.h2>
                    <motion.div
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.4}}
                        className="flex flex-wrap gap-2 mb-6"
                    >
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{delay: 0.5 + i * 0.1}}
                                className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded"
                            >
                                {React.createElement(skill.icon, {className: "mr-1"})}
                                <span className="text-xs">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.h6
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.1}}
                        className="text-xl font-bold mb-2"
                    >
                        Detailed Description
                    </motion.h6>
                    <motion.ul
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.6}}
                        className="list-disc pl-5 space-y-2"
                    >
                        {detailedDescription?.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{x: -20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.7 + i * 0.1}}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.button
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.8}}
                        className="mt-6 bg-primary text-primary-foreground px-4 py-2 rounded"
                        onClick={onClose}
                    >
                        Close
                    </motion.button>
                </motion.div>
            </motion.div>
       </AnimatePresence>)
});
PrivateProjectPopup.displayName = "PrivateProjectPopup";
export default PrivateProjectPopup;
