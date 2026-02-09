import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Students Enrolled', value: '500+', icon: Users, color: 'text-blue-500' },
        { label: 'Industry Courses', value: '20+', icon: Target, color: 'text-orange-500' },
        { label: 'Expert Mentors', value: '50+', icon: Award, color: 'text-green-500' },
        { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'text-purple-500' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">
                            About the Collaboration
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Bridging the Gap Between <br />
                            <span className="text-gray-400">Classroom & Industry</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            The partnership between Kongu Engineering College and GUVI is a strategic initiative
                            aimed at revolutionizing technical education. By integrating industry-validated curricula
                            with KEC's academic excellence, we ensure that students are not just degree holders,
                            but workplace-ready professionals.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-brand-blue/20 p-2 rounded-lg text-brand-blue">
                                    <Target size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Our Mission</h4>
                                    <p className="text-gray-500">To democratize technology education and provide equal learning opportunities for all.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-brand-green/20 p-2 rounded-lg text-brand-green">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Strategic Goal</h4>
                                    <p className="text-gray-500">Achieving 100% employability through skill-based training and real-world projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-slate-800/50 border border-white/5 rounded-3xl text-center"
                                >
                                    <div className={`inline-flex p-3 rounded-2xl bg-white/5 mb-4 ${stat.color}`}>
                                        <stat.icon size={28} />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
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
