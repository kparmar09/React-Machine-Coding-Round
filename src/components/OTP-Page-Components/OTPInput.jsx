import React, { useEffect, useRef } from "react";

function OTPInput({
  length,
  sendOtpToParentFile,
  submitStatus,
  correctStatus,
}) {
  const [otp, setOtp] = React.useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    console.log(combinedOtp);
    sendOtpToParentFile(combinedOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.code === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  let borderColor = "#6EACDA";

  if (submitStatus && !correctStatus) {
    borderColor = "#973131";
  } else if (submitStatus && correctStatus) {
    borderColor = "#508D4E";
  }

  return (
    <>
      {otp.map((value, index) => {
        return (
          <input
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            type="digit"
            autoComplete="off"
            className="h-28 w-24 rounded-md mr-2 ml-2"
            style={{
              backgroundColor: "#6EACDA",
              textAlign: "center",
              fontSize: "40px",
              border: `3px solid ${borderColor}`,
            }}
          />
        );
      })}
    </>
  );
}

export default OTPInput;
