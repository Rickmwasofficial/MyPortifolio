import React from 'react';
import { EXPERIENCE } from '../constants';
import Section from './Section';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
                <p className="text-lg text-dark-text-secondary mt-2">Where I've applied my skills.</p>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-dark-border">
                    {EXPERIENCE.map((item, index) => (
                        <div key={item.role} className="relative pl-10 pb-12 last:pb-0">
                            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-dark-bg rounded-full border-2 border-dark-text-secondary"></div>
                            <h3 className="text-xl font-bold text-dark-text">{item.role}</h3>
                            <p className="font-semibold text-dark-text-secondary mb-1">{item.company}</p>
                            <p className="text-dark-text-secondary">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;