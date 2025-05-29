'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function HomeSafetyTipsElderly() {
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
        src="/artikel3.jpg" // Path relative to the `public` folder
        alt="Visual representation for home safety tips for elderly"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width
        height={100} // Specify appropriate height
        layout="responsive"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Home Safety Tips for Elderly Living Alone
      </h1>
      <p className="text-justify mb-4">
        Communicating with someone who has dementia can be challenging. As
        memory, language, and cognitive abilities decline, frustration may
        increase for both the patient and caregiver. However, with patience and
        the right approach, meaningful interaction is still possible.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">Use Simple Language</strong> <br />
          Speak slowly and clearly using short, simple sentences. Avoid complex
          instructions or abstract concepts. For example, instead of saying
          “Let’s go for our usual walk before lunch,” try “Let’s walk now.”
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Maintain Eye Contact and Body Language
          </strong>{' '}
          <br />
          Non-verbal cues are powerful. Face the person directly, maintain eye
          contact, and use calm, open body language. A gentle tone of voice can
          help soothe anxiety.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Limit Distractions</strong> <br />
          Choose a quiet environment for conversation. Turn off the TV or radio,
          and ensure good lighting. Minimizing noise helps the person focus
          better on your words and expressions.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Be Patient and Give Time to Respond
          </strong>{' '}
          <br />
          People with dementia often need more time to process information. Wait
          patiently for a response without interrupting. Avoid correcting or
          arguing if they make mistakes.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Use Names and Familiar Words
          </strong>{' '}
          <br />
          Refer to people by name and use familiar places or terms. Avoid
          pronouns like “he” or “they,” which may cause confusion.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Offer Reassurance and Positive Feedback
          </strong>{' '}
          <br />
          Encourage efforts to communicate, even if the words aren’t clear. A
          simple nod or smile can provide comfort and reinforce confidence.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Effective communication is about connection, not perfection. By adapting
        your approach with empathy and understanding, you can maintain trust,
        reduce frustration, and improve the quality of life for dementia
        patients.
      </p>
    </div>
  );
}

export default HomeSafetyTipsElderly;