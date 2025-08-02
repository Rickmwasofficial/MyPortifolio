import React from 'react';
import { SKILLS, SKILLS_CONTENT } from '../constants';
import Section from './Section';

const Skills = () => {
    return (
        <Section id="skills" className="bg-dark-card/30">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">{SKILLS_CONTENT.title}</h2>
                 <p className="text-lg text-dark-text-secondary mt-2">{SKILLS_CONTENT.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILLS.map(category => (
                    <div key={category.title} className="bg-dark-card p-6 rounded-xl border border-dark-border">
                        <h3 className="text-lg font-bold mb-4 text-dark-text">{category.title}</h3>
                        <ul className="space-y-3">
                            {category.skills.map(skill => {
                                const SkillIcon = skill.icon;
                                return (
                                    <li key={skill.name} className="flex items-center gap-3">
                                        <SkillIcon className="w-5 h-5 text-dark-text-secondary" />
                                        <span className="font-medium text-dark-text-secondary">{skill.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
