import React from 'react';
import Section from './Section';
import { HERO_CONTENT } from '../constants';

const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/* Left Column: Text Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-light text-dark-text-secondary">
                        {HERO_CONTENT.greeting}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter my-2 text-dark-text uppercase">
                        {HERO_CONTENT.title}
                    </h1>
                    <div className="w-16 h-1 bg-dark-text my-6 mx-auto md:mx-0"></div>
                    <p className="text-lg text-dark-text-secondary max-w-md mx-auto md:mx-0">
                        {HERO_CONTENT.description}
                    </p>
                    <a href={HERO_CONTENT.button.href} 
                       className="inline-block mt-8 px-8 py-3 font-semibold rounded-md border border-dark-text-secondary text-dark-text-secondary hover:bg-dark-text-secondary hover:text-dark-bg transition-colors duration-300">
                        {HERO_CONTENT.button.text}
                    </a>
                </div>

                {/* Right Column: Image */}
                <div className="relative flex justify-center items-center h-full">
                    <div className="absolute inset-0 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-10 md:hidden"></div>
                     <img
                        src={"me.jpg"}
                        alt="Erick Mwangi"
                        className="w-full max-w-md h-auto object-cover filter grayscale"
                    />
                </div>
            </div>
        </Section>
    );
};

export default Hero;
