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
        },
        {
            name: 'Arun Kumar',
            role: 'Data Scientist at Microsoft',
            text: 'Hands-on projects and the quality of mentorship were game-changers for me. I applied concepts in real labs which made all the difference.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        },
        {
            name: 'Divya R.',
            role: 'SDE at Google',
            text: 'GUVI\'s learning path is incredibly well-structured. Combined with KEC\'s academic support, it\'s the best ecosystem for budding engineers.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">
                        Success Stories
                    </h2>
                    <h3 className="text-4xl font-bold text-white mb-6">
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
                            className="p-8 bg-slate-900 border border-white/5 rounded-3xl relative"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5" size={60} />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/30"
                                />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-brand-green text-sm">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed italic">
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
