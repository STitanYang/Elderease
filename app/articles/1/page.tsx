'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Assuming your image is in the 'src/assets' folder or similar.

function FallPreventionInfoTailwind() {
    const router = useRouter();
    const handleBackClick = () => {
    router.push("/articles")
  };
  return (
    <div className="font-arial leading-relaxed max-w-3xl mx-auto my-10 p-5 bg-white text-gray-800">
        <button
        onClick={handleBackClick}
        className="absolute top-30 left-10 text-slate-700 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-150 z-10 flex items-center space-x-2" // Added flex, items-center, space-x-2
        aria-label="Go back to previous page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5" // You can also use `stroke-width` in a style attribute or CSS
          stroke="currentColor"
          className="w-5 h-5" // Adjust size as needed
        >
          <path
            strokeLinecap="round" // Changed from stroke-linecap for JSX
            strokeLinejoin="round" // Changed from stroke-linejoin for JSX
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <Image
        src="/artikel1.jpg"
        alt="Tips to prevent falls in elderly"
        className="w-full max-w-xl block mx-auto mb-6" // Adjusted max-width, added mb-6 for spacing
        width={100}
        height={100}
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6"> {/* Added font-bold, text-3xl, mb-6 */}
        How to Prevent Falls in Elderly at Home
      </h1>
      <p className="text-justify mb-4"> {/* Added mb-4 for spacing */}
        Falls are one of the leading causes of injury among the elderly. As
        people age, their balance, vision, and muscle strength tend to decline,
        increasing the risk of falling—even within the safety of their own home.
        Fortunately, many of these accidents can be prevented with a few
        proactive steps.
      </p>
      <ol className="list-decimal pl-5 space-y-4"> {/* Added list-decimal, pl-5, space-y-4 for styling list items */}
        <li className="mb-3"> {/* Tailwind's space-y utility handles inter-item spacing, mb-3 for finer control if needed */}
          <strong className="font-semibold">Remove Tripping Hazards</strong> <br /> {/* Added font-semibold */}
          Start by evaluating the home environment. Loose rugs, electrical
          cords, and cluttered pathways are common causes of falls. Remove or
          secure these items, and ensure that all walkways are clear and easy
          to navigate.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Install Safety Equipment</strong> <br />
          Grab bars in bathrooms, handrails on both sides of staircases, and
          non-slip mats in the shower or bathtub can greatly reduce the risk of
          slipping. Ensure that these supports are securely installed.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Improve Lighting</strong> <br />
          Poor lighting can make it hard to see obstacles. Use brighter light
          bulbs and install night lights in hallways, bathrooms, and bedrooms to
          help seniors see clearly, especially at night.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Encourage Proper Footwear</strong> <br />
          Shoes with good grip and support can help prevent slips. Avoid high
          heels, loose slippers, or shoes with slick soles.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Regular Exercise and Balance Training</strong> <br />
          Simple activities such as walking, tai chi, or strength training can
          help maintain muscle strength and improve balance, reducing the
          likelihood of a fall.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Schedule Vision and Health Checks</strong> <br />
          Regular eye exams and health check-ups are essential. Poor vision or
          medications that cause dizziness can increase fall risk, so early
          detection and management are key.
        </li>
      </ol>
      <p className="text-justify mt-6"> {/* Added mt-6 for spacing */}
        Preventing falls isn’t just about safety—it’s about preserving
        independence and quality of life. By making the home safer and
        encouraging healthy habits, you can help your loved one live more
        confidently and comfortably.
      </p>
    </div>
  );
}

export default FallPreventionInfoTailwind;