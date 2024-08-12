import { useState } from "react";
import React from "react";
import { SandpackTests } from "@codesandbox/sandpack-react";

const Test = () => {
  const handleTestResult = (specs) => {
    console.log('Result: ', specs);
  }
  return (
    <div style={{ height: "400px", overflowY: "auto", padding: "10px" }}>
      <SandpackTests
        verbose={true}
        onComplete={handleTestResult}
      />
    </div>
  );
};

export default Test;
