'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function DementiaCommunicationStrategies() {
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
        src="/artikel2.jpg" // Path relative to the `public` folder
        alt="Effective communication with dementia patients"
        className="w-full max-w-xl block mx-auto mb-6"
        width={100} // Specify appropriate width for aspect ratio and optimization
        height={100} // Specify appropriate height
        layout="responsive" // Or "intrinsic", "fixed", "fill"
      />
      <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
        Effective Communication Strategies for Dementia Patients
      </h1>
      <p className="text-justify mb-4">
        Dementia can significantly impact a person's ability to communicate,
        leading to frustration for both the individual and their caregivers. As
        cognitive functions decline, understanding and expressing thoughts,
        feelings, and needs becomes increasingly challenging. However, adopting
        specific communication strategies can bridge these gaps, fostering a
        more positive and supportive environment. Fortunately, many
        communication difficulties can be navigated with a few mindful
        approaches.
      </p>
      <ol className="list-decimal pl-5 space-y-4">
        <li className="mb-3">
          <strong className="font-semibold">
            Create a Calm and Quiet Environment
          </strong>{' '}
          <br />
          Minimize distractions such as a loud television, radio, or busy
          surroundings. A peaceful atmosphere helps the person with dementia
          focus better on the conversation and reduces potential agitation or
          confusion.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Use Simple Language and Short Sentences
          </strong>{' '}
          <br />
          Speak clearly, slowly, and use familiar words. Avoid complex
          sentences, slang, or jargon. Break down instructions or questions
          into single, manageable steps. This makes it easier for the person to
          process the information.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Maintain Eye Contact and Use Non-Verbal Cues
          </strong>{' '}
          <br />
          Position yourself at their eye level and maintain gentle eye contact.
          Use facial expressions, tone of voice, and gestures to help convey
          your message. A warm smile or a comforting touch can often
          communicate more effectively than words alone.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Be Patient and Allow Time for Response
          </strong>{' '}
          <br />
          People with dementia may need extra time to understand what is being
          said and to formulate a response. Avoid interrupting or rushing them.
          Listen attentively and show that you are engaged in what they are
          trying to communicate, even if it’s difficult for them.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Ask Yes/No or Simple Choice Questions
          </strong>{' '}
          <br />
          Open-ended questions can be overwhelming. Instead, ask questions that
          can be answered with a simple "yes" or "no," or offer limited
          choices. For example, instead of "What would you like to drink?" try
          "Would you like tea or coffee?"
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Validate Feelings and Offer Reassurance
          </strong>{' '}
          <br />
          Acknowledge the emotions they are expressing, even if their reality
          seems different from yours. Avoid arguing or correcting them. Instead,
          respond to the underlying feeling. Phrases like, "I can see this is
          upsetting for you," can provide comfort and validation.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Use Reminiscence and Familiar Topics
          </strong>{' '}
          <br />
          Engaging in conversations about their past, using old photographs, or
          talking about familiar people and events can be comforting and
          stimulating. Long-term memory often remains stronger than short-term
          memory in dementia.
        </li>
        <li className="mb-3">
          <strong className="font-semibold">
            Pay Attention to Non-Verbal Communication
          </strong>{' '}
          <br />
          Observe their body language, facial expressions, and gestures, as
          these can provide important clues about their feelings and needs,
          especially when verbal communication becomes more limited. Respond to
          these non-verbal signals with empathy.
        </li>
      </ol>
      <p className="text-justify mt-6">
        Adapting communication techniques isn't just about conveying
        information—it’s about maintaining connection, dignity, and quality of
        life for individuals living with dementia. By employing these
        strategies, you can help your loved one feel more understood, respected,
        and secure.
      </p>
    </div>
  );
}

export default DementiaCommunicationStrategies;