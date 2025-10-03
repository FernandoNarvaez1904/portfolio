import React from "react";
import styles from "./styles.module.css";

const DiplomaFrame: React.FC = () => {
  const handleImageClick = () => {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      cursor: pointer;
    `;

    const img = document.createElement("img");
    img.src = "/img/diploma.png";
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.onclick = () => {
      document.body.removeChild(modal);
    };
  };

  return (
    <div
      className={`${styles.frame} ${styles.medallion}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "perspective(1000px) rotateX(8deg) rotateY(0deg) rotateZ(-3deg)";
        e.currentTarget.style.boxShadow =
          "0 25px 70px rgba(0, 0, 0, 0.6), inset 0 3px 6px rgba(255, 255, 255, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 0 0 2px #654321, 0 0 0 4px #8B4513";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "perspective(1000px) rotateX(-1deg) rotateY(0deg) rotateZ(1deg)";
        e.currentTarget.style.boxShadow =
          "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 3px 6px rgba(255, 255, 255, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 0 0 2px #654321, 0 0 0 4px #8B4513";
      }}
    >
      <div className={styles.cornerTopRight}>◆</div>
      <div className={styles.cornerBottomLeft}>◆</div>
      <div className={styles.innerFrame}>
        <img
          src="/img/diploma.png"
          alt="My Diploma"
          className={styles.diplomaImage}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default DiplomaFrame;
