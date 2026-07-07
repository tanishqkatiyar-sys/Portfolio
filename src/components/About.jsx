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

function About() {

    return (
        <>
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
>
                <h1 style={{ textAlign: "center", marginTop: "100px", color: "white" }}>About</h1>
                <Content>
                    <div >
                        <p style={{margin:"10px"}}>
                            I am Tanishq Katiyar, a B.Tech student in Information Technology at
                            Harcourt Butler Technical University (HBTU), Kanpur. I am passionate
                            about software development and enjoy creating modern web applications.
                        </p>

                        <p style={{margin:"10px"}}>
                            My technical skills include C++, JavaScript, React.js, HTML, CSS,
                            Bootstrap, and Data Structures & Algorithms. I regularly practice
                            coding problems to strengthen my logical thinking and programming skills.
                        </p>


                        <p style={{margin:"10px"}}>
                            My goal is to secure a Software Development Internship where I can
                            contribute, learn from experienced professionals, and grow into a
                            skilled software engineer.
                        </p>
                    </div>
                </Content>
            </motion.section>

        </>
    )
}
export default About;