import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Students Enrolled', value: '500+', icon: Users, color: 'from-purple-500 to-purple-600' },
        { label: 'Industry Courses', value: '20+', icon: Target, color: 'from-cyan-500 to-cyan-600' },
        { label: 'Expert Mentors', value: '50+', icon: Award, color: 'from-yellow-500 to-yellow-600' },
        { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'from-rose-500 to-rose-600' },
    ];

    return (
        <section id="about" className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                            <h2 className="elite-gradient-text font-bold tracking-widest uppercase text-sm">
                                About the Collaboration
                            </h2>
                        </div>

                        <h3 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            Bridging the Gap Between <br />
                            <span style={{ color: 'var(--text-secondary)' }}>Classroom & Industry</span>
                        </h3>

                        <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            The partnership between Kongu Engineering College and GUVI is a strategic initiative
                            aimed at revolutionizing technical education. By integrating industry-validated curricula
                            with KEC's academic excellence, we ensure that students are not just degree holders,
                            but workplace-ready professionals.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border"
                                    style={{ borderColor: 'var(--border-color)' }}>
                                    <Target size={20} className="text-purple-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Our Mission</h4>
                                    <p style={{ color: 'var(--text-tertiary)' }}>To democratize technology education and provide equal learning opportunities for all.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border"
                                    style={{ borderColor: 'var(--border-color)' }}>
                                    <TrendingUp size={20} className="text-cyan-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Strategic Goal</h4>
                                    <p style={{ color: 'var(--text-tertiary)' }}>Achieving 100% employability through skill-based training and real-world projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="p-8 rounded-3xl text-center border glow-purple transition-all"
                                    style={{
                                        backgroundColor: 'var(--bg-card)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
                                        <stat.icon size={28} className="text-white" />
                                    </div>
                                    <div className="text-3xl font-bold mb-1 elite-gradient-text">{stat.value}</div>
                                    <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
