import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const Router = useRouter();
  useEffect(() => {
    Router.push("/404");
  }, []);
  
  return (
    <></>
  )
};

export default Index;
