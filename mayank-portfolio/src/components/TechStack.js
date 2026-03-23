import React from "react";
import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiDbeaver,
} from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

const TechStack = () => {
  return (
    <section id="tech-stack">
      <h2>Technologies I Work With</h2>

      <div className="tech-section">
        <h3>Programming Languages</h3>
        <div className="tech-icons">
          <FaJava title="Java" />
          <FaJs title="JavaScript" />
          <DiSqllite title="SQL" />
          <TbBrandCpp title="C++" />
        </div>
      </div>

      <div className="tech-section">
        <h3>Frontend Technologies</h3>
        <div className="tech-icons">
          <FaReact title="React.js" />
          <FaVuejs title="Vue.js" />
          <FaAngular title="AngularJS" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
        </div>
      </div>

      <div className="tech-section">
        <h3>Backend Technologies</h3>
        <div className="tech-icons">
          <FaNodeJs title="NodeJS" />
          <SiSpringboot title="Spring Boot" />
          <SiApachekafka title="Kafka" />
        </div>
      </div>

      <div className="tech-section">
        <h3>Database Management</h3>
        <div className="tech-icons">
          <SiMongodb title="MongoDB" />
          <SiPostgresql title="PostgreSQL" />
          <SiMysql title="MySQL" />
        </div>
      </div>

      <div className="tech-section">
        <h3>Developer Tools</h3>
        <div className="tech-icons">
          <FaGitAlt title="Git" />
          <SiPostman title="Postman" />
          <SiDbeaver title="DBeaver" />
          <FaDatabase title="PgAdmin4" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
