import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Priyanka Sharma',
            role: 'Full Stack Developer at Amazon',
            text: 'The partnership allowed me to access GUVI\'s intense training while staying at KEC. The transition from college to a high-paying tech role was seamless.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            gradient: 'from-purple-500 to-purple-600',
        },
        {
            name: 'Arun Kumar',
            role: 'Data Scientist at Microsoft',
            text: 'Hands-on projects and the quality of mentorship were game-changers for me. I applied concepts in real labs which made all the difference.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            gradient: 'from-cyan-500 to-cyan-600',
        },
        {
            name: 'Divya R.',
            role: 'SDE at Google',
            text: 'GUVI\'s learning path is incredibly well-structured. Combined with KEC\'s academic support, it\'s the best ecosystem for budding engineers.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
            gradient: 'from-yellow-500 to-yellow-600',
        },
    ];

    return (
        <section id="testimonials" className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                        <h2 className="elite-gradient-text font-bold tracking-widest uppercase text-sm">
                            Success Stories
                        </h2>
                    </div>

                    <h3 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Hear From Our Alumni
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl relative border transition-all"
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <Quote className="absolute top-8 right-8 opacity-5" size={60} style={{ color: 'var(--text-primary)' }} />

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-full overflow-hidden ring-2 ring-offset-2 bg-gradient-to-br ${t.gradient}`}
                                    style={{ ringOffsetColor: 'var(--bg-card)' }}>
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>{t.name}</h4>
                                    <p className={`text-sm bg-gradient-to-r ${t.gradient} bg-clip-text text-transparent font-semibold`}>
                                        {t.role}
                                    </p>
                                </div>
                            </div>

                            <p className="leading-relaxed italic" style={{ color: 'var(--text-secondary)' }}>
                                "{t.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
