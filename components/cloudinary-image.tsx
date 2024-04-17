"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

export function CloudinaryImage(props: any) {

  return (
    <div className="relative">
      <CldImage {...props}/>
    </div>
  );
}