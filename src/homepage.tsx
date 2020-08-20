import React, { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
        backgroundImage: `url(${require("./image/hktvBackground.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HomePage;
