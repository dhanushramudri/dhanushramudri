import React, { useState, useEffect, useMemo } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const Work = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const dummyData = useMemo(
    () => [
      {
        title: "Portfolio",
        description: "A modern portfolio website to showcase my work.",
        tags: ["UI/UX", "React JS"],
        projectLink: "https://example.com/project1",
        codeLink: "https://github.com/example/project1",
        image: images.portfolio_1,
      },
      {
        title: "Resume Builder",
        description: "A tool to create and customize resumes easily.",
        tags: ["React JS", "Tailwind css", "Node"],
        projectLink: "https://resume-builder-frontend-orpin.vercel.app/",
        codeLink: "https://github.com/dhanushramudri/resume-builder-frontend",
        image: images.resume1,
      },
      {
        title: "Sun School",
        description: "A web app for online education and resources.",
        tags: ["Web App", "React JS"],
        projectLink: "https://dhanushramudri.github.io/sunschool/",
        codeLink: "https://dhanushramudri.github.io/sunschool/",
        image: images.sunschool,
      },
      {
        title: "Price Tracker",
        description: "Track and compare product prices online.",
        tags: ["Web App", "Tailwind css"],
        projectLink: "https://price-tracker-new.vercel.app/",
        codeLink: "https://price-tracker-new.vercel.app/",
        image: images.webscraping,
      },

      {
        title: "Code Editor",
        description: "An online code editor for solving coding problems.",
        tags: ["UI/UX"],
        projectLink: "https://new-leetcode.vercel.app/",
        codeLink: "https://new-leetcode.vercel.app/",
        image: images.leetcode,
      },
    ],
    []
  );

  useEffect(() => {
    // Set initial filtered data to all dummy data
    setFilterWork(dummyData);
  }, [dummyData]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(dummyData);
      } else {
        setFilterWork(dummyData.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "React JS", "Tailwind css", "Node", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img loading="lazy" src={work.image} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags.join("  ")}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
