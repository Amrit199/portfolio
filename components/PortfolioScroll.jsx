import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const ProjectItems = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="flex items-center justify-end w-full h-full md:h-[50vh] lg:h-[60vh] overflow-hidden text-white">
        <div className="max-w-5xl h-full mx-auto flex flex-col md:flex-row items-center md:p-4 gap-2">
          <div
            ref={ref}
            className="w-full h-1/2 md:pr-4 flex items-start justify-start"
          >
            <Link href={item.demo}>
              <Image
                src={item.img}
                alt={item.name}
                width={800}
                height={800}
                className="w-full object-cover rounded-lg"
              />
            </Link>
          </div>
          <motion.div
            className="hidden md:w-full md:flex flex-col items-start justify-center gap-1 md:gap-5 md:border-l-4 md:pl-4"
            style={{ y }}
          >
            <h2>{item.name}</h2>
            <p>{item.desc1}</p>
            <div className="flex items-center gap-6">
            <Link href={`/projects/${item.name}`}>
              <motion.button
                className="bg-white text-black px-4 rounded-xl font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Case Study
              </motion.button>
            </Link>
            <Link href={item.demo} target="_blank">
              <motion.button
                className="bg-white text-black px-4 rounded-xl font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                See the demo &rarr;
              </motion.button>
            </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioScroll = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    // This will make the animation play on both ends of the page when scrolling up and down
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
  });

  if (item === null || !item.projects) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" w-full h-full relative" ref={ref}>
      <div className=" sticky top-16 left-0 py-6">
        <motion.div
          style={{ scaleX }}
          className="h-2 bg-[#0077B5]"
        ></motion.div>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 w-full h-full">
        {item?.projects.map((post, index) => (
          <ProjectItems key={index} item={post} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioScroll;
