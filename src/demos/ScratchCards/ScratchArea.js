import React, { useEffect, useState } from "react";

const ScratchArea = ({ token, xAxis, yAxis }) => {
  const spritePlacement = [-7, -70, -132, -195];
  const [scratchX, setX] = useState("-7px");
  const [scratchY, setY] = useState("");
  const [showToken, toggleToken] = useState(false);

  const scratch = () => {
    setX("-70px");
    toggleToken(true);
    setTimeout(function () {
      setX("-132px");
    }, 200);
    setTimeout(function () {
      setX("-195px");
    }, 400);
  };

  useEffect(() => {
    setY(`${spritePlacement[Math.floor(Math.random() * 4)]}px`);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="dot"
      style={{
        left: `${xAxis}px`,
        top: `${yAxis}px`,
      }}
    >
      <div
        className="scratch-off"
        style={{
          background: `url("/nesCards/scratch_sprite.png") ${scratchX} ${scratchY}`,
        }}
        onClick={scratch}
      ></div>
      {showToken ? (
        <div
          className="dot"
          style={{
            background: `url("/nesCards/tokens/token-${token}.png")`,
            backgroundImage: "cover",
          }}
        ></div>
      ) : (
        <div className="dot"></div>
      )}
    </div>
  );
};

export default ScratchArea;
