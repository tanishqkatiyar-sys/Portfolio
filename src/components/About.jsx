import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled.div`
  width: min(700px, 90vw);
  min-height: 35vh;

  margin: 20px auto;
  padding: 25px;

  color: aliceblue;

  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  box-shadow: 1px 1px 8px rgba(0,0,0,0.4);

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);

  box-sizing: border-box;

  p {
    margin: 15px 0;
    line-height: 1.8;
    font-size: 1.05rem;
    text-align: justify;
  }

  @media (max-width:768px) {
    width: 95vw;
    padding: 18px;

    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.8,
        type: "spring",
        stiffness: 40,
        damping: 20,
      }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <h1
        style={{
          color: "white",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        About
      </h1>

      <Content>
        <p>
          I am Tanishq Katiyar, a B.Tech student in Information
          Technology at Harcourt Butler Technical University
          (HBTU), Kanpur, with a CGPA of 7.7/10. I am passionate
          about Artificial Intelligence, Machine Learning,
          Natural Language Processing, and Data Science. I enjoy
          solving real-world problems through programming and
          data-driven solutions.
        </p>

        <p>
          My technical skills include Python, C++, Data Structures
          and Algorithms, Machine Learning, NLP, and Data Analysis.
          I have hands-on experience with Scikit-learn, Pandas,
          NumPy, Matplotlib, and Seaborn, along with frontend
          technologies such as HTML, CSS, and JavaScript.
          I also have knowledge of Node.js, Express.js, and
          PostgreSQL.
        </p>

        <p>
          I have developed an NLP-based multi-class emotion
          classification model using Python and Scikit-learn
          to classify text into six emotions: Sadness, Anger,
          Love, Surprise, Fear, and Joy. I have also performed
          exploratory data analysis on more than 8,800 Netflix
          titles using Pandas, NumPy, Matplotlib, and Seaborn
          to identify trends and generate meaningful insights.
        </p>

        <p>
          Alongside my academic and personal projects, I worked
          as a Web Development Intern at InAmigos Foundation,
          where I developed and improved responsive web interfaces
          using HTML, CSS, and JavaScript, focusing on website
          design and user experience.
        </p>

        <p>
          I am continuously improving my problem-solving,
          analytical, and technical skills through practical
          projects and consistent learning. My goal is to build
          intelligent, data-driven applications, gain industry
          experience, and contribute to meaningful projects in
          Machine Learning, AI, and Data Science.
        </p>
      </Content>
    </motion.section>
  );
}

export default About;