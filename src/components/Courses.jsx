import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, BookOpen } from 'lucide-react';

const Courses = () => {
    const categories = ['All', 'Web Dev', 'AI & ML', 'Data Science', 'Cybersecurity'];

    const courses = [
        {
            title: 'Full Stack Web Development',
            category: 'Web Dev',
            duration: '16 Weeks',
            modules: '24 Modules',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        },
        {
            title: 'Machine Learning Advanced',
            category: 'AI & ML',
            duration: '20 Weeks',
            modules: '30 Modules',
            image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80',
        },
        {
            title: 'Data Science & Analytics',
            category: 'Data Science',
            duration: '12 Weeks',
            modules: '18 Modules',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        },
        {
            title: 'Ethical Hacking Boot Camp',
            category: 'Cybersecurity',
            duration: '14 Weeks',
            modules: '22 Modules',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
        },
    ];

    return (
        <section id="courses" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">
                            Programs Offered
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-0">
                            Transform Your Career with <br /> Our Expert-Led Courses
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${idx === 0
                                        ? 'bg-brand-blue text-white'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
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
                            className="bg-slate-800 rounded-3xl overflow-hidden group border border-white/5"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {course.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h4 className="text-xl font-bold text-white mb-4 line-clamp-2">
                                    {course.title}
                                </h4>

                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-brand-orange" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen size={16} className="text-brand-green" />
                                        {course.modules}
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all group/btn">
                                    View Details
                                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-6">Looking for something specific?</p>
                    <button className="text-brand-blue font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                        See All 50+ Programs <ExternalLink size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
