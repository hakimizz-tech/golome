
import React from 'react'
import { cn } from '@/lib/utils'

function GridBackground({children}: {children?: React.ReactNode}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ff6900_1px,transparent_1px),linear-gradient(to_bottom,#ff6900_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#ff6900_1px,transparent_1px),linear-gradient(to_bottom,#ff6900_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-white"></div>
      {children || (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p>
      )}
    </div>
  );
}

export default GridBackground