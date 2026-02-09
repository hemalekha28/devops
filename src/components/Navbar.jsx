import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Courses', href: '#courses' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="font-extrabold text-2xl tracking-tighter flex items-center gap-3">
                        <div className="flex items-center">
                            <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center text-white text-[10px] mr-2 shadow-lg shadow-brand-blue/30 border border-white/10">KEC</div>
                            <span className="text-white hidden sm:inline">KONGU</span>
                        </div>
                        <span className="text-slate-700 font-thin">|</span>
                        <div className="flex items-center">
                            <div className="w-9 h-9 bg-brand-green rounded-xl flex items-center justify-center text-white text-[10px] mr-2 shadow-lg shadow-brand-green/30 border border-white/10">GUVI</div>
                            <span className="text-white hidden sm:inline">GUVI</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 active:scale-95">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900 absolute top-full left-0 w-full p-6 shadow-2xl border-t border-white/10 animate-fade-in">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-semibold w-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
