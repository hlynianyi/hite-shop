import React, { useState, useEffect } from "react";
import { ReactComponent as ScrollButton } from "../assets/scrollToTop.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <ScrollButton
        className="fixed bottom-0 right-[50%]"
        onClick={scrollToTop}
      ></ScrollButton>
    )
  );
};

export default ScrollToTop;
