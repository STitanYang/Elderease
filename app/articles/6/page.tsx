'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function RecognizingAlzheimersSigns() {
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
        src="/artikel6.jpg" // Path relative to the `public` folder
        alt="Recognizing early signs of Alzheimer's disease"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width
        height={100} // Specify appropriate height
        layout="responsive"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Recognizing Early Signs of Alzheimer’s Disease
      </h1>
      <p className="text-justify mb-4">
        Alzheimer’s disease is a progressive brain disorder that affects memory,
        thinking, and behavior. Early detection is key to managing symptoms and
        planning care. Recognizing the warning signs can lead to earlier
        diagnosis and better support for the individual and their family.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">
            Memory Loss That Disrupts Daily Life
          </strong>{' '}
          <br />
          Forgetting recently learned information, important dates, or asking
          for the same information repeatedly is one of the most common early
          signs.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Difficulty Planning or Solving Problems
          </strong>{' '}
          <br />
          People may struggle to follow familiar recipes, keep track of monthly
          bills, or manage tasks they previously handled with ease.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Confusion with Time or Place
          </strong>{' '}
          <br />
          Losing track of dates, seasons, or the passage of time—such as
          forgetting where they are or how they got there—can indicate early
          cognitive decline.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Trouble Understanding Visual Images or Spatial Relationships
          </strong>{' '}
          <br />
          This includes difficulty reading, judging distance, or recognizing
          colors and contrast, which can affect driving or moving safely around
          the house.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Problems with Speaking or Writing
          </strong>{' '}
          <br />
          People with early Alzheimer’s may have trouble joining conversations,
          repeat themselves, or struggle to find the right words.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Misplacing Items and Losing the Ability to Retrace Steps
          </strong>{' '}
          <br />
          Frequently placing things in unusual spots and being unable to retrace
          steps to find them is another common sign.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Withdrawal from Work or Social Activities
          </strong>{' '}
          <br />
          They may start avoiding social events, hobbies, or work due to
          changes they can’t explain or remember.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Changes in Mood and Personality
          </strong>{' '}
          <br />
          Unusual mood swings, confusion, suspicion, or becoming easily
          upset—especially outside their comfort zone—can signal early stages.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Early signs of Alzheimer’s can be subtle but life-changing. If you or a
        loved one experience these symptoms, seek medical advice. Timely
        diagnosis can open doors to treatment, support, and better quality of
        life.
      </p>
    </div>
  );
}

export default RecognizingAlzheimersSigns;