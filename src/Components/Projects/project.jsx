import React from "react";
import { motion } from "framer-motion";
import video from "/img/video.jpg";
import Chat from "/img/Chat.png";
import study from "/img/study.jpg";
import weather from "/img/weather.jpeg";
import News from "/img/News.jpg";
import "./project.css";

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container project_container">
        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={study} alt="Poornima Study Portal" />
          </div>
          <h3>Poornima Study Portal</h3>
          <small className="text-light">Html, Css, Javascript, Sql</small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              Github
            </a>
            <a
              href="https://your-live-demo-link.com"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={video} alt="Real Time Video Call Application" />
          </div>
          <h3>Real Time Video Call Application</h3>
          <small className="text-light">
            React, Express.js, Socket.IO, Node.js
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              Github
            </a>
            <a
              href="https://vchatappsourabh.netlify.app/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={Chat} alt="Mern-Chat-App" />
          </div>
          <h3>Mern-Chat-App</h3>
          <small className="text-light">
          React, Express.js, Socket.IO, Node.js, MongoDB
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              GitHub
            </a>
            <a
              href="https://we-chat-app-wjpp.onrender.com/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>

        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={weather} alt="Weather-App" />
          </div>
          <h3>Weather-App</h3>
          <small className="text-light">
          React, Javascript, Bootstrap, Css, Html 
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              GitHub
            </a>
            <a
              href="https://weatherappbysourabh.netlify.app/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>
        <motion.article
          className="project_item"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="project_item_image">
            <img src={News} alt="React-News-App" />
          </div>
          <h3>React-News-App</h3>
          <small className="text-light">
            React, Html ,JavaScript , Bootstrap
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              GitHub
            </a>
            <a
              href="https://reactnewsportal17.netlify.app/"
              className="btn"
              style={{ marginLeft: "10px" }}
            >
              Live Demo
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Project;
