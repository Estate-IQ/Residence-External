import React, { useState } from "react";
import GiveAccess from "./ShareAccess";

const PinState = () => {
  const [Accessible, setAccessible] = useState(true);
  return (
    <div>
      <GiveAccess open={Accessible} onClose={() => setAccessible(false)} />
    </div>
  );
};

export default PinState;
