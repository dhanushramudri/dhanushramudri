import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const skillsData = [
    {
      name: "Next js",
      bgColor: "",
      icon: "nextimg.png",
      image: images.nextimg,
    },

    {
      name: "Html",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.html,
    },
    {
      name: "Css",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.css,
    },
    {
      name: "JavaScript",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.javascript,
    },
    {
      name: "React",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.react,
    },
    {
      name: "Node",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.node,
    },
    {
      name: "Tailwind css",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.tailwind,
    },
    {
      name: "Git",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.git,
    },
    {
      name: "Figma",
      bgColor: "",
      icon: "path_to_icon_1",
      image: images.figma,
    },
    // Add more skills as needed
  ];

  const experiencesData = [
    {
      year: "2022",
      works: [
        {
          name: " Frontend Developer",
          company: "-",
          desc: "Worked as a Frontend Developer",
        },
        // Add more works as needed
      ],
    },
    {
      year: "2023",
      works: [
        {
          name: " Frontend Developer",
          company: "-",
          desc: "Worked as a Frontend Designer",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsData.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img loading="lazy" src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiencesData.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
