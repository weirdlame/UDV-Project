import { useEffect } from "react";
import styles from "./AnimatedCircles.module.scss";

const AnimatedCircles = () => {
  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const interBubble = document.querySelector(`.${styles.interactive}`);

    const move = () => {
      curX += (tgX - curX) / 5;
      curY += (tgY - curY) / 5;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles["gradients-container"]}>
      <div className={styles["g1"]}></div>
      <div className={styles["g2"]}></div>
      <div className={styles["g3"]}></div>
      <div className={styles["g4"]}></div>
      <div className={styles["g5"]}></div>
      <div className={styles["interactive"]}></div> {/* Анимируемый элемент */}
    </div>
  );
};

export default AnimatedCircles;
