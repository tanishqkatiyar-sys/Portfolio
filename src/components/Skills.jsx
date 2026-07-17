import styled from "styled-components";
import "./Skills.css";
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
  text-align: center;
`;

const Content = styled.div`
  width: min(1000px, 95vw);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

  gap: 25px;

  padding: 25px;

  border: 1px solid rgba(255,255,255,.2);
  border-radius: 15px;

  backdrop-filter: blur(10px);

  box-shadow: 0 8px 20px rgba(0,0,0,.25);

  box-sizing: border-box;

  @media (max-width:768px){
    padding:18px;
    gap:18px;
  }
`;

const skills = [
  {
    name: "Python",
    description: "Programming for data analysis, automation, and machine learning."
  },
  {
    name: "NumPy",
    description: "Efficient numerical computing and array operations."
  },
  {
    name: "Pandas",
    description: "Data cleaning, manipulation, and exploratory data analysis."
  },
  {
    name: "Matplotlib",
    description: "Creating visualizations to analyze and communicate insights."
  },
  {
    name: "Seaborn",
    description: "Statistical data visualization and exploratory analysis."
  },
  {
    name: "Statistics",
    description: "Learning descriptive statistics, probability, and statistical concepts for machine learning."
  },
  {
    name: "C++",
    description: "Strong foundation in programming, algorithms, and problem-solving."
  },
  {
    name: "HTML & CSS",
    description: "Building responsive and user-friendly web interfaces."
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative software development."
  }
];

function Skills() {
  return (
    <Section
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Title>Skills</Title>

      <Content>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              boxShadow: "0 15px 35px rgba(0,150,255,.35)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 250
            }}
          >
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </Content>
    </Section>
  );
}

export default Skills;