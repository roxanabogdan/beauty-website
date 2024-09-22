import React from "react";
import { FAQ } from "../../components/FAQ";
import bgimage from '../../images/minimal-bg.jpg';
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { InfoCards } from "../../components/InfoCards";

const About = () => {
    return <div
        className="min-h-screen font-merriweather  bg-cover bg-center "
        style={{ backgroundImage: `url(${bgimage})` }}
    >   
        <Header wLogo={true}/>
        <InfoCards/>
        <div className="px-5">
        <FAQ/>
        </div>
     
        <Footer/>
    </div>
}

export default About;