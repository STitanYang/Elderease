'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ChoosingCaregiver() {
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
        src="/artikel5.jpg" // Path relative to the `public` folder
        alt="Choosing an in-home caregiver for an aging parent"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width
        height={100} // Specify appropriate height
        layout="responsive"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Choosing the Right In-Home Caregiver for Your Aging Parent
      </h1>
      <p className="text-justify mb-4">
        Finding the right in-home caregiver for your aging parent is a crucial
        decision. The right match ensures not only physical care but also
        emotional comfort and trust, which are essential for your loved one's
        well-being.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">
            Identify Your Parent’s Needs
          </strong>{' '}
          <br />
          Start by assessing the level of care required. Do they need help with
          personal hygiene, medication, mobility, or companionship?
          Understanding their physical, emotional, and medical needs helps
          determine the qualifications the caregiver must have.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Check Credentials and Experience
          </strong>{' '}
          <br />
          Look for caregivers who have formal training in elder care, especially
          for conditions like dementia or mobility impairments. Ask about
          previous experience, certifications, and whether they’re licensed (if
          required in your area).
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Consider Personality and Compatibility
          </strong>{' '}
          <br />
          Beyond skills, personality fit matters. Choose someone who is patient,
          compassionate, and communicates well with your parent. Arrange a trial
          visit or interview to observe the caregiver’s interaction with your
          loved one.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Verify Background and References
          </strong>{' '}
          <br />
          Ensure safety by conducting a thorough background check. Ask for
          references from past clients or agencies and follow up with calls to
          understand their reliability and work ethic.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Choose an Agency or Independent Caregiver
          </strong>{' '}
          <br />
          Hiring through a licensed agency may offer more security, oversight,
          and replacements when needed. Independent caregivers might be more
          flexible and cost-effective but require more hands-on management.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Set Clear Expectations and Monitor Progress
          </strong>{' '}
          <br />
          Define duties, working hours, and emergency protocols early on.
          Regular check-ins help ensure your parent is receiving the care and
          respect they deserve.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Choosing the right caregiver is not just about qualifications—it's about
        trust, empathy, and forming a supportive bond. With thoughtful planning
        and open communication, you can find a caregiver who truly makes a
        difference in your parent’s life.
      </p>
    </div>
  );
}

export default ChoosingCaregiver;