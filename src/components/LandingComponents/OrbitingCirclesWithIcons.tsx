import Image from "next/image";
import { OrbitingCircles } from "../magicui/orbiting-circles";
import { cn } from "@/lib/utils";

export function OrbitingCirclesWithIcon() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40} speed={1}>
        {["Instagram", "linkedin", "github", "google", "twitter"].map(
          (icon) => (
            <div
              key={icon}
              className="p-7 rounded-full bg-primary-foreground flex items-center justify-center"
            >
              <Image
                className={cn(
                  "max-h-24 max-w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  icon === "twitter"
                    ? "dark:invert-[1]"
                    : icon === "github"
                    ? "invert-[1] dark:invert-0"
                    : ""
                )}
                height={40}
                width={40}
                src={`/${icon}.svg`}
                alt={icon}
              />
            </div>
          )
        )}
      </OrbitingCircles>

      <OrbitingCircles iconSize={30} radius={100} reverse speed={1}>
        {["github", "google", "Instagram", "linkedin", "twitter"].map(
          (icon) => (
            <div
              key={icon}
              className="p-7 rounded-full bg-primary-foreground flex items-center justify-center"
            >
              <Image
                className={cn(
                  "max-h-24 max-w-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  icon === "twitter"
                    ? "dark:invert-[1]"
                    : icon === "github"
                    ? "invert-[1] dark:invert-0"
                    : ""
                )}
                height={40}
                width={40}
                src={`/${icon}.svg`}
                alt={icon}
              />
            </div>
          )
        )}
      </OrbitingCircles>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-base px-2 text-muted-foreground font-ClashDisplayMedium bg-primary-foreground rounded-2xl inline-block">
        CrossPostHub
      </span>
    </div>
  );
}
