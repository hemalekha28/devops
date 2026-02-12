import React from 'react';
import { motion } from 'framer-motion';
import {
    FileCheck,
    Cpu,
    UserCheck,
    Briefcase,
    Zap,
    Globe
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: 'Industry Certifications',
            description: 'Get certified by global tech giants and validate your skills to employers.',
            icon: FileCheck,
            gradient: 'from-purple-500 to-purple-600',
            glowColor: 'rgba(168, 85, 247, 0.2)',
        },
        {
            title: 'Hands-on Projects',
            description: 'Work on real-world industry projects and build a portfolio that stands out.',
            icon: Cpu,
            gradient: 'from-cyan-500 to-cyan-600',
            glowColor: 'rgba(6, 182, 212, 0.2)',
        },
        {
            title: 'Expert Mentorship',
            description: 'Learn directly from industry veterans and silicon valley experts.',
            icon: UserCheck,
            gradient: 'from-yellow-500 to-yellow-600',
            glowColor: 'rgba(255, 215, 0, 0.2)',
        },
        {
            title: 'Placement Support',
            description: 'Dedicated career guidance and interview prep with 2000+ hiring partners.',
            icon: Briefcase,
            gradient: 'from-rose-500 to-rose-600',
            glowColor: 'rgba(244, 63, 94, 0.2)',
        },
        {
            title: 'Edge Computing Lab',
            description: 'Access to KEC\'s state-of-the-art labs for deep technical exploration.',
            icon: Zap,
            gradient: 'from-orange-500 to-orange-600',
            glowColor: 'rgba(249, 115, 22, 0.2)',
        },
        {
            title: 'Global Community',
            description: 'Join a network of 1M+ learners and tech professionals worldwide.',
            icon: Globe,
            gradient: 'from-emerald-500 to-emerald-600',
            glowColor: 'rgba(16, 185, 129, 0.2)',
        },
    ];

    return (
        <section id="features" className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                        <h2 className="elite-gradient-text font-bold tracking-widest uppercase text-sm">
                            Key Benefits
                        </h2>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Why Choose KEC-GUVI Partnership?
                    </h3>

                    <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-secondary)' }}>
                        We provide all the tools, resources, and guidance you need to transform from a student into a highly-skilled tech professional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="p-8 rounded-3xl group cursor-default transition-all border shadow-xl"
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--border-color)',
                                boxShadow: `0 10px 40px ${feature.glowColor}`
                            }}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                                <feature.icon size={28} className="text-white" />
                            </div>

                            <h4 className="text-xl font-bold mb-3 transition-colors"
                                style={{ color: 'var(--text-primary)' }}>
                                {feature.title}
                            </h4>

                            <p className="leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
