"use client";
import { useState, useEffect } from "react";
import h from "./page.module.css";

const Application = () => {
  const [leftButton, setLeftButton] = useState<string | null>(null);
  const [rightButton, setRightButton] = useState<string | null>(null);
  const [midButton, setMidButton] = useState<string | null>(null);
  const [isMerging, setIsMerging] = useState(false);

  useEffect(() => {
    if (leftButton && rightButton) {
      setIsMerging(true);

      setTimeout(() => {
        if (leftButton === rightButton) {
          setMidButton(leftButton === "Có" ? "Không" : "Có");
        } else {
          setMidButton("Có");
        }

        setLeftButton(null);
        setRightButton(null);
        setIsMerging(false);
      }, 1000);
    }
  }, [leftButton, rightButton]);

  const handleButtonClick = (button: string) => {
    if (midButton) {
      setMidButton(null);
      setLeftButton(button);
    } else if (!leftButton) {
      setLeftButton(button);
    } else if (!rightButton) {
      setRightButton(button);
    } else {
      setMidButton(button);
      setLeftButton(null);
      setRightButton(null);
    }
  };

  return (
    <div className={h.body}>
      <section className={h.show_area}>
        <div
          className={`${h.left_btn} ${leftButton === "Có" ? h.green : h.red} ${
            isMerging ? h.move_left : ""
          }`}
        >
          {leftButton}
        </div>
        <div className={`${h.mid_btn} ${midButton === "Có" ? h.green : h.red}`}>
          {midButton}
        </div>
        <div
          className={`${h.right_btn} ${
            rightButton === "Có" ? h.green : h.red
          } ${isMerging ? h.move_right : ""}`}
        >
          {rightButton}
        </div>
      </section>
      <div className={h.btn_group}>
        <button className={h.yes_btn} onClick={() => handleButtonClick("Có")}>
          Có
        </button>
        <button className={h.no_btn} onClick={() => handleButtonClick("Không")}>
          Không
        </button>
      </div>
    </div>
  );
};

export default Application;
