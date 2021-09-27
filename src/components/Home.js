import React from "react";

import Video from "../assests/abstract.mp4";

const Home = () => {
  return (
    <div>
      <video loop muted autoPlay preload="auto">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
export default Home;
