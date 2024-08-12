import React from "react";
import { SandpackPreview } from "@codesandbox/sandpack-react";

const Preview = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <SandpackPreview
        style={{ padding: "50", height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Preview;
