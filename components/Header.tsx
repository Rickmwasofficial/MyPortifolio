import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_TEXT } from '../constants';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const NavLinks: React.FC<{onLinkClick?: () => void, isMobile?: boolean}> = ({ onLinkClick, isMobile }) => (
        <>
            {NAV_LINKS.map(link => {
                const isExternal = link.href.startsWith('http');
                const isActive = activeSection === link.href.substring(1);

                return (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={onLinkClick}
                        target={isExternal ? '_blank' : '_self'}
                        rel={isExternal ? 'noopener noreferrer' : ''}
                        className={`font-medium transition-colors duration-300 relative ${
                            isMobile 
                            ? 'text-4xl py-4 text-dark-text-secondary hover:text-dark-text' 
                            : `text-sm ${isActive ? 'text-dark-text' : 'text-dark-text-secondary hover:text-dark-text'}`
                        }`}
                    >
                        {link.name}
                        {isActive && !isMobile && !isExternal && (
                            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-dark-text"></span>
                        )}
                    </a>
                )
            })}
        </>
    );

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 border-b border-dark-border/50 backdrop-blur-sm' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <a href="#home" className="text-xl font-bold tracking-tight text-dark-text">
                            {LOGO_TEXT}
                        </a>

                        <div className="hidden md:flex items-center space-x-8">
                            <NavLinks />
                        </div>
                        
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-dark-text relative z-50" aria-label="Toggle menu">
                                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
            
            <div 
                className={`md:hidden fixed inset-0 bg-dark-bg z-40 transform transition-opacity duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
                }
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <NavLinks onLinkClick={() => setIsMenuOpen(false)} isMobile />
                </div>
            </div>
        </>
    );
};

export default Header;
