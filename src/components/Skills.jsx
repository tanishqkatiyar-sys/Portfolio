
import styled from "styled-components";
import "./Skills.css";
import { motion } from "framer-motion";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  width: 80%;
  /* margin-top: 50vh; */
  margin: 50px auto;
  padding: 10px;
  color: white;
   border: 1px solid rgba(255,255,255,0.2);
    border-radius: 9px;
    box-shadow: 1px 1px 3px 1px black;
`;


const skills = [
    {
        name: "HTML",
        description: "Builds the structure of web pages."
    },
    {
        name: "CSS",
        description: "Styles and layouts web pages."
    },
    {
        name: "JavaScript",
        description: "Adds interactivity and dynamic behavior."
    },
    {
        name: "React",
        description: "Builds modern user interfaces using components."
    },
    {
        name: "C++",
        description: "Runs JavaScript on the server."
    },
    {
        name: "GitHub",
        description: "NoSQL database for storing application data."
    }
];

function Skills() {
    return (
        <>
            <motion.section
                style={{ marginTop: "250px" }}
                id="skills"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginTop: "100px",
                        color: "white",
                    }}
                >
                    Skills
                </h1>

                <Content>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"

                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}

                            whileHover={{
                                scale: 0.9,
                                y: -10,
                                boxShadow: "0px 15px 35px rgba(0,150,255,0.35)",
                            }}

                            whileTap={{
                                scale: 0.9,
                            }}

                            transition={{
                                duration: 0.3,
                                delay: index * 0,
                                type: "spring",
                                stiffness: 250,
                            }}

                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </motion.div>
                    ))}
                </Content>
            </motion.section>
        </>
    );
}

export default Skills;