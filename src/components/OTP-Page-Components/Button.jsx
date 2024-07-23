import React from "react";

function Button({
  children,
  height,
  width,
  color,
  btnClickFn,
  submitStatus,
  correctStatus,
}) {
  if (submitStatus && !correctStatus) {
    color = "#973131";
    children = "Verification failed";
  } else if (submitStatus && correctStatus) {
    color = "#508D4E";
    children = "Verified";
  }

  return (
    <>
      <button
        className=" rounded-lg mt-5 text-slate-100"
        onClick={btnClickFn}
        style={{
          height: `${height}`,
          width: `${width}`,
          backgroundColor: `${color}`,
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
