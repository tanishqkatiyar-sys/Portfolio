import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 20px 40px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const Content = styled(motion.div)`
  width: min(800px, 95vw);

  padding: 30px;

  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 15px;

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);

  color: white;

  box-shadow: 0 10px 25px rgba(0,0,0,.3);

  box-sizing: border-box;

  h3{
    color:#00d4ff;
    margin-bottom:20px;
    font-size:1.5rem;
  }

  ul{
    padding-left:20px;
  }

  li{
    margin:15px 0;
    line-height:1.8;
    font-size:1rem;
  }

  @media(max-width:768px){

    padding:20px;

    h3{
      font-size:1.25rem;
      text-align:center;
    }

    li{
      font-size:.95rem;
      line-height:1.6;
    }
  }
`;

function Projects() {
  return (
    <Section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Title>Projects</Title>

      <Content
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.03,
          y: -10,
          boxShadow: "0 15px 35px rgba(0,150,255,.35)",
        }}
      >
        <h3>🚀 Personal Portfolio Website</h3>

        <ul>
          <li>
            Developed a responsive personal portfolio using React.js,
            JavaScript, HTML, CSS, Bootstrap, and styled-components.
          </li>

          <li>
            Implemented smooth scrolling navigation and responsive layouts
            with engaging UI animations.
          </li>

          <li>
            Showcases personal information, technical skills, projects,
            education, and contact details.
          </li>

          <li>
            Built using reusable React components with a clean,
            modern design.
          </li>
        </ul>
      </Content>
    </Section>
  );
}

export default Projects;