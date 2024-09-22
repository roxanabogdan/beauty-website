import React from "react";
import botox from '../images/botox.jpg'
import vlad from '../images/vlad.png';
import mihaela from '../images/mihaela.png';
import silueta from '../images/silueta.jpg';
import excizie from '../images/excizie.webp';


const doctors = [
  {
    title: 'Chirurgia corporala',
    image: silueta,
    description: "Interventiile sunt efectuate in cadrul clinicii Brol dotata cu aparatura moderna, bloc operator la cele mai inalte standarde si saloane in care ingrijirea postoperatorie este asigurata de o linie de garda 24/24 formata din medici specialisti de chirurgie plastica cat si medic anestezist. Protezele mamare utilizate sunt gama Mentor si Motiva , lideri pe piata cu un profil de siguranta ridicat si garantie. Bustierele sau burtierele sunt gama Maam si sunt incluse in pretul interventiei. Lipoaspiratia laser este facuta cu ajutorul echipamentelor de ultima generatie.",
    doctors: [
      {
        name: "Dr. Bloanca Vlad",
        cvUrl: '/CurriculumVitaeBloancaVlad.docx',
        photoUrl: vlad
      },
      {
        name: "Dr. Bloanca-Prodan Mihaela",
        cvUrl: '/CurriculumVitaeProdanMihaela.docx',
        photoUrl: mihaela
      }
    ]
  },
  {
    title: 'Chirurgia fetei',
    image: botox,
    description: "In cadrul consultului initial se urmareste conceperea planului de tratament personalizat si armonizarea trasaturilor intr-o maniera in care sa se obtina rezultate naturale si stabile in timp. Absolventi atat ai specializarii de Chirurgie plastica, estetica si microchirurgie reconstructiva cat si a cursurilor la cele mai prestigioase academii din Europa oferim solutii holistice prin combinarea tratamentelor chirurgicale si minim invazive.",
    doctors: [
      {
        name: "Dr. Bloanca-Prodan Mihaela",
        cvUrl: '/CurriculumVitaeProdanMihaela.docx',
        photoUrl: mihaela
      },
      {
        name: "Dr. Bloanca Vlad",
        cvUrl: '/CurriculumVitaeBloancaVlad.docx',
        photoUrl: vlad
      },
    ]
  },
  {
    title: 'Chirurgia pielii si a cancerului de piele',
    image: excizie,
    description: "Chirurg plastician cu studii clinice in domeniul cancerului de piele si multiple publicatii in reviste internationale cu factor de impact in tratamentul melanomului malign. Oferim solutii integrate in diagnosticarea precoce cat si tratamentul multidisciplinar al cancerului de piele.",
    doctors: [
  
      {
        name: "Dr. Bloanca-Prodan Mihaela",
        cvUrl: '/CurriculumVitaeProdanMihaela.docx',
        photoUrl: mihaela
      }
    ]
  }
];

export const InfoCards = () => {
  return (
    <div className="w-full flex flex-col space-y-6 p-6 lg:p-10">
      {doctors.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Section */}
          <img
            className="h-48 lg:h-auto lg:w-64 object-cover"
            src={item.image}
          />
          {/* Content Section */}
          <div className="flex flex-col justify-between p-6 lg:p-8 leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                🏥 Proceduri
              </p>
              <div className="text-gray-900 font-bold text-xl lg:text-2xl mb-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-sm lg:text-base">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-left justify-between space-y-4 lg:space-y-0">
            {item.doctors.map((doctor) => (
                <div className="flex items-left space-x-4" key={doctor.name}>
                  <img
                    className="w-16 h-16 rounded-full"
                    src={doctor.photoUrl} // Fallback to placeholder image
                    alt={`Avatar of ${doctor.name}`}
                  />
                  <div className="text-sm lg:text-base">
                    <p className="text-gray-900 font-semibold">{doctor.name}</p>
                    <a
                      href={doctor.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline"
                    >
                      View CV
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
