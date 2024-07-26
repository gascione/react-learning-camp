import "./Text.css";

import React from "react";

export const Text = ({ content }) => {
  return (
    <>
      <h1>Esto es un texto</h1>
      <p>{content}</p>
    </>
  );
};
