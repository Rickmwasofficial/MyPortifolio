import React from 'react';
import Section from './Section';
import { ABOUT_TRAITS, ABOUT_CONTENT } from '../constants';
import type { AboutTrait } from '../types';

const TraitCard: React.FC<{trait: AboutTrait}> = ({ trait }) => {
    const TraitIcon = trait.icon;
    return (
        <div className="bg-dark-card p-6 rounded-lg border border-dark-border flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-dark-text/5 flex items-center justify-center">
                <TraitIcon className="w-6 h-6 text-dark-text-secondary" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-dark-text">{trait.title}</h3>
                <p className="text-dark-text-secondary text-sm">{trait.description}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <Section id="about">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">{ABOUT_CONTENT.title}</h2>
                <p className="text-lg text-dark-text-secondary mt-2">{ABOUT_CONTENT.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                {/* Left Column */}
                <div className="lg:col-span-3 space-y-6 text-lg text-dark-text-secondary">
                    {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <div className="bg-dark-card p-6 rounded-lg border border-dark-border flex items-start space-x-4">
                        <div className="flex-shrink-0 text-2xl">{ABOUT_CONTENT.funFact.emoji}</div>
                        <div>
                            <h3 className="font-bold text-lg text-dark-text">{ABOUT_CONTENT.funFact.title}</h3>
                            <p className="text-dark-text-secondary">{ABOUT_CONTENT.funFact.text}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-6">
                    {ABOUT_TRAITS.map(trait => (
                        <TraitCard key={trait.title} trait={trait} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
