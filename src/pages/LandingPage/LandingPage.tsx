import React, { useEffect, useState } from "react";
import LandingPageMobile from "./LandingPageMobile";
import LandingPageDesktop from "./LandingPageDesktop";

function LandingPage() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      {isDesktop
        ? <LandingPageDesktop />
        : <LandingPageMobile />
        }
    </>
  );
}

export default LandingPage;
