// 'use client';

// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Meteors } from '../magicui/meteors';
// import SectionA from './hero-sections/section-a';
// import ivf from '../../../public/ivf.png';
// import vocable from '../../../public/vocable.png';
// import hunter from '../../../public/hunter.png';
// import commerce from '../../../public/commerce.png';
// import vacancy from '../../../public/vacancy.png';
// import ProjectCard from '../shared/ProjectCard';

// function HeroSection() {
//   const { scrollYProgress } = useScroll();

//   const items = [
//     {
//       text: <SectionA />,
//       initialZ: 0,
//     },
//     {
//       text: (
//         <ProjectCard
//           href="?url=ivf"
//           src={ivf}
//           name="IVF Chat"
//           description="AI Chat - 2025"
//         />
//       ),
//       initialZ: 0,
//     },
//     {
//       text: (
//         <ProjectCard
//           href="?url=vocable"
//           src={vocable}
//           name="Vocable AI"
//           description="Marketing AI - 2025"
//           reverse
//         />
//       ),
//       initialZ: 0,
//     },
//     {
//       text: (
//         <ProjectCard
//           href="?url=hunter"
//           src={hunter}
//           name="Hunter Galloway"
//           description="Find Home - 2024"
//         />
//       ),
//       initialZ: 0,
//     },
//     {
//       text: (
//         <ProjectCard
//           href="?url=commerce"
//           src={commerce}
//           name="E-Commerce App"
//           description="E-Commerce - 2024"
//           reverse
//         />
//       ),
//       initialZ: 0,
//     },
//     {
//       text: (
//         <ProjectCard
//           href="?url=vacancy"
//           src={vacancy}
//           name="Ton Vacancy"
//           description="Vacancy - 2022"
//         />
//       ),
//       initialZ: 0,
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[500vh] perspective-1000">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         {items.map((item, index) => {
//           const zPosition = useTransform(
//             scrollYProgress,
//             [index * 0.15, (index + 1) * 0.15],
//             [item.initialZ, 0]
//           );

//           const scale = useTransform(
//             scrollYProgress,
//             [index * 0.15, (index + 1) * 0.15],
//             [1, 2.5]
//           );

//           const opacity = useTransform(
//             scrollYProgress,
//             [index * 0.15, index * 0.15 + 0.07, (index + 1) * 0.15],
//             [0.05, 2, 0]
//           );

//           const blur = useTransform(
//             scrollYProgress,
//             [0, 0.15, 0.3, 0.45, 0.6],
//             [
//               index === 0 ? 0 : index * 3,
//               index === 1 ? 0 : index * 3,
//               index === 2 ? 0 : index * 3,
//               index === 3 ? 0 : index * 3,
//               index === 4 ? 0 : index * 3,
//             ]
//           );

//           return (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center h-[80vh] absolute w-full"
//               style={{
//                 translateZ: zPosition,
//                 scale,
//                 opacity,
//                 filter: `blur(${blur}px)`,
//               }}
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="text-4xl md:text-2xl font-bold text-center p-8 bg-opacity-50 rounded-lg"
//               >
//                 {item.text}
//               </motion.h1>
//             </motion.div>
//           );
//         })}
//         <Meteors number={20} />
//       </div>
//     </div>
//   );
// }

// export default HeroSection;

import Image from 'next/image';
import React from 'react';
import picture from '../../../public/picture.png';
import AnimatedHero from '../magicui/animated-hero';

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="w-full md:w-2/3 grid gap-4">
        <AnimatedHero />
        <h2 className="text-xl text-[#666666]">
          Hi! I'm Hicham El Assari, a proactive full-stack engineer passionate
          about creating dynamic web experiences. As a full-stack engineer, I
          create accessible, user-friendly digital experiences that leave a
          lasting impact.
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={picture}
          alt="pricture"
          className="shadow-lg rounded-full p-6 md:p-12 bg-slate-100"
        />
      </div>
    </div>
  );
}

export default HeroSection;
