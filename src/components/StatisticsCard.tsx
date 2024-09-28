import React, { useEffect, useState, useRef } from "react";
import miminalbg from '../images/minimal-bg.jpg'

export const StatisticsCard = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [proceduresCount, setProceduresCount] = useState(0);

  const statsRef = useRef(null);

  useEffect(() => {
    const experienceTarget = 15;
    const patientsTarget = 1000;
    const doctorsTarget = 2;
    const proceduresTarget = 10000;

    const incrementCounter = (current, target, setter) => {
      if (current < target) {
        const increment = Math.ceil(target / 100); // Adjust increment speed
        setter(current + increment);
        setTimeout(() => incrementCounter(current + increment, target, setter), 30);
      } else {
        setter(target);
      }
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        incrementCounter(experienceCount, experienceTarget, setExperienceCount);
        incrementCounter(patientsCount, patientsTarget, setPatientsCount);
        incrementCounter(doctorsCount, doctorsTarget, setDoctorsCount);
        incrementCounter(proceduresCount, proceduresTarget, setProceduresCount);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the component is in view
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (observer && statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [experienceCount, patientsCount, doctorsCount, proceduresCount]);

  return (
    <div ref={statsRef} className="border bg-cover border-gray-200 rounded-lg shadow m-20 sm:m-20 xs:m-4"
    style={{ backgroundImage: `url(${miminalbg})` }}
    >
      <div className="p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <dl className="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-4 sm:p-8">
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{experienceCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center">Ani de experiență</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{patientsCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center">Pacienți mulțumiți</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{doctorsCount}</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center">Medici cu experiență</dd>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <dt className="mb-2 text-2xl sm:text-3xl font-extrabold">{proceduresCount}+</dt>
            <dd className="text-sm sm:text-base text-gray-500 text-center">Proceduri efectuate</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
