'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ElderlyMentalHealthSupport() {
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
        src="/artikel4.jpg" // Path relative to the `public` folder
        alt="Support for elderly mental health, combating loneliness"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width
        height={100} // Specify appropriate height
        layout="responsive"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Mental Health Support for the Elderly: Combating Loneliness and
        Depression
      </h1>
      <p className="text-justify mb-4">
        As people age, they often face life changes such as retirement, health
        issues, or the loss of loved ones. These transitions can increase the
        risk of loneliness, isolation, and depression—which are often
        overlooked in older adults.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">Recognize the Signs</strong> <br />
          Depression in the elderly may not always present as sadness. Look out
          for signs such as loss of interest in activities, changes in sleep or
          appetite, fatigue, withdrawal from social interactions, or complaints
          of unexplained physical pain.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Encourage Social Connections
          </strong>{' '}
          <br />
          Staying socially active is key to emotional well-being. Encourage
          participation in community groups, religious gatherings, or hobby
          clubs. Even regular phone or video calls with family can make a big
          difference.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Provide Meaningful Daily Activities
          </strong>{' '}
          <br />
          Boredom can worsen feelings of loneliness. Encourage activities like
          gardening, walking, listening to music, or even simple chores that
          give a sense of purpose and routine.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">Promote Physical Health</strong>{' '}
          <br />
          Mental and physical health are deeply connected. Help them maintain a
          healthy diet, get regular exercise, and keep up with doctor visits.
          Movement and sunlight can significantly boost mood.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Offer Emotional Support and Listen Actively
          </strong>{' '}
          <br />
          Sometimes, what elderly individuals need most is someone to listen.
          Practice empathy—be present, patient, and non-judgmental during
          conversations.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Seek Professional Help When Needed
          </strong>{' '}
          <br />
          Don’t hesitate to consult a psychologist, counselor, or geriatric
          mental health specialist if signs of depression persist. Therapy and
          medication can be life-changing.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Supporting the mental health of elderly loved ones isn’t just about
        treating illness—it’s about preserving dignity, purpose, and joy in
        their later years. Small acts of connection and compassion can go a long
        way in helping them feel seen, valued, and loved.
      </p>
    </div>
  );
}

export default ElderlyMentalHealthSupport;