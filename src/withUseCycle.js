import React from "react";
import { useCycle } from "framer-motion";
import { Container, H1, HeroSection, Banner, TextBox } from "./Styles";
import { ReactComponent as BannerIllustration } from "./bighead.svg";
import "./App.css";

const H1Variants = {
  initial: { y: -200, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 1 } },
};

const TextVariants = {
  initial: { x: 400 },
  animate: { x: 0, transition: { duration: 0.5 } },
};

const BannerVariants = {
  animationOne: {
    x: -400,
    transition: { duration: 0.5 },
  },

  animationTwo: {
    y: [0, -40],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

function App() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <div className="App">
      <Container>
        <H1 variants={H1Variants} initial="initial" animate="animate">
          Cool Hero Section Anmiation
        </H1>
        <HeroSection initial="initial" animate="animate">
          <TextBox
            variants={TextVariants}
            initial="initial"
            animate={animation}
          >
            Storage shed, troughs feed bale manure, is garden wheat oats at
            augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.
            Chainsaw foal hay hook, herbs at combine harvester, children is
            mallet. Goat goose hen horse. Pick up truck livestock, pets and
            storage shed, troughs feed bale manure, is garden wheat oats at
            augers. Lamb.
          </TextBox>
          <Banner variants={BannerVariants} initial="initial" animate="animate">
            <BannerIllustration />
          </Banner>
        </HeroSection>
        <button onClick={() => cycleAnimation()}>click me</button>
      </Container>
    </div>
  );
}

export default App;
