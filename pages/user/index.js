import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const Router = useRouter();
  useEffect(() => {
    const Push = () => {
      Router.push("/404");
    }
    Push();
  }, []);

  return <></>;
};

export default Index;
