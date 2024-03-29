import React, { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { motion, useAnimation } from "framer-motion";
// update resume here
import Pdf from "./TahmeedHossainSE3.pdf";
import { useOnScreen } from "../../hooks";
import Button from "../../styles/Button";
import Context from "../../context/";
import ContentWrapper from "../../styles/ContentWrapper";
import Underlining from "../../styles/Underlining";
import Social from "../social";
import SplashScreen from "../splashScreen";
import Theme from "../../styles/Theme";

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: 1rem;
  .resume {
    display: flex;
    margin-bottom: 10 rem;
  }
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;

    }
    .subtitle:hover{
      margin-top: -0.75rem;
      
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`;

const AnimatedUnderlining = motion.custom(Underlining);

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node;
  const { isIntroDone } = useContext(Context).state;

  // Controls to orchestrate animations of greetings, emoji, social profiles, underlining
  const gControls = useAnimation();
  const eControls = useAnimation();
  const sControls = useAnimation();
  const uControls = useAnimation();

  // Start Animations after the splashScreen sequence is done
  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 }
        });
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 }
        });
        await sControls.start({
          opacity: 1,
          x: 0
        });
        // Animate underlining to hover state
        await uControls.start({
         
          transition: { delay: 0.4, ease: "circOut" },
          color:"#ffffff",
        
        });
      }
    };
    pageLoadSequence();
  }, [isIntroDone, eControls, gControls, sControls, uControls]);
  const bRef = useRef();
  const bOnScreen = useOnScreen(bRef);
  const bVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={gControls}>
          <h1 className="title">
            <div className="greetings">
              {frontmatter.greetings}
              <motion.div
                animate={eControls}
                style={{ originX: 0.7, originY: 0.7 }}
              >
                <Img
                  className="emoji"
                  fluid={frontmatter.icon.childImageSharp.fluid}
                />
              </motion.div>
            </div>
            {frontmatter.title}
          </h1>
          <h2 className="subtitle">
            {frontmatter.subtitlePrefix}{" "}
            {/* Hover state color can be set in useEffect hook */}
            <AnimatedUnderlining animate={uControls} color="secondary" big>
              {frontmatter.subtitle}
            </AnimatedUnderlining>
          </h2>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
        </motion.div>
      </StyledContentWrapper>
      {
        <motion.a
          ref={bRef}
          variants={bVariants}
          animate={bOnScreen ? "visible" : "hidden"}
          className="resume"
          href={Pdf}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="External Link"
        >
          <Button
            type="button"
            textAlign="center"
            color="tertiary"
            margin="50px"
            center
          >
            Open Resume
          </Button>
        </motion.a>
      }
    </StyledSection>
  );
};

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default Hero;
