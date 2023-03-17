import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "./HomePage.css"

const Container = styled(motion.div)`
  margin-left: 250px;
  padding: 40px;
`;

const metGalaImages = [
  'https://www.versace.com/on/demandware.static/-/Library-Sites-ver-shared-trans/default/dw196f67f1/images/world-of-versace/met-gala-2022look1-030522.jpg',
  'https://images.vs-static.com/ThF9kgQWvrMI4SUPFeXCkEuIOUg=/925x0:2073x2040/1900x0/Fredrik_Robertsson_08e856ef3b/Fredrik_Robertsson_08e856ef3b.jpg',
  'https://akns-images.eonline.com/eol_images/Entire_Site/201946/rs_634x1024-190506150323-634-2019-met-gala-red-carpet-fashions-billy-porter.cm.5619.jpg?fit=around%7C776:1254&output-quality=90&crop=776:1254;center,top',
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

export const HomePage = () => {
  return (
    <><Container>
    <h1 className='title'> Haute Couture </h1>
      <div className="image-row-container">
        <div className="image-row">
          {metGalaImages.map((img, index) => (
            <div className="image-container" style={{ margin: '20px' }} key={index}>
              <motion.img
                className="image-fit"
                src={img}
                alt="Met Gala"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                custom={index} />
            </div>
          ))}
        </div>
      </div>
    </Container></>
  );
};
