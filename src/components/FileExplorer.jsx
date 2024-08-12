import React from "react";
import { SandpackFileExplorer } from "sandpack-file-explorer";

const FileExplorer = () => {
  return (
    <div className="file-explorer" style={{ height: "100%" }}>
      <SandpackFileExplorer style={{ height: "100%", width: "100%", maxWidth: "100%" }} />
    </div>
  );
};

export default FileExplorer;
