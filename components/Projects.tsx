import React from 'react';
import { PROJECTS, PROJECTS_CONTENT } from '../constants';
import type { Project } from '../types';
import Section from './Section';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-dark-card rounded-xl overflow-hidden border border-dark-border transition-all duration-300 flex flex-col h-full group">
            <div className="relative">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover aspect-video transition-transform duration-300 group-hover:scale-105" />
                 <div className="absolute top-0 right-0 p-4 text-xs font-semibold uppercase tracking-wider text-dark-text-secondary">
                    {project.status}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-dark-text">{project.name}</h3>
                <p className="text-dark-text-secondary mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-dark-text-secondary">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {project.tech.map(t => {
                            const TechIcon = t.icon;
                            return (
                                <div key={t.name} className="flex items-center gap-1.5 text-xs text-dark-text-secondary">
                                    <TechIcon className="w-4 h-4" />
                                    <span>{t.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-dark-border">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 font-semibold rounded-md bg-dark-card border border-dark-text-secondary text-dark-text-secondary hover:bg-dark-text-secondary hover:text-dark-bg transition-colors">
                            <GitHubIcon className="w-4 h-4" /> Code
                        </a>
                    )}
                    {project.demo && (
                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 font-semibold rounded-md bg-dark-text-secondary text-dark-bg hover:opacity-80 transition-opacity">
                            <ExternalLinkIcon className="w-4 h-4" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <Section id="projects" className="bg-dark-bg">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">{PROJECTS_CONTENT.title}</h2>
                <p className="text-lg text-dark-text-secondary mt-2">{PROJECTS_CONTENT.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map(p => (
                    <ProjectCard key={p.name} project={p} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
