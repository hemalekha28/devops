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
            color: 'bg-blue-500/10 text-blue-500',
        },
        {
            title: 'Hands-on Projects',
            description: 'Work on real-world industry projects and build a portfolio that stands out.',
            icon: Cpu,
            color: 'bg-orange-500/10 text-orange-500',
        },
        {
            title: 'Expert Mentorship',
            description: 'Learn directly from industry veterans and silicon valley experts.',
            icon: UserCheck,
            color: 'bg-green-500/10 text-green-500',
        },
        {
            title: 'Placement Support',
            description: 'Dedicated career guidance and interview prep with 2000+ hiring partners.',
            icon: Briefcase,
            color: 'bg-purple-500/10 text-purple-500',
        },
        {
            title: 'Edge Computing Lab',
            description: 'Access to KEC\'s state-of-the-art labs for deep technical exploration.',
            icon: Zap,
            color: 'bg-yellow-500/10 text-yellow-500',
        },
        {
            title: 'Global Community',
            description: 'Join a network of 1M+ learners and tech professionals worldwide.',
            icon: Globe,
            color: 'bg-teal-500/10 text-teal-500',
        },
    ];

    return (
        <section id="features" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">
                        Key Benefits
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Choose KEC-GUVI Partnership?
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                            whileHover={{ scale: 1.02 }}
                            className="p-8 bg-slate-900 border border-white/5 rounded-3xl group cursor-default transition-all hover:border-brand-blue/30 shadow-xl"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6 ${feature.color}`}>
                                <feature.icon size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                                {feature.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed">
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
