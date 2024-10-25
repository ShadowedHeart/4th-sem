import React from "react";
import portfolio from "../resources/pdf/MyResume.pdf";

const Resume = () => {

  return (
    <>
      <a href={portfolio} download>Download</a>
      <iframe
        src={portfolio}
        style={{ width: '100%', height: '600px', border: 'none' }}
        title="Resume PDF"
      />
    </>
  );
};

export default Resume;
