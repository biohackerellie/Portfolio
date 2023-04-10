import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Type from './Type';
import{ slideIn } from '../utils/motion'




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto justify-center`} >
			<div 
			className={`${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-row items-center gap-5`}
			>
				<motion.div

				animate={{ y: 0 }}
				transition={{ from: 6000, duration: 6 }}
				className= "flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#F5A9B8]" />
					<div className="w-1 sm:h-80 h-40 pink-gradient" />
				</motion.div>
				<motion.div
					animate={{ x: 0 }}
					transition={{ from: 3000, duration: 6}}
				>
					<h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className="text-[#5BCEFA]">Ellie
					</span></h1>
					<p className={`${styles.heroSubText} mt-2 text-white`} >
					<Type />
					</p>

				</motion.div>				
			</div>
			
			
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p02">
						<motion.dev 
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>

			</div>
		</section>
  )
}

export default Hero