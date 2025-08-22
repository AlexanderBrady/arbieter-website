import React from 'react'
import { cn } from "./ui/utils";

interface ThreeBlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor?: string;
  secondBlobColor?: string;
  thirdBlobColor?: string;
}

const ThreeBlob = ({ 
  className = "",
  firstBlobColor = "bg-[#4285F1]",
  secondBlobColor = "bg-[#FFB565]", 
  thirdBlobColor = "bg-[#FF6C6D]"
}: ThreeBlobProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden rounded-lg ", className)}>
      {/* Top blob - Blue */}
      <div
        className={cn(
          "absolute -top-10 left-1/2 transform -translate-x-1/2 w-100 h-32 rounded-full opacity-60 blur-2xl",
        //   "animate-[pop-blob_5s_infinite]",
          firstBlobColor,
        )}
        style={{
          animationDelay: "0s"
        }}
      />
      <div
        className={cn(
          "absolute -top-10 left-1/2 transform -translate-x-1/2 w-80 h-16 rounded-full opacity-60 blur-xl",
          "animate-[pop-blob_5s_infinite]",
          firstBlobColor,
        )}
        style={{
          animationDelay: "0s"
        }}
      />
      
      {/* Middle blob - Golden Orange */}
      <div
        className={cn(
          "absolute top-1/6 -left-1/3 w-72 h-40 rounded-full opacity-50 blur-2xl",
        //   "animate-[pop-blob_5s_infinite]",
          secondBlobColor,
        )}
        style={{
          animationDelay: "1.67s"
        }}
      />
      <div
        className={cn(
          "absolute top-1/6 -left-1/3 w-60 h-40 rounded-full opacity-50 blur-md",
          "animate-[pop-blob_5s_infinite]",
          secondBlobColor,
        )}
        style={{
          animationDelay: "1.67s"
        }}
      />
      <div
        className={cn(
          "absolute top-1/6 left-1/2 transform -translate-x-1/2 w-full h-10 rounded-full opacity-50 blur-2xl",
        //   "animate-[pop-blob_5s_infinite]",
          secondBlobColor,
        )}
        style={{
          animationDelay: "1.67s"
        }}
      />
      
      {/* Bottom blob - Coral Red */}
      <div
        className={cn(
          "absolute top-1/6 -right-1/3 w-72 h-40 rounded-full opacity-50 blur-2xl",
        //   "animate-[pop-blob_5s_infinite]",
          secondBlobColor,
        )}
        style={{
          animationDelay: "3.33s"
        }}
      />
      <div
        className={cn(
          "absolute top-1/6 -right-1/3 w-60 h-40 rounded-full opacity-50 blur-md",
          "animate-[pop-blob_5s_infinite]",
          secondBlobColor,
        )}
        style={{
          animationDelay: "3.33s"
        }}
      />
      <div className="absolute inset-0 rounded-lg inset-ring-4 inset-ring-white z-[10]"></div>
    </div>
  )
}

export default ThreeBlob
