import styled from "styled-components";
import { motion } from "framer-motion";
const Content = styled.div`
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 9px;
    width: 50vw;
    min-height: 35vh;
    margin: 0 auto;
    color: aliceblue;
    box-shadow: 1px 1px 3px 1px black;
    padding: 20px;
`;

function Projects() {

    return (
        <>
            <motion.section
    id="projects"
    style={{ marginTop: "100px" }}
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }}
>
    <h1
        style={{
            textAlign: "center",
            marginTop: "100px",
            color: "white",
            marginBottom:"30px"
        }}
    >
        Projects
    </h1>

    <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
        }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{
            scale: 1.03,
            y: -10,
            boxShadow: "0px 15px 35px rgba(0,150,255,0.35)",
        }}
    >
        <Content>
            <h3>🚀 Personal Portfolio Website</h3>

            <ul>
                <li>
                    Developed a responsive personal portfolio using React.js,
                    JavaScript, HTML, CSS, and styled-components.
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
    </motion.div>
</motion.section>

        </>
    )
}
export default Projects;