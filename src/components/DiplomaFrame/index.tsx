import React from "react";

function DiplomaFrame() {
  const handleImageClick = () => {
    const modal = document.createElement("div");
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 50;
      cursor: pointer;
    `;

    const img = document.createElement("img");
    img.src = "/img/diploma.png";
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 0.5rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.onclick = () => {
      document.body.removeChild(modal);
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1.25rem auto",
        padding: "0.75rem",
        backgroundImage: "url('/img/wood.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "1rem",
        position: "relative",
        width: "fit-content",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow:
          "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 3px 6px rgba(255, 255, 255, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 0 0 2px #654321, 0 0 0 4px #8B4513",
        border: "6px solid #654321",
        transform: "perspective(1000px) rotateX(1deg) rotateY(-1deg)",
      }}
      onClick={handleImageClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "perspective(1000px) rotateX(3deg) rotateY(0deg) rotateZ(-1deg)";
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
      {/* Corner decorations */}
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "0.5rem",
          fontSize: "1.5rem",
          color: "#953d00",
          zIndex: 20,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        ◆
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          fontSize: "1.5rem",
          color: "#953d00",
          zIndex: 20,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        ◆
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "0.5rem",
          fontSize: "1.5rem",
          color: "#953d00",
          zIndex: 20,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        ◆
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          right: "0.5rem",
          fontSize: "1.5rem",
          color: "#953d00",
          zIndex: 20,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        ◆
      </div>

      {/* Inner frame */}
      <div
        style={{
          padding: 0,
          borderRadius: "0.5rem",
          position: "relative",
          background:
            "linear-gradient(135deg, #fafafa 0%, #ffffff 30%, #f5f5f5 70%, #ffffff 100%)",
          boxShadow:
            "inset 0 3px 10px rgba(0, 0, 0, 0.1), inset 0 -1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.2)",
          border: "4px solid #2f4f4f",
        }}
      >
        <img
          src="/img/diploma.png"
          alt="My Diploma"
          style={{
            display: "block",
            borderRadius: "0.25rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            position: "relative",
            zIndex: 10,
            maxWidth: "350px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default DiplomaFrame;
