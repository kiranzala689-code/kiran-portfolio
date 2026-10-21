import React from "react";

export default function SectionTitle({ eyebrow, title, dark = false }) {
  return (
    <div className={`section-title ${dark ? "dark" : ""}`}>
      <div className="eyebrow"><i></i>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}