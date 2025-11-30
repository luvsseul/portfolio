import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >

                    <div className="hero-text">
                        <h2>PORTFOLIO</h2>
                        <p className="subtitle">WEB DESIGNER | <span className="highlight">Han Seulgi</span></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
