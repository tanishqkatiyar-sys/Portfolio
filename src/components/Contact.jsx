import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled.div`
  width: 60vw;
  margin: 0 auto;
  padding: 35px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    width: 90vw;
    padding: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  padding: 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #00d4ff;
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.25);
  }

  h3 {
    margin: 0;
    color: #00d4ff;
    font-size: 1rem;
    margin-bottom: 8px;
  }

  p,
  a {
    margin: 0;
    color: white;
    text-decoration: none;
    word-break: break-word;
    font-size: 0.95rem;
  }

  a:hover {
    color: #00d4ff;
  }
`;

function Contact() {
  const contactInfo = [
    { label: "Name", value: "Tanishq Katiyar" },
    { label: "Role", value: "Frontend Developer" },
    { label: "Email", value: "tanishqkatiyar@gmail.com" },
    { label: "Phone", value: "+91 7275399121" },
    { label: "Location", value: "Kanpur, Uttar Pradesh" },
    { label: "GitHub", value: "https://github.com/tanishqkatiyar-sys" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/tanishq-katiyar-46220029a/" },
    { label: "Leetcode", value: "https://leetcode.com/u/tanishq_katiyar/" },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 40,
        damping: 20,
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 
        style={{
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "40px",
          color: "white",
          marginTop:"220px",
        }}
      >
        Contact Me
      </h1>

      <Content>
        <Grid>
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{contact.label}</h3>

              {contact.value.startsWith("http") ? (
                <a
                  href={contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              ) : (
                <p>{contact.value}</p>
              )}
            </Card>
          ))}
        </Grid>
      </Content>
    </motion.section>
  );
}

export default Contact;