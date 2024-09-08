import React, { useEffect, useState, useRef } from "react";

export const StatisticsCard = () => {
  // States to handle counting for each statistic
  const [experienceCount, setExperienceCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [proceduresCount, setProceduresCount] = useState(0);

  // Ref to the statistics card container
  const statsRef = useRef(null);

  useEffect(() => {
    const experienceTarget = 7;
    const patientsTarget = 50;
    const doctorsTarget = 2;
    const proceduresTarget = 40;

    // Function to simulate counting animation
    const incrementCounter = (current, target, setter) => {
      if (current < target) {
        const increment = Math.ceil(target / 100); // Adjust increment speed
        setter(current + increment);
        setTimeout(() => incrementCounter(current + increment, target, setter), 30);
      } else {
        setter(target);
      }
    };

    // Callback for intersection observer
    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        // Start the counting animation when the card comes into view
        incrementCounter(experienceCount, experienceTarget, setExperienceCount);
        incrementCounter(patientsCount, patientsTarget, setPatientsCount);
        incrementCounter(doctorsCount, doctorsTarget, setDoctorsCount);
        incrementCounter(proceduresCount, proceduresTarget, setProceduresCount);
      }
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the component is in view
    });

    // Observe the stats container
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (observer && statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [experienceCount, patientsCount, doctorsCount, proceduresCount]);

  return (
    <div ref={statsRef} className="border border-gray-200 rounded-lg shadow m-10">
      <div className="p-4 rounded-lg md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <dl className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-4 sm:p-8">
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{experienceCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center dark:text-gray-400">Ani de experiență</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{patientsCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center dark:text-gray-400">Pacienți mulțumiți</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{doctorsCount}</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center dark:text-gray-400">Medici cu experiență</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{proceduresCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center dark:text-gray-400">Proceduri efectuate</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
