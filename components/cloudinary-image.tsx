"use client";


import { SearchResult } from "@/app/galeria/page";
import { CldImage, CldImageProps } from "next-cloudinary";



export function CloudinaryImage(props: any) {
  const { imageData, onUnheart } = props;
  return (
    <div className="relative">
      <CldImage {...props}/>
    </div>
  );
}