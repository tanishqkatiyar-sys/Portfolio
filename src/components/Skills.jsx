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

  @media (max-width:768px) {
    padding: 18px;
    gap: 18px;
  }
`;

const skills = [
  {
    name: "Python",
    description:
      "Programming for machine learning, data analysis, data preprocessing, and automation."
  },
  {
    name: "C++",
    description:
      "Strong foundation in programming, data structures, algorithms, and problem-solving."
  },
  {
    name: "Machine Learning",
    description:
      "Knowledge of supervised and unsupervised learning, model training, and evaluation."
  },
  {
    name: "Scikit-learn",
    description:
      "Building and evaluating machine learning models for classification and prediction."
  },
  {
    name: "Natural Language Processing",
    description:
      "Text preprocessing, tokenization, stopword removal, and text classification."
  },
  {
    name: "Pandas",
    description:
      "Data cleaning, manipulation, preprocessing, and exploratory data analysis."
  },
  {
    name: "NumPy",
    description:
      "Numerical computing, multidimensional arrays, and efficient mathematical operations."
  },
  {
    name: "Matplotlib",
    description:
      "Creating charts and visualizations to analyze and present data insights."
  },
  {
    name: "Seaborn",
    description:
      "Statistical data visualization, distribution analysis, and relationship exploration."
  },
  {
    name: "Statistics",
    description:
      "Statistical analysis, probability, descriptive statistics, and data interpretation."
  },
  {
    name: "Data Analysis",
    description:
      "Exploratory data analysis, data cleaning, feature engineering, and insight generation."
  },
  {
    name: "HTML & CSS",
    description:
      "Building responsive, structured, and user-friendly web interfaces."
  },
  {
    name: "JavaScript",
    description:
      "Developing interactive web applications and dynamic frontend functionality."
  },
  {
    name: "Node.js & Express.js",
    description:
      "Building server-side applications, REST APIs, and backend functionality."
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database concepts, SQL queries, and structured data management."
  },
  {
    name: "Git & GitHub",
    description:
      "Version control, source code management, and project collaboration."
  },
  {
    name: "Jupyter Notebook",
    description:
      "Data analysis, experimentation, visualization, and machine learning workflows."
  },
  {
    name: "Streamlit",
    description:
      "Developing interactive web applications for machine learning and data science projects."
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
      <Title>Technical Skills</Title>

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
              delay: (index % 4) * 0.08,
              type: "spring",
              stiffness: 250
            }}
            viewport={{ once: true }}
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