import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedHeroTitle() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["drives real revenue", "scales your brand", "converts viewers", "boosts your ROI", "builds trust fast"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <span className="relative flex w-full justify-start overflow-hidden text-center md:text-left h-[1.2em]">
      <AnimatePresence mode="wait">
        {titles.map((title, index) =>
          index === titleNumber ? (
            <motion.span
              key={index}
              className="absolute text-gradient italic"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
            >
              {title}
            </motion.span>
          ) : null
        )}
      </AnimatePresence>
    </span>
  );
}

export { AnimatedHeroTitle };
