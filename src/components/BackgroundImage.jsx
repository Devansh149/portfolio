import React from 'react'

const BackgroundImage = () => {
  return (
    <div
        className=" absolute inset-0 pointer-events-none z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231E1B18' stroke-width='1'%3E%3Cpath d='M44 0H0v44'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(85% 85%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(85% 85%, black 50%, transparent 100%)",
        }}
      />
  )
}

export default BackgroundImage