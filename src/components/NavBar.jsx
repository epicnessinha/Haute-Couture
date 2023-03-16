import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 15px 0;
  transition: color 0.3s;

  &:hover {
    color: #f0c040;
  }

  &.active {
    color: #f0c040;
  }
`;

const navVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const NavBar = () => {
  return (
    <Container initial="hidden" animate="visible" variants={navVariants}>
      <StyledLink exact to="/" activeClassName="active">
        Home
      </StyledLink>
      <StyledLink to="/new-tendencies" activeClassName="active">
        New Tendencies
      </StyledLink>
      <StyledLink to="/looks-of-the-month" activeClassName="active">
        Looks of the Month
      </StyledLink>
      <StyledLink to="/designers" activeClassName="active">
        Designers
      </StyledLink>
    </Container>
  );
};
