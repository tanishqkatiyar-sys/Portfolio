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

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
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

  .tech {
    color: #60a5fa;
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 15px;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin: 12px 0;
    line-height: 1.7;
  }

  .demo {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 18px;
    border: 1px solid #00d4ff;
    border-radius: 8px;
    color: #00d4ff;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background: #00d4ff;
      color: #111827;
    }
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
        {/* NLP Project */}
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
          <h3>🤖 NLP-based Multi-class Emotion Classification</h3>

          <p className="tech">
            Python | NLP | Scikit-learn | Pandas | NLTK | Streamlit
          </p>

          <ul>
            <li>
              Developed an NLP-based multi-class classification model
              to classify text into six emotions: Sadness, Anger, Love,
              Surprise, Fear, and Joy.
            </li>

            <li>
              Performed text preprocessing, including lowercasing,
              punctuation and digit removal, tokenization, stopword
              removal, and duplicate removal.
            </li>

            <li>
              Applied Bag-of-Words and TF-IDF for text feature
              extraction to convert text into numerical data.
            </li>

            <li>
              Compared Naive Bayes and Logistic Regression
              classifiers for emotion classification.
            </li>

            <li>
              Built an interactive application using Streamlit
              to classify user-input text.
            </li>
          </ul>

          <a
            className="demo"
            href="https://nlp-based-emotion-classification-k4wptrntjunappzzpkgg5am.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>
        </Card>

        {/* Netflix Data Analysis */}
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
          <h3>📊 Netflix Movies & TV Shows Data Analysis</h3>

          <p className="tech">
            Python | Pandas | NumPy | Matplotlib | Seaborn
          </p>

          <ul>
            <li>
              Analyzed more than 8,800 Netflix titles to identify
              trends across content types, genres, ratings,
              countries, and release years.
            </li>

            <li>
              Performed data cleaning and preprocessing by handling
              missing values, removing duplicates, and converting
              date formats.
            </li>

            <li>
              Applied feature engineering to extract year and month
              from dates and derive movie duration and TV show
              season features.
            </li>

            <li>
              Conducted exploratory data analysis and statistical
              analysis using Pandas, Matplotlib, and Seaborn.
            </li>

            <li>
              Created data visualizations to identify content
              distribution, release trends, and other meaningful
              insights.
            </li>
          </ul>
        </Card>
      </Content>
    </Section>
  );
}

export default Projects;