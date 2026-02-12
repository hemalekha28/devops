import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, BookOpen, Star } from 'lucide-react';

const Courses = () => {
    const categories = ['All', 'Web Dev', 'AI & ML', 'Data Science', 'Cybersecurity'];

    const courses = [
        {
            title: 'Full Stack Web Development',
            category: 'Web Dev',
            duration: '16 Weeks',
            modules: '24 Modules',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
            gradient: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Machine Learning Advanced',
            category: 'AI & ML',
            duration: '20 Weeks',
            modules: '30 Modules',
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80',
            gradient: 'from-cyan-500 to-cyan-600',
        },
        {
            title: 'Data Science & Analytics',
            category: 'Data Science',
            duration: '12 Weeks',
            modules: '18 Modules',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
            gradient: 'from-yellow-500 to-yellow-600',
        },
        {
            title: 'Ethical Hacking Boot Camp',
            category: 'Cybersecurity',
            duration: '14 Weeks',
            modules: '22 Modules',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
            gradient: 'from-rose-500 to-rose-600',
        },
    ];

    return (
        <section id="courses" className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
                            <h2 className="elite-gradient-text font-bold tracking-widest uppercase text-sm">
                                Programs Offered
                            </h2>
                        </div>

                        <h3 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                            Transform Your Career with <br /> Our Expert-Led Courses
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${idx === 0
                                        ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'border hover:scale-105'
                                    }`}
                                style={idx !== 0 ? {
                                    borderColor: 'var(--border-color)',
                                    backgroundColor: 'var(--bg-card)',
                                    color: 'var(--text-secondary)'
                                } : {}}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl overflow-hidden group border"
                            style={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                                    {course.category}
                                </div>
                                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-white text-xs font-semibold">4.8</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-4 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                                    {course.title}
                                </h4>

                                <div className="flex items-center gap-4 text-sm mb-6" style={{ color: 'var(--text-tertiary)' }}>
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-purple-500" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen size={16} className="text-cyan-500" />
                                        {course.modules}
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all group/btn border hover:scale-105"
                                    style={{
                                        borderColor: 'var(--border-color)',
                                        backgroundColor: 'var(--bg-secondary)',
                                        color: 'var(--text-primary)'
                                    }}>
                                    View Details
                                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-purple-500" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="mb-6" style={{ color: 'var(--text-tertiary)' }}>Looking for something specific?</p>
                    <button className="elite-gradient-text font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                        See All 50+ Programs <ExternalLink size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
