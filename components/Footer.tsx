import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import { FOOTER_CONTENT, SOCIAL_LINKS } from '../constants';
import { PiWhatsappLogoDuotone } from 'react-icons/pi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-card/30 border-t border-dark-border">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4">
                     <p className="text-sm text-dark-text-secondary">
                        &copy; {currentYear} {FOOTER_CONTENT.copyright}
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
                         <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                             <span className="sr-only">GitHub</span>
                             <GitHubIcon className="h-5 w-5" />
                         </a>
                         <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                             <span className="sr-only">LinkedIn</span>
                             <LinkedInIcon className="h-5 w-5" />
                         </a>
                         <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                            <span className="sr-only">Twitter</span>
                            <TwitterIcon className="h-5 w-5" />
                         </a>
                         <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                             <span className="sr-only">WhatsApp</span>
                             <PiWhatsappLogoDuotone size={28} />
                         </a>
                         <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-dark-text-secondary hover:text-dark-text transition-colors">
                             <span className="sr-only">Email</span>
                             <MailIcon className="h-5 w-5" />
                         </a>
                     </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
