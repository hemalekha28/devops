import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="font-extrabold text-3xl tracking-tighter flex items-center mb-6">
                            <span className="text-brand-blue">KEC</span>
                            <span className="text-white mx-1">×</span>
                            <span className="text-brand-green">GUVI</span>
                        </div>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Leading the future of technical education through industry-led innovation and academic excellence.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Courses', 'Testimonials', 'Placement Partners', 'Student Portal'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - KEC */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Kongu Engineering College</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin className="text-brand-orange shrink-0" size={18} />
                                <span>Perundurai, Erode - 638060, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone className="text-brand-orange shrink-0" size={18} />
                                <span>+91 4294 226555</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail className="text-brand-orange shrink-0" size={18} />
                                <span>kec@kongu.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - GUVI */}
                    <div>
                        <h4 className="text-white font-bold mb-6">GUVI Geeks Network</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <MapPin className="text-brand-green shrink-0" size={18} />
                                <span>IIT-M Research Park, Chennai, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Phone className="text-brand-green shrink-0" size={18} />
                                <span>+91 97316 11772</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500">
                                <Mail className="text-brand-green shrink-0" size={18} />
                                <span>info@guvi.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} KEC × GUVI Partnership. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
