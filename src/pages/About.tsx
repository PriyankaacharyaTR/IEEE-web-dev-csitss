import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Globe } from 'lucide-react';

export function About() {
  const timeline = [
    {
      year: '2020',
      title: 'First Virtual Conference',
      description: 'Successfully adapted to global challenges by hosting our first virtual conference.',
    },
    {
      year: '2022',
      title: 'Hybrid Format Introduction',
      description: 'Pioneered a hybrid format combining in-person and virtual attendance.',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Extended our reach to over 50 countries with participants worldwide.',
    },
    {
      year: '2025',
      title: 'Innovation Focus',
      description: 'Introducing cutting-edge tracks on AI, quantum computing, and sustainable tech.',
    },
  ];

  const stats = [
    { icon: Users, value: '2500+', label: 'Annual Participants' },
    { icon: Globe, value: '50+', label: 'Countries Represented' },
    { icon: Calendar, value: '15+', label: 'Years of Excellence' },
    { icon: Award, value: '200+', label: 'Papers Published' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-200">
      {/* Hero Section */}
      <section className="py-20 bg-primary-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About CSITSS
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The International Conference on Computer Science, Information Technology, and Smart
              Systems (CSITSS) is a premier forum for researchers, practitioners, and educators to
              present and discuss the most recent innovations, trends, and concerns in the fields of
              computer science and information technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 dark:bg-primary-900">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start mb-8"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                CSITSS aims to foster collaboration and innovation in computer science and information
                technology. We provide a platform for researchers and practitioners to share their
                latest findings, discuss emerging trends, and build lasting professional relationships.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-primary-50 dark:bg-dark-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Research Excellence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Promoting high-quality research and innovation in computer science and IT.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-dark-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Global Collaboration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Facilitating international cooperation and knowledge exchange.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-dark-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Industry Impact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bridging academic research with practical industry applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}