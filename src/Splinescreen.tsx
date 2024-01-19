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
      </div>
      <div className="right-section">
        <div className="right-title">
          <h2 style={{ paddingTop: "5vh" }}>Hello, I am Sai Srinivas S S</h2>
          <img
            style={{
              margin: "15px",
              width: "10vw",
              height: "20vh",
              objectFit: "cover",
              borderRadius: 90,
            }}
            alt="wallpaper"
            src={require("./Assets/Sai.heic")}
          />
        </div>

        <p style={{ margin: 15, padding: 10 }}>
          {" "}
          A frontend developer with 1 year of experience in React-Native &
          Reactjs. I have actively designed and coded Mobile and Web apps . In
          addition to React-Native, I have expertise in Redux, unit testing
          using jest, agile methodologies, Git, Firebase,GraphQL & many more.
        </p>
      </div>
    </div>
  );
};

export default Splinescreen;
