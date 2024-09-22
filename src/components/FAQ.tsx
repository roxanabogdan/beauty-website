import React, { useState } from "react";

const faqData = [
    {
      "question": "Ce este injectarea cu toxină botulinică și pentru ce este folosită?",
      "answer": "Injectarea cu toxină botulinică este o procedură estetică minim invazivă care ajută la reducerea ridurilor și liniilor de expresie prin relaxarea temporară a mușchilor faciali. Este utilizată frecvent pentru a trata ridurile de pe frunte, liniile de încruntare și „laba gâștii”."
    },
    {
      "question": "Care este diferența între injectarea de acid hialuronic și toxina botulinică?",
      "answer": "Injectarea de acid hialuronic ajută la umplerea și hidratarea pielii, adăugând volum și reducând aspectul ridurilor. În schimb, toxina botulinică relaxează mușchii pentru a reduce temporar formarea ridurilor dinamice."
    },
    {
      "question": "Ce este un lifting de sâni (mamopexie) și cine este candidatul ideal?",
      "answer": "Mamopexia este o procedură chirurgicală de ridicare a sânilor pentru a îmbunătăți forma și poziția acestora. Candidatul ideal este o femeie care a experimentat lăsarea sânilor din cauza îmbătrânirii, sarcinii sau scăderii în greutate și dorește să recupereze aspectul tineresc al sânilor."
    },
    {
      "question": "Cum funcționează procedura de lipoliză injectabilă?",
      "answer": "Lipoliza injectabilă este o procedură minim invazivă care implică injectarea unei soluții special concepute pentru a dizolva și elimina grăsimea în zone precum abdomenul, bărbia sau coapsele. Este o alternativă non-chirurgicală la liposucție."
    },
    {
      "question": "Ce presupune o intervenție de blefaroplastie și ce probleme rezolvă?",
      "answer": "Blefaroplastia este o intervenție chirurgicală de corecție a pleoapelor căzute. Blefaroplastia superioară corectează pleoapele superioare lăsate, în timp ce blefaroplastia inferioară tratează pungile de sub ochi. Aceasta oferă un aspect mai tânăr și mai odihnit."
    },
    {
      "question": "Ce este o revizie de cicatrice și când este necesară?",
      "answer": "Revizia cicatricilor este o procedură care îmbunătățește aspectul cicatricilor rezultate în urma unor intervenții chirurgicale sau răni. Se recomandă pentru cicatricile care au devenit vizibile, reliefate sau dureroase."
    },
    {
      "question": "Ce sunt firele PDO și cum funcționează?",
      "answer": "Firele PDO sunt utilizate într-o procedură minim invazivă pentru a ridica și întineri pielea fără intervenții chirurgicale majore. Aceste fire sunt absorbabile și stimulează producția de colagen pentru un efect de lifting și întinerire a pielii."
    },
    {
      "question": "Ce presupune o mamoreducție și care sunt beneficiile acestei intervenții?",
      "answer": "Mamoreducția este o procedură de reducere a mărimii sânilor prin îndepărtarea țesutului mamar și a pielii în exces. Aceasta poate îmbunătăți calitatea vieții, ameliorând durerile de spate, gât și umeri, precum și dificultățile de respirație cauzate de sânii mari."
    }
  ]
  
export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md mb-5 bg-gradient-to-tr from-gray-600 items-center to-fuchsia-950">
        <h1 className="text-xl font-bold mb-6 xs:text-md text-white">Întrebări frecvente</h1>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left p-2 flex items-center justify-between bg-gray-100 focus:outline-none"
            >
              <span className="font-semibold text-lg">{item.question}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
