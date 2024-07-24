import React from "react";
import Container from "../components/Container/Container";
import OTPInput from "../components/OTP-Page-Components/OTPInput";
import Button from "../components/OTP-Page-Components/Button";

function OTP() {
  const [finalOtp, setfinalOtp] = React.useState("0");
  const [submitStatus, setSubmitStatus] = React.useState(false);
  const [correctStatus, setCorrectStatus] = React.useState(false);

  const handleOtpFromChild = (data) => {
    setfinalOtp(data);
  };

  const validateOTP = () => {
    setSubmitStatus(true);
    console.log(finalOtp);
    if (finalOtp == 1234) {
      setCorrectStatus(true);
    } else {
      setCorrectStatus(false);
    }
  };

  return (
    <>
      <div>
        <Container
          width="35vw"
          innerColor="white"
          outerColor="#3F72AF"
          padding="2vw"
        >
          <div className="flex flex-col items-center">
            <h1 className=" font-bold text-3xl">Mobile Phone Verification</h1>
            <p
              className="font-semibold text-lg mt-1"
              style={{ color: "#BFBFBF" }}
            >
              Enter the 4-digit verification code that was sent to your
            </p>
            <p className="font-semibold text-lg" style={{ color: "#BFBFBF" }}>
              mobile phone
            </p>
            <div className="mt-8">
              <OTPInput
                length={4}
                sendOtpToParentFile={handleOtpFromChild}
                submitStatus={submitStatus}
                correctStatus={correctStatus}
              />
            </div>
            <Button
              width="417px"
              height="64px"
              color="#00215E"
              btnClickFn={validateOTP}
              submitStatus={submitStatus}
              correctStatus={correctStatus}
            >
              Verify Account
            </Button>
            <div className="mt-5">
              <p>
                Didn't recieve code?
                <a href="" style={{ color: "#00215E", fontWeight: 600 }}>
                  Resend
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default OTP;
