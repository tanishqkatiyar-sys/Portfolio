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
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: min(1000px, 95vw);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

  gap: 25px;
`;

const Card = styled(motion.div)`
  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);

  color: white;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

  h3 {
    color: #00d4ff;
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin: 12px 0;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h3 {
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

function Projects() {
  return (
    <Section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Title>Projects</Title>

      <Content>
        <Card
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 18px 40px rgba(0,212,255,.25)",
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
        >
          <h3>📊 Netflix Movies & TV Shows Data Analysis</h3>

          <ul>
            <li>
              Performed exploratory data analysis on the Netflix Movies &
              TV Shows dataset using Python.
            </li>

            <li>
              Cleaned and transformed data by handling missing values,
              duplicates, and date conversions.
            </li>

            <li>
              Created insightful visualizations to analyze genres, ratings,
              countries, release trends, and content distribution.
            </li>

            <li>
              Extracted meaningful insights through data visualization and
              storytelling.
            </li>
          </ul>
        </Card>

        <Card
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 18px 40px rgba(0,212,255,.25)",
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
            delay: 0.1,
          }}
        >
          <h3>💻 Personal Portfolio</h3>

          <ul>
            <li>
              Designed and developed a responsive portfolio to showcase
              projects, skills, education, and achievements.
            </li>

            <li>
              Built using reusable React components with a clean and modern
              user interface.
            </li>

            <li>
              Optimized for responsiveness across desktop, tablet, and mobile
              devices.
            </li>

            <li>
              Deployed on Vercel with GitHub integration for continuous
              updates.
            </li>
          </ul>
        </Card>
      </Content>
    </Section>
  );
}

export default Projects;