import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">
                                Educational Excellence × Tech Innovation
                            </h2>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                                Kongu & GUVI <br />
                                <span className="gradient-text">Partnership</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Empowering Students with Industry-Ready Tech Skills. We combine world-class engineering education
                                with cutting-edge industry training to create the next generation of tech leaders.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
                                    Explore Courses
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                    <Play size={18} fill="white" />
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        {/* Logo Display */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-70"
                        >
                            <div className="h-10 text-white font-bold flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-brand-orange flex items-center justify-center text-xs">KEC</div>
                                <span>Kongu Engineering College</span>
                            </div>
                            <div className="w-px h-8 bg-white/20"></div>
                            <div className="h-10 text-white font-bold flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-brand-green flex items-center justify-center text-xs">G</div>
                                <span>GUVI Partnership</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-1 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-green rounded-3xl rotate-6 opacity-20 blur-xl"></div>
                            <div className="relative z-10 w-full h-full glass-morphism rounded-3xl flex items-center justify-center p-8 overflow-hidden">
                                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
                                    <div className="bg-white/10 rounded-2xl animate-pulse"></div>
                                    <div className="bg-white/5 rounded-2xl"></div>
                                    <div className="bg-white/5 rounded-2xl"></div>
                                    <div className="bg-white/20 rounded-2xl animate-pulse delay-75"></div>
                                </div>
                                <div className="absolute text-center p-4">
                                    <div className="text-5xl font-black text-white mb-2">100%</div>
                                    <div className="text-sm font-semibold text-brand-green tracking-widest uppercase">Placement Driven</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
