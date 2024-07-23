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
          width="600px"
          height="400px"
          innerColor="white"
          outerColor="#1170CC"
        >
          <div className="flex flex-col items-center">
            <h1 className=" font-bold text-3xl mt-5">
              Mobile Phone Verification
            </h1>
            <p className="font-extralight text-lg mt-1">
              Enter the 4-digit verification code that was sent to your mobile
              phone
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
              width="450px"
              height="40px"
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
