
// import Image from 'next/image';
// import gsap from 'gsap';

// export default function Home() {
//   return (
//     <main >
//       <div className="flex flex-row justify-center items-center mt-32">
//         <h1 className="text-7xl font-bold">Hello World!</h1>
       
//         <div className="text-center mb-4">
//         <Image
//           src="/hey-emoji.png"
//           alt="not-shown"
//           width={100}
//           height={100}
//           className="shake-animation"
//         />
//       </div>
//       </div>
//       <div className='flex flex-col justify-center items-center'>
//       <div className=" flex flex-row  text-center text-3xl font-semibold">
//         I am a monk with a Mac who loves designing and <br/> coding from 
//         scratch and gets a kick out of turning ideas  <br/>  into vibrant reality on the screen
//       </div> <br/>
//       <div className="text-center mt-4">
//         <Image
//           src="/floater.webp"
//           alt="not-shown"
//           width={100}
//           height={100}
//         />
//       </div>
//       </div>
//       <div className="cursor"></div>
      
//     </main>
//   );
// }


// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// export default function Home() {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const image = imageRef.current;

//     // Define the GSAP animation
//     const revealImage = gsap.timeline({
//       scrollTrigger: {
//         trigger: image,
//         start: 'top 80%', // Adjust the trigger point as needed
//         end: 'bottom top',
//         scrub: true, // Enable scrubbing for smooth animation
//       },
//     });

//     // Animation properties
//     revealImage.fromTo(
//       image,
//       { opacity: 0, y: 50 }, // Start values
//       { opacity: 1, y: 0, duration: 1 } // End values
//     );
//   }, []);

//   return (
//     <main>
//       <div className="flex flex-row justify-center items-center mt-32">
//         <h1 className="text-7xl font-bold">Hello World!</h1>
//         <div className="text-center mb-4">
//           <div
//             style={{ opacity: 0 }} // Set initial opacity to 0
//             className="shake-animation"
//             ref={imageRef} // Add the ref to the wrapping div
//           >
//             <Image
//               src="/hey-emoji.png"
//               alt="not-shown"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex flex-row text-center text-3xl font-semibold">
//           I am a monk with a Mac who loves designing and <br /> coding from
//           scratch and gets a kick out of turning ideas <br /> into vibrant
//           reality on the screen
//         </div>
//         <br />
//         <div className="text-center mt-4">
//           <Image
//             src="/floater.webp"
//             alt="not-shown"
//             width={100}
//             height={100}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
// import Image from 'next/image';


// export default function Home() {
//   return (
//     <main>
//       <div className="flex flex-row justify-center items-center mt-32">
//         <h1 className="text-7xl font-bold text-blue-500 cursor-pointer transition duration-300 hover:bg-yellow-200 group-hover:bg-yellow-200">Hello World!</h1>

//         <div className="text-center mb-4">
//           <Image
//             src="/hey-emoji.png"
//             alt="not-shown"
//             width={100}
//             height={100}
//             className="shake-animation"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex flex-row text-center text-3xl font-semibold">
//           I am a monk with a Mac who loves designing and <br /> coding from
//           scratch and gets a kick out of turning ideas <br /> into vibrant
//           reality on the screen
//         </div>
//         <br />
//         <div className="text-center mt-4">
//           <Image src="/floater.webp" alt="not-shown" width={100} height={100} />
//         </div>
//       </div>

//       {/* <div className="cursor"></div>
//       <CustomCursor /> Add the custom cursor component here */}
//     </main>
//   );
// }

{/* <div class="group">
  <span class="text-blue-500 cursor-pointer transition duration-300 hover:bg-yellow-200 group-hover:bg-yellow-200">
    Hello
  </span>
  <span class="text-red-500 cursor-pointer transition duration-300 hover:bg-yellow-200 group-hover:bg-yellow-200">
    World
  </span>
</div> */}

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main>
//       <div className="flex flex-row justify-center items-center mt-32">
//         <h1 className="text-7xl font-bold text-blue-500 cursor-pointer transition duration-300 relative group">
//           <span className="hover:rounded-full hover:border-2 hover:border-yellow-200">Hello</span>
//           <span className="hover:rounded-full hover:border-2 hover:border-yellow-200">World!</span>
//         </h1>

//         <div className="text-center mb-4">
//           <Image
//             src="/hey-emoji.png"
//             alt="not-shown"
//             width={100}
//             height={100}
//             className="shake-animation"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex flex-row text-center text-3xl font-semibold">
//           I am a monk with a Mac who loves designing and <br /> coding from
//           scratch and gets a kick out of turning ideas <br /> into vibrant
//           reality on the screen
//         </div>
//         <br />
//         <div className="text-center mt-4">
//           <Image src="/floater.webp" alt="not-shown" width={100} height={100} />
//         </div>
//       </div>

//       {/* <div className="cursor"></div>
//       <CustomCursor /> Add the custom cursor component here */}
//     </main>
//   );
// }
