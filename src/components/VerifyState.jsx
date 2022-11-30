import React, { useState } from "react";
import GiveAccess from "./UserInfo";

const VerifyState = () => {
  const [Accessible, setAccessible] = useState(true);
  return (
    <div>
      <GiveAccess open={Accessible} onClose={() => setAccessible(false)} />
    </div>
  );
};

export default VerifyState;
