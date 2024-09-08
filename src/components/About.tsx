import React from "react";


export const About = () => {
    return <div className="flex flex-wrap">
        <div className="static bg-fuchsia-900 text-white items-center p-5 m-5">
                <p>Static parent</p>
            <div className="absolute bottom-10 left-10 bg-cyan-900 text-white">
                <p>Absolute child</p>
            </div>
        </div>
  </div>
}