import React from "react";
import Container from "../../Container";
import NumberandAddress from "./NumberandAddress";

const Topbar = () => {
  return (
    <>
      <div className="border-b-1 border-b-black01 py-[22px]">
        <Container>
          <div className="grid grid-cols-2 justify-between">
            <div>
              <NumberandAddress />
            </div>
            <div>right</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
