import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  margin-left: 250px;
  padding: 40px;
`;

const metGalaImages = [
  // Replace with the URLs of the Met Gala images
  'https://via.placeholder.com/400x400',
  'https://via.placeholder.com/400x400',
  'https://via.placeholder.com/400x400',
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export const HomePage = () => {
  return (
    <Container>
      {metGalaImages.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt="Met Gala"
          width="400"
          height="400"
          style={{ margin: '20px' }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        />
      ))}
    </Container>
  );
};
