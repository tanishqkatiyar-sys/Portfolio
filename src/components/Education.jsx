import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled.div`
  width: 60vw;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  color: white;
  /* background: rgba(255, 255, 255, 0.05); */
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

function Education() {
  const education = [
    {
      title: "High School",
      year: "2020",
      institute: "Jai Narayan Vidya Mandir Inter College",
      percentage: "78%",
      description:
        "Completed Class 10 and developed a strong foundation in Mathematics and Science.",
    },
    {
      title: "Intermediate",
      year: "2022",
      institute: "Jai Narayan Vidya Mandir Inter College",
      percentage: "89%",
      description:
        "Completed Class 12 with PCM and developed a keen interest in programming and technology.",
    },
    {
      title: "B.Tech Information Technology",
      year: "2023 - 2027",
      institute: "Harcourt Butler Technical University",
      percentage: "Current CGPA: 7.7",
      description:
        "Currently pursuing B.Tech in Information Technology while learning React, Data Structures & Algorithms, and modern web development.",
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: 0.25 }}
      style={{ scrollMarginTop: "170px" }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "200px",
          color: "white",
          marginBottom: "40px",
        }}
      >
        Education
      </h1>

      <Content>
        {education.map((item, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
              boxShadow: "0px 15px 35px rgba(0,255,255,0.35)",
            }}
          >
            <h2>{item.title}</h2>
            <h4>{item.institute}</h4>
            <p>
              <strong>Year:</strong> {item.year}
            </p>
            <p>
              <strong>Result:</strong> {item.percentage}
            </p>
            <p>{item.description}</p>
          </Card>
        ))}
      </Content>
    </motion.section>
  );
}

export default Education;