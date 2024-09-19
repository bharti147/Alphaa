// import React, { useState, useEffect } from "react";

// function Banner() {
//   const [isVisible, setIsVisible] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 500); // 0.5 second delay before the animation starts

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="bg-custom-orange2 font-signika px-10 py-16 flex flex-col items-center">
//       <h1
//         className={`text-4xl font-bold text-custom-dark text-center leading-relaxed mb-5 
//         lg:text-5xl lg:mt-6 lg:mb-10
//         transform ${
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//         }`}
//         style={{
//           transition: "transform 1s ease-in-out, opacity 2s ease-in-out", // Custom duration for both properties
//           transitionDelay: "2s", // Delay before animation starts
//         }}
//       >
//         Talk To PAWAN Now!
//       </h1>
//       <button
//         className={`bg-white w-full py-4 rounded font-bold mb-8
//         md:w-auto md:px-6
//         lg:mb-12
//         transform ${
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
//         }`}
//         style={{
//           transition: "transform 1s ease-in-out, opacity 2s ease-in-out", // Custom duration for both properties
//           transitionDelay: "2s", // Delay before animation starts
//         }}
//       >
//         CONTACT US
//       </button>
//       <p className="flex flex-col text-center text-xl text-custom-dark text-wrap
//       md:flex-row
//       lg:mb-8
//       ">
//         Feel Free to Get in Touch for a No Obligations{" "}
//         <a href="#" className="underline cursor-pointer font-bold mt-5 md:mt-0 md:ml-3">
//           CALL PAWAN !!!
//         </a>
//       </p>
//     </div>
//   );
// }

// export default Banner;


import React, { useState, useEffect, useRef } from "react";

function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Trigger the animation when the banner is visible
        }
      },
      {
        threshold: 0.8, // Adjust this as needed; it means the banner is visible when at least 10% of it is in the viewport
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current); // Start observing the banner
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef} // Assign ref to the banner div
      className="bg-custom-blue font-sans px-10 py-16 flex flex-col items-center"
    >
      <h1
        className={`text-4xl font-bold text-white text-center leading-relaxed mb-5 
        transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{
          transition: "transform 1s ease-in-out, opacity 2s ease-in-out",
        }}
      >
        Talk To Vijay Sahani Now!
      </h1>
      <button
        className={`bg-white w-full py-4 rounded font-bold mb-8
        lg:w-auto lg:px-12 lg:rounded-xl
        transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        style={{
          transition: "transform 1s ease-in-out, opacity 2s ease-in-out",
        }}
      >
        CONTACT US
      </button>
      <p className="flex flex-col text-center text-xl text-white text-wrap">
        Feel Free to Get in Touch for a No Obligations{" "}
        <a href="#" className="underline cursor-pointer font-bold mt-5">
          CALL US !!!
        </a>
      </p>
    </div>
  );
}

export default Banner;
