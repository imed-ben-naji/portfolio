import React, {useRef, useState} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import PrivateProjectPopup from "@/components/PrivateProjectPopup";
import {useOutsideClick} from "@/hooks/use-outside-click";

interface ProjectCardProps extends Project {
    isHovered: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     icon: Icon,
                                                     technologies,
                                                     skills,
                                                     detailedDescription,
                                                     isHovered,
                                                     githubLink,
                                                 }) => {
    const [isClicked, setIsClicked] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useOutsideClick(popupRef, () => {
        if (isClicked) {
            setIsClicked(false);
        }
    });

    const handleCardClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (githubLink === "Private Repository") {
            setIsClicked(true);
        }
    };

    const closePopup = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsClicked(false);
    };
    const CardContent = () => (
        <>
            <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered || isClicked ? 1 : 0,
                    scale: isHovered || isClicked ? [1, 1.02, 1] : 1,
                }}
                transition={{
                    duration: isHovered ? 0.2 : 0.3,
                    ease: "easeInOut",
                }}
            />
            <Icon className="text-4xl mb-4 flex-shrink-0" />
            <h3 className="text-xl font-bold text-primary mb-2 flex-shrink-0">
                {title}
            </h3>
            <div className="overflow-y-auto flex-grow mb-4">
                <p>{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
                {technologies.map((tech, index) => (
                    <span key={index} className="text-sm px-2 py-1 bg-background rounded-full">
            {tech}
          </span>
                ))}
            </div>
        </>
    );

    return (
        <>
            {githubLink === "Private Repository" ? (
                <>
                    <motion.div
                        className="relative p-6 rounded-xl bg-card text-card-foreground transition-all duration-300 cursor-pointer h-[400px] flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCardClick}
                    >
                        <CardContent />
                    </motion.div>

                    {/* Popup for private project */}
                    {isClicked && (
                        <PrivateProjectPopup
                            title={title}
                            description={description}
                            technologies={technologies}
                            skills={skills}
                            detailedDescription={detailedDescription}
                            onClose={closePopup}
                            ref={popupRef}
                        />
                    )}
                </>
            ) : (
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                    <motion.div
                        className="relative p-6 rounded-xl bg-card text-card-foreground transition-all duration-300 cursor-pointer h-[400px] flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <CardContent />
                    </motion.div>
                </Link>
            )}
        </>
    );
};

export default ProjectCard;
