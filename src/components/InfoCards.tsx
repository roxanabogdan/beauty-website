import React from "react";
import botox from '../images/botox.jpg'
import vlad from '../images/vlad.png';
import mihaela from '../images/mihaela.png';
import silueta from '../images/silueta.jpg';
import excizie from '../images/excizie.webp';


const doctors = [
  {
    title: 'Chirurgia corporală',
    image: silueta,
    description: "Intervențiile sunt efectuate în cadrul clinicii Brol dotată cu aparatură modernă, bloc operator la cele mai înalte standarde și saloane în care îngrijirea postoperatorie este asigurată de o linie de gardă 24/24 formată din medici specialiști de chirurgie plastică, cât și medic anestezist. Protezele mamare utilizate sunt gama Mentor și Motiva, lideri pe piață cu un profil de siguranță ridicat și garanție. Bustierele sau burtierele sunt gama Maam și sunt incluse în prețul intervenției. Lipoaspirația laser este făcută cu ajutorul echipamentelor de ultimă generație.",
    doctors: [
      {
        name: "Dr. Bloancă Vlad",
        cvUrl: '/CurriculumVitaeBloancaVlad.docx',
        photoUrl: vlad
      },
      {
        name: "Dr. Bloancă-Prodan Mihaela",
        cvUrl: '/CurriculumVitaeProdanMihaela.docx',
        photoUrl: mihaela
      }
    ]
  },
  {
    title: 'Chirurgia feței',
    image: botox,
    description: "În cadrul consultului inițial se urmărește conceperea planului de tratament personalizat și armonizarea trăsăturilor într-o manieră în care să se obțină rezultate naturale și stabile în timp. Absolvenți atât ai specializării de Chirurgie plastică, estetică și microchirurgie reconstructivă cât și ai cursurilor la cele mai prestigioase academii din Europa, oferim soluții holistice prin combinarea tratamentelor chirurgicale și minim invazive.",
    doctors: [
      {
        name: "Dr. Bloancă-Prodan Mihaela",
        cvUrl: '/CurriculumVitaeProdanMihaela.docx',
        photoUrl: mihaela
      },
      {
        name: "Dr. Bloancă Vlad",
        cvUrl: '/CurriculumVitaeBloancaVlad.docx',
        photoUrl: vlad
      }
    ]
  },
  {
    title: 'Chirurgia pielii și a cancerului de piele',
    image: excizie,
    description: "Chirurg plastician cu studii clinice în domeniul cancerului de piele și multiple publicații în reviste internaționale cu factor de impact în tratamentul melanomului malign. Oferim soluții integrate în diagnosticarea precoce cât și tratamentul multidisciplinar al cancerului de piele.",
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
