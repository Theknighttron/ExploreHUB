import React from 'react';
import heroImage from '../hero.jpg';

const Hero = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center"
        style={{
          height: '100vh',
        }}
      >
        {/* Background image with reduced opacity */}
        <div
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5, // Adjust if you want to tweak the visibility of the image itself
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Ensure the background is behind the content
          }}
        ></div>

        {/* Adding black overlay with some opacity */}
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust black overlay opacity here
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1, // Same as the image, ensuring it's applied as an overlay
          }}
        ></div>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Explore the Unseen Unforgettable Journeys Await
            <strong className="block font-extrabold">  </strong>
          </h1>

          <p className="mt-4 max-w-lg mx-auto sm:text-xl text-white">
            Welcome to the threshold of adventure where every path leads to a story yet to be lived.
          
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
            >
              Get Started
            </a>

            <a
              href="#"
              className="rounded bg-white px-12 py-3 text-sm font-medium text-orange-500 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
