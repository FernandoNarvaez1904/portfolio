import React from "react";

Y ADexport interface TerminalBannerProps {
  name: string;
  about: string;
  className?: string;
}

/**
 * TerminalBanner renders a terminal-like header that adapts to light/dark mode.
 * Use inside MDX as:
 * <TerminalBanner name="Diego Romero" about="Hi there! ..." />
 */
export default function TerminalBanner({
  name,
  about,
  className,
}: TerminalBannerProps) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        padding: "1.5rem",
        position: "relative",
        margin: "2rem 0",
        fontFamily: "'Courier New', monospace",
        color: "#00ff00",
        background: "#000000",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
      }}
      className={className}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            fontSize: "1rem",
            marginBottom: "0.1rem",
            color: "#00dd66",
          }}
        >
          {"$"} whoami
        </div>
        <div style={{ fontWeight: 800, fontSize: "2rem", color: "#00ff00" }}>
          {name} - Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#00dd66",
            lineHeight: 1.4,
            marginTop: "0.2rem",
          }}
        >
          {"$"} cat about.txt
          <br />
          <div
            style={{ marginTop: "10px", color: "#00ff00", fontWeight: "600" }}
          >
            {about}
          </div>
        </div>
      </div>
    </div>
  );
}
