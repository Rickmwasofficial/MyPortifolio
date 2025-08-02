import React from 'react';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import { CONTACT_CONTENT, SOCIAL_LINKS } from '../constants';
import { PiWhatsappLogoDuotone } from 'react-icons/pi';

const Contact = () => {
    const { title, subtitle, form, direct, online } = CONTACT_CONTENT;
    const DirectIcon = direct.icon;

    return (
        <Section id="contact">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
                <p className="text-lg text-dark-text-secondary mt-2">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Form */}
                <div className="lg:col-span-3 bg-dark-card p-8 rounded-xl border border-dark-border">
                    <form action={form.formspreeEndpoint} method="POST" className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary mb-1">{form.name.label}</label>
                                <input type="text" name="name" id="name" placeholder={form.name.placeholder} required className="w-full px-4 py-2.5 rounded-md bg-dark-bg border border-dark-border focus:ring-2 focus:ring-dark-text-secondary focus:border-dark-text-secondary transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary mb-1">{form.email.label}</label>
                                <input type="email" name="email" id="email" placeholder={form.email.placeholder} required className="w-full px-4 py-2.5 rounded-md bg-dark-bg border border-dark-border focus:ring-2 focus:ring-dark-text-secondary focus:border-dark-text-secondary transition" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-dark-text-secondary mb-1">{form.subject.label}</label>
                            <input type="text" name="subject" id="subject" placeholder={form.subject.placeholder} required className="w-full px-4 py-2.5 rounded-md bg-dark-bg border border-dark-border focus:ring-2 focus:ring-dark-text-secondary focus:border-dark-text-secondary transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary mb-1">{form.message.label}</label>
                            <textarea name="message" id="message" rows={5} placeholder={form.message.placeholder} required className="w-full px-4 py-2.5 rounded-md bg-dark-bg border border-dark-border focus:ring-2 focus:ring-dark-text-secondary focus:border-dark-text-secondary transition"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 font-semibold rounded-md bg-dark-text text-dark-bg hover:opacity-90 transition-opacity">
                                {form.button}
                            </button>
                        </div>
                    </form>
                </div>
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                     <div className="bg-dark-card p-8 rounded-xl border border-dark-border">
                         <h3 className="text-xl font-bold mb-4 flex items-center gap-3"><DirectIcon className="w-6 h-6 text-dark-text-secondary"/> {direct.title}</h3>
                         <a href={`mailto:${direct.email}`} className="text-dark-text-secondary hover:text-dark-text transition-colors break-all">{direct.email}</a>
                         <p className="mt-4 text-sm text-dark-text-secondary border-t border-dark-border pt-4 italic">{direct.afterthought}</p>
                     </div>
                     <div className="bg-dark-card p-8 rounded-xl border border-dark-border">
                         <h3 className="text-xl font-bold mb-4">{online.title}</h3>
                         <div className="flex items-center space-x-6">
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                                <GitHubIcon className="w-7 h-7" />
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                                <LinkedInIcon className="w-7 h-7" />
                            </a>
                            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                                <TwitterIcon className="w-7 h-7" />
                            </a>
                            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-dark-text-secondary hover:text-dark-text transition-colors">
                                <PiWhatsappLogoDuotone size={30} />
                            </a>
                         </div>
                     </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
