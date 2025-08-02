import React from 'react';
import { LEADERSHIP } from '../constants';
import type { LeadershipItem } from '../types';
import Section from './Section';

const LeadershipCard: React.FC<{ item: LeadershipItem }> = ({ item }) => (
    <div className="bg-dark-card p-6 rounded-lg border border-dark-border transition-colors duration-300">
        <h3 className="text-lg font-bold text-dark-text">{item.title}</h3>
        <p className="text-md font-semibold text-dark-text-secondary mb-2">{item.role}</p>
        <p className="text-dark-text-secondary">{item.description}</p>
    </div>
);

const Leadership = () => {
    return (
        <Section id="clubs">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Leadership & Club Involvement</h2>
                <p className="text-lg text-dark-text-secondary mt-2">Taking initiative and building communities.</p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {LEADERSHIP.map(item => (
                    <LeadershipCard key={item.title} item={item} />
                ))}
            </div>
        </Section>
    );
};

export default Leadership;