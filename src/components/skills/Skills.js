import React from 'react'
import { motion } from 'framer-motion';
import Title from '../layouts/Title'

const Skills = () => {
    return (
        <section id="skills"><div className="text-center pt-15" >
            <Title title="WHAT CLIENTS SAY" des="Skills" />
        </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
            >

                <div className="w-full lgl:w-1/2">

                    <div className="py-1  font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Other Skill</h2>
                    </div>
                    <div className='className="mt-14 w-full flex flex-col gap-6'>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Team Work</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">70%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Photography</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[80%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">80%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">LeaderShip</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[79%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">79%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Public Speeking</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">70%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Self Motivation</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[88%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">88%</span>
                                </motion.span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lgl:w-1/2">
                    <div className="py-1 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Java</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[60%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">60%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">HTML 5</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">70%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">CSS3</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[65%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">65%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[55%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">55%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Kotlin</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[80%] h-full bg-gradient-to-r from-slate-800 via- to-violet-400 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">80%</span>
                                </motion.span>
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Skills