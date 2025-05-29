'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function SupportingElderlyIndependence() {
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
        src="/artikel7.jpg" // Path relative to the `public` folder - note "articles"
        alt="Supporting elderly independence while providing care"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width
        height={100} // Specify appropriate height
        layout="responsive"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Supporting Elderly Independence While Providing Care
      </h1>
      <p className="text-justify mb-4">
        As loved ones age, providing care often becomes necessary—but
        maintaining their independence is just as important. Encouraging
        autonomy not only preserves their dignity but also promotes better
        mental and emotional health.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">
            Encourage Participation in Daily Activities
          </strong>{' '}
          <br />
          Let seniors do as much as they can on their own. Even if tasks take
          longer, supporting them in dressing, eating, or grooming helps them
          feel capable and in control.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Adapt the Home Environment</strong>{' '}
          <br />
          Make the living space elder-friendly: install grab bars, improve
          lighting, remove tripping hazards, and use adaptive tools like
          easy-grip utensils or button hooks. These adjustments can empower
          seniors to move more freely and safely.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Offer Choices</strong> <br />
          Instead of making decisions for them, offer options. Ask what they’d
          like to wear, eat, or do for the day. This fosters a sense of control
          and self-respect.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Support Social Engagement</strong>{' '}
          <br />
          Encourage participation in social or community activities. Whether
          it's a senior center class or a weekly video call with family, social
          interaction reduces feelings of isolation and keeps them mentally
          active.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Use Technology Thoughtfully
          </strong>{' '}
          <br />
          From reminder apps to emergency alert systems, technology can support
          independence while ensuring safety. Introduce tools gradually and
          patiently.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Practice Respectful Communication
          </strong>{' '}
          <br />
          Speak with, not to, your loved one. Avoid baby talk or overly
          controlling tones. Include them in discussions about their care and
          listen to their preferences.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Providing care doesn't mean taking over every aspect of an elderly
        person's life. When you strike a balance between support and
        independence, you help preserve their self-worth, confidence, and
        overall quality of life.
      </p>
    </div>
  );
}

export default SupportingElderlyIndependence;