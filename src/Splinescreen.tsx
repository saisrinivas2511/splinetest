import Spline from "@splinetool/react-spline";
import React, { useRef } from "react";
import "./Splinescreen.css"; // Import the CSS file for styling

const Splinescreen = () => {
  const cube = useRef();

  function onLoad(spline: { findObjectById: (arg0: string) => any }) {
    // or
    const obj = spline.findObjectById("d913cb16-ad08-40bb-8232-c1ecbc0d8e89");

    // save it in a ref for later use
    cube.current = obj;
    console.log("this sius ", cube.current);
  }

  return (
    <div className="container">
      
      <div className="left-section">
        <Spline
          scene="https://prod.spline.design/a6oYLRa6Ib62M7DP/scene.splinecode"
          onLoad={onLoad}
        />
      </div><div className="right-section">
        <h2>About</h2>
        <p>This is the about section.</p>
      </div>
    </div>
  );
};

export default Splinescreen;

