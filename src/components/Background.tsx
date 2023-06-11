import Image from "next/image";
import React from "react";

// Types
interface BackgroundProps {
  mobile: string;
  tablet: string;
  desktop: string;
}

function Background({mobile , tablet, desktop} : BackgroundProps ) {
  return (
    <div className=" fixed z-0  h-screen w-screen top-0 left-0">
        <picture>
            <source media="(min-width:1024px)" srcSet={desktop} />
            <source media="(min-width:768px)" srcSet={tablet} />
            <Image src={mobile} className=" object-cover " fill alt="background image"/>
        </picture>
    </div>
  )
}

export default Background;
