import React from 'react'
import { cn } from "./ui/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor?: string;
  secondBlobColor?: string;
  thirdBlobColor?: string;
  fourthBlobColor?: string;
}

const GradientBg = ({ 
  className = "",
  firstBlobColor = "bg-[#4285F1]",
  secondBlobColor = "bg-[#FF6C6D]", 
  thirdBlobColor = "bg-[#FFB565]",
  fourthBlobColor = "bg-[#99A6FB]"
}: BlobProps) => {
  return (
    <div className="absolute md:top-0 -top-32 left-0 min-h-52 min-w-52 items-center justify-center z-[0]">
      <div className="relative w-full max-w-lg">
        {/* First blob - Blue */}
        <div
          className={cn(
            "absolute -right-24 -top-9 h-72 w-72 rounded-sm p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "animate-[pop-blob_5s_infinite]",
            className,
            firstBlobColor,
          )}
          style={{
            animationDelay: "0s"
          }}
        ></div>
        
        {/* Second blob - Coral Red */}
        <div
          className={cn(
            "absolute -left-40 md:top-64 top-10 h-72 w-72 rounded-sm p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "animate-[pop-blob_5s_infinite]",
            className,
            secondBlobColor,
          )}
          style={{
            animationDelay: "1.25s"
          }}
        ></div>
        
        {/* Third blob - Golden Orange */}
        <div
          className={cn(
            "absolute -right-90 h-72 w-72 md:top-0 -top-20 rounded-sm p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "animate-[pop-blob_5s_infinite]",
            className,
            thirdBlobColor,
          )}
          style={{
            animationDelay: "2.5s"
          }}
        ></div>
        
        {/* Fourth blob - Light Purple */}
        <div
          className={cn(
            "absolute -left-60 -top-32 h-72 w-72 rounded-sm p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            "animate-[pop-blob_5s_infinite]",
            className,
            fourthBlobColor,
          )}
          style={{
            animationDelay: "3.75s"
          }}
        ></div>
      </div>
    </div>
  )
}

export default GradientBg