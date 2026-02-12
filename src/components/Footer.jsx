import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 border-t"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
            }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="font-extrabold text-3xl tracking-tighter flex items-center mb-6">
                            <span className="elite-gradient-text">KEC × GUVI</span>
                        </div>
                        <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                            Leading the future of technical education through industry-led innovation and academic excellence.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, gradient: 'from-blue-500 to-blue-600' },
                                { Icon: Twitter, gradient: 'from-cyan-500 to-cyan-600' },
                                { Icon: Linkedin, gradient: 'from-purple-500 to-purple-600' },
                                { Icon: Instagram, gradient: 'from-pink-500 to-rose-600' }
                            ].map(({ Icon, gradient }, i) => (
                                <a key={i} href="#"
                                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg`}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Courses', 'Testimonials', 'Placement Partners', 'Student Portal'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="transition-colors hover:elite-gradient-text"
                                        style={{ color: 'var(--text-tertiary)' }}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - KEC */}
                    <div>
                        <h4 className="font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Kongu Engineering College</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <MapPin className="text-orange-500 shrink-0" size={18} />
                                <span>Perundurai, Erode - 638060, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <Phone className="text-orange-500 shrink-0" size={18} />
                                <span>+91 4294 226555</span>
                            </li>
                            <li className="flex items-center gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <Mail className="text-orange-500 shrink-0" size={18} />
                                <span>kec@kongu.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact - GUVI */}
                    <div>
                        <h4 className="font-bold mb-6" style={{ color: 'var(--text-primary)' }}>GUVI Geeks Network</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <MapPin className="text-green-500 shrink-0" size={18} />
                                <span>IIT-M Research Park, Chennai, Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <Phone className="text-green-500 shrink-0" size={18} />
                                <span>+91 97316 11772</span>
                            </li>
                            <li className="flex items-center gap-3" style={{ color: 'var(--text-tertiary)' }}>
                                <Mail className="text-green-500 shrink-0" size={18} />
                                <span>info@guvi.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-tertiary)' }}>
                    <p>© {new Date().getFullYear()} KEC × GUVI Partnership. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:elite-gradient-text transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:elite-gradient-text transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
