import React from "react";

function DiplomaFrame() {
  const handleImageClick = () => {
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 cursor-pointer";

    const img = document.createElement("img");
    img.src = "/img/diploma.png";
    img.className =
      "max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl";

    modal.appendChild(img);
    document.body.appendChild(modal);

    modal.onclick = () => {
      document.body.removeChild(modal);
    };
  };

  return (
    <div
      className="flex justify-center mx-auto my-5 p-3 bg-cover bg-no-repeat bg-center rounded-2xl relative w-fit cursor-pointer transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: "url('/img/wood.jpg')",
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
        className="absolute top-2 left-2 text-2xl text-amber-800 z-20"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        ◆
      </div>
      <div
        className="absolute top-2 right-2 text-2xl text-amber-800 z-20"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        ◆
      </div>
      <div
        className="absolute bottom-2 left-2 text-2xl text-amber-800 z-20"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        ◆
      </div>
      <div
        className="absolute bottom-2 right-2 text-2xl text-amber-800 z-20"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        ◆
      </div>

      {/* Inner frame */}
      <div
        className="p-0 rounded-lg relative"
        style={{
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
          className="block rounded shadow-lg relative z-10"
          style={{ maxWidth: "350px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default DiplomaFrame;
