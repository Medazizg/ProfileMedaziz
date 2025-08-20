'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {t('about.journey')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {t('about.description2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description3')}
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                {t('about.skills')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-3xl mb-2 group-hover:animate-bounce">
                      {skill.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-6"
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="glass rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {index === 0 ? t('about.experience') : index === 1 ? t('about.projects') : t('about.satisfaction')}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
