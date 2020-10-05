import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #112;
  overflow: hidden;
`;

export const H1 = styled(motion.h1)`
  color: #fff;
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 11rem;
  position: relative;
`;

export const Banner = styled(motion.div)`
  width: 500px;
  transform: translateX(400);
  position: absolute;
  right: -300px;
`;

export const TextBox = styled(motion.div)`
  width: 500px;
  color: #fff;
  line-height: 1.5;
`;
