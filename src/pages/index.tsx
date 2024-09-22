
import React from "react"
import { Header } from "../components/Header";
import { StatisticsCard } from '../components/StatisticsCard'
import { Footer } from '../components/Footer';
import { Card } from "../components/Card";
import { ContactCard } from '../components/Contact';
import { Rating } from "../components/Rating";
import { Carousel } from '../components/Carousel';
import bgimage from '../images/minimal-bg.jpg';

const Homopage = () => {
  return <div className="h-full font-merriweather bg-cover bg-center"
  style={{ backgroundImage: `url(${bgimage})` }}
  >
    <Header/>
    <div className="xl:mr-28 xl:ml-28">
      <Carousel/>
      <div className="flex flex-col justify-center pl-10 pr-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-center p-4 md:text-3xl sm:text-xl xs:text-xl">
          Arta frumuseții la un alt nivel!
        </h1>
        <p className="text-lg font-normal text-center text-gray-500 sm:text-ls xs:text-sm animate-slideinleft"> 
            Clinică din Timișoara specializată în chirurgie plastică, estetică și reconstructivă.
        </p>
        <p className="text-sm font-normal text-gray-500 text-center pt-4 sm:text-sm xs:text-xs animate-slideinright">
          În clinică noastră, sunt utilizate doar tehnici si produse de ultimă generație. Procedurile sunt actualizate constant datorită participării active a echipei noastre de medici la cele mai noi conferințe si cursuri. Oferim o gamă variată de servicii chirurgicale plastice si estetice minim invazive cu timp de recuperare cât mai scurt.
        </p>
        <Rating rating={5} totalReviews={45} reviewLink="https://www.google.com/search?sa=X&sca_esv=0d2152f041f38e62&tbm=lcl&sxsrf=ADLYWIK3tYIVIthfo8oFLxH8LsS0Z_fV6g:1725207374553&q=Pure+Aesthetic+Clinic+Recenzii&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTOwMDQxNTI3MjMzMbMwtDQ02MDI-IpRLqC0KFXBMbW4JCO1JDNZwTknMw9IBaUmp-ZVZWYuYiWgAAAuj_v7XAAAAA&rldimm=5608145272664681910&hl=ro-RO&ved=2ahUKEwjNkuWlkqKIAxW7g_0HHdApKToQ9fQKegQINhAF&biw=1860&bih=966&dpr=1#lkt=LocalPoiReviews" />
      </div>
      <div className="gap-5">
        <h2 className="text-2xl font-extrabold tracking-tight text-center p-4 pt-10 sm:text-xl xs:text-lg">
          Proceduri si tratamente efectuate în clinică noastră:
        </h2>
      </div>
    </div>
      <Card/>
      <StatisticsCard/>
      <div className="flex flex-wrap">
        <ContactCard/>
      </div>
    
      <Footer/>
  </div>
}

export default Homopage