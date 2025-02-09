"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}

function FeatureCard({
  title,
  description,
  image,
  isActive,
  onHover,
  onLeave,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{ width: isActive ? "43rem" : "20rem" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group mx-auto"
    >
      <Card className="overflow-hidden rounded-3xl h-full">
        <CardContent className="p-0 relative overflow-hidden">
          <div className="relative md:h-[37rem] h-64 w-full">
            <motion.img
              className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              src={image || "/placeholder.svg"}
              alt={title}
            />
            <div className="absolute inset-0 md:bg-black/60 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div
            className={`absolute ${
              isActive ? "md:block md:opacity-100" : "md:hidden md:opacity-0"
            } bottom-0 left-0 w-full p-4 z-10 bg-black/40 rounded-t-3xl backdrop-blur-3xl transition-all duration-500`}
          >
            <h3 className="md:text-2xl text-lg font-ClashDisplayMedium text-white mb-1 leading-tight">
              {title.split(" ").map((word, index, array) => (
                <span
                  key={index}
                  className={`${
                    index === array.length - 1 ? "text-emerald-500" : ""
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </h3>
            <p className="text-neutral-300 text-xs md:text-sm">{description}</p>
          </div>
          <div
            className={`absolute ${
              isActive ? "opacity-100" : "opacity-30"
            } border-neutral-900/20 z-40 top-2 left-2 border-2 rounded-lg font-ClashDisplayMedium text-xl h-10 w-10 backdrop-blur-3xl text-white bg-neutral-900/40 flex items-center justify-center`}
          >
            <span>0{index}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;
