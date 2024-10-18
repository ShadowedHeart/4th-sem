import React from "react";

const Resume = () => {
    const divStyle = {
        height: '40vh', // Correctly set the height here
        backgroundColor: 'lightblue', // Example background color
    };

  return (
    <>
      <h1>Resume</h1>
      <div style={divStyle}>This div has a height of 40vh.</div>
      <div style={divStyle}>This div has a height of 40vh.</div>
      <div style={divStyle}>This div has a height of 40vh.</div>
    </>
  );
};

export default Resume;
