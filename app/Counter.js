import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ to, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const animateCount = async () => {
      for (let i = 0; i <= to; i++) {
        await new Promise((resolve) => setTimeout(resolve, duration * 1000 / to));
        setCount(i);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCount();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [to, duration]);

  return (
    <span id="counter" ref={counterRef} >
      <motion.span
        whileInView
      >
        {count}
      </motion.span>
    </span>
  );
};

export default Counter;
