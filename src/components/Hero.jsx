import styled from "styled-components";
import heroImg from "../assets/hero1.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding-top: 100px;
  color: white;
  padding: 0 10%;
`;

const Btn = styled(motion.button)`
  background-color: #07074e;
  color: white;
  width: 220px;
  height: 50px;
  padding: 12px 20px;
  margin-top: 30px;
  border: 3px solid #07074e;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`;

const HeroImage = styled.img`
  width: 300px;
  height: 300px;
  margin-left: 20vw;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9px;
  box-shadow: 1px 9px 9px 1px rgba(255, 255, 255, 0.2);
`;

function Hero() {
  const [loading, setLoading] = useState(false);

  // useTransition
//   const [isPending, startTransition] = useTransition();

  const downloadResume = async () => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();

    // Transition only for React state update
    // startTransition(() => {
      setLoading(false);
    // });
  };

  return (
    <Content>
      <motion.div
        id="home"
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Tanishq Katiyar</h1>

        <p>Hello, I'm TANISHQ KATIYAR</p>

        <b>Frontend Developer</b>

        <p>B.Tech IT @ HBTU</p>

        <Btn
          onClick={downloadResume}
          disabled={loading}
          whileHover={{
            y: [-3, -8, -3],
            scale: 1.08,
            boxShadow: "0 0 20px rgba(70,120,255,0.8)",
            backgroundColor: "#1b1b8f",
            transition: {
              y: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
        >
          {loading ? "Downloading..." : "Download Resume"}

          {loading && (
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt="loading"
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </Btn>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 120, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <HeroImage src={heroImg} alt="Tanishq Katiyar" />
      </motion.div>
    </Content>
  );
}

export default Hero;