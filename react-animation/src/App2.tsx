import styled from 'styled-components';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
`;

interface ICustomProps {
  back: boolean;
}

const box: Variants = {
  initial: ({ back }: ICustomProps) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: ({ back }: ICustomProps) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [showing, setShowing] = useState(1);
  const [back, setBack] = useState(false);

  const slideNext = () => {
    setBack(false);
    setShowing((prev) => (prev === 5 ? 1 : prev + 1));
  };
  const slidePrev = () => {
    setBack(true);
    setShowing((prev) => (prev === 1 ? 5 : prev - 1));
  };

  const onNextShowing = () => {
    setBack(false);
    setShowing((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const onPrevShowing = () => {
    setBack(true);
    setShowing((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={{ back }}>
        <Box
          custom={{ back }}
          variants={box}
          initial="initial"
          animate="animate"
          exit="exit"
          key={showing}
        >
          {showing}
        </Box>
      </AnimatePresence>
      <button onClick={slidePrev}>prev</button>
      <button onClick={slideNext}>next</button>
      {/* <button onClick={onPrevShowing}>prev</button>
      <button onClick={onNextShowing}>next</button> */}
    </Wrapper>
  );
}

export default App;