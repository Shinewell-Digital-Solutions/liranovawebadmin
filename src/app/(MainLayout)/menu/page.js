"use client";

import dynamic from "next/dynamic";

const FrontMenuCreate = dynamic(() => import("@/Components/FrontMenu"), {
  ssr: false, 
});

const FrontMenu = () => {
  return (
      <FrontMenuCreate />
  );
};

export default FrontMenu;