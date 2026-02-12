import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Premium Black Background with Elite Accents */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                {/* Animated gradient orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] -mr-64 -mt-64 opacity-30"
                    style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] -ml-64 -mb-64 opacity-20"
                    style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-10"
                    style={{ background: 'radial-gradient(circle, #ffd700, transparent)' }}></div>

                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}>
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
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                <Sparkles className="text-yellow-400" size={20} />
                                <h2 className="elite-gradient-text font-bold tracking-widest uppercase text-sm">
                                    Educational Excellence × Tech Innovation
                                </h2>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                                style={{ color: 'var(--text-primary)' }}>
                                Kongu & GUVI <br />
                                <span className="elite-gradient-text">Partnership</span>
                            </h1>

                            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}>
                                Empowering Students with Industry-Ready Tech Skills. We combine world-class engineering education
                                with cutting-edge industry training to create the next generation of tech leaders.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-purple-500/30">
                                    Explore Courses
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                                <button className="w-full sm:w-auto border-2 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
                                    style={{
                                        borderColor: 'var(--border-color)',
                                        backgroundColor: 'var(--bg-card)',
                                        color: 'var(--text-primary)'
                                    }}>
                                    <Play size={18} className="text-purple-500" />
                                    Learn More
                                </button>
                            </div>
                        </motion.div>

                        {/* Logo Display */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-16 flex items-center justify-center lg:justify-start gap-8 opacity-60"
                        >
                            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xs text-white font-bold shadow-lg">KEC</div>
                                <span className="font-semibold text-sm">Kongu Engineering College</span>
                            </div>
                            <div className="w-px h-8" style={{ backgroundColor: 'var(--border-color)' }}></div>
                            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                                <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs text-white font-bold shadow-lg">G</div>
                                <span className="font-semibold text-sm">GUVI Partnership</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Element - Premium Card */}
                    <div className="flex-1 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-cyan-500/20 to-yellow-500/20 rounded-3xl rotate-6 blur-2xl"></div>

                            {/* Main card */}
                            <div className="relative z-10 w-full h-full glass-morphism rounded-3xl flex items-center justify-center p-8 overflow-hidden border-glow">
                                {/* Animated grid inside */}
                                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-30">
                                    <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl animate-pulse"></div>
                                    <div className="bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl"></div>
                                    <div className="bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl"></div>
                                    <div className="bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl animate-pulse delay-75"></div>
                                </div>

                                {/* Center content */}
                                <div className="absolute text-center p-4">
                                    <div className="text-6xl font-black mb-2 elite-gradient-text">100%</div>
                                    <div className="text-sm font-semibold tracking-widest uppercase text-purple-400">Placement Driven</div>
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
