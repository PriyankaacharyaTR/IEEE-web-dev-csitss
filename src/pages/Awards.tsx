import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

type AwardCategory = {
  icon: typeof Award;
  title: string;
  description: string;
  prize: string;
  criteria: string[];
};

const awards: AwardCategory[] = [
  {
    icon: Trophy,
    title: 'Best Paper Award',
    description: 'Recognizing outstanding research contribution and innovation.',
    prize: '$1,000 + Certificate',
    criteria: [
      'Technical excellence and originality',
      'Practical impact and applicability',
      'Quality of presentation',
      'Theoretical foundation',
    ],
  },
  {
    icon: Star,
    title: 'Young Researcher Award',
    description: 'Celebrating exceptional research by early-career scientists.',
    prize: '$750 + Certificate',
    criteria: [
      'Researcher under 35 years old',
      'Innovation in approach',
      'Future research potential',
      'Publication record',
    ],
  },
  {
    icon: Medal,
    title: 'Industry Impact Award',
    description: 'Honoring research with significant industrial applications.',
    prize: '$500 + Certificate',
    criteria: [
      'Commercial viability',
      'Industry collaboration',
      'Practical implementation',
      'Market potential',
    ],
  },
];

export function Awards() {
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
              Conference Awards
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Recognizing excellence and innovation in computer science and information technology
              research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-dark-100 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-600/0 to-primary-600/10 dark:from-primary-400/0 dark:to-primary-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8">
                  <div className="mb-6">
                    <award.icon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {award.description}
                  </p>
                  <div className="bg-primary-50 dark:bg-dark-200 rounded-lg p-4 mb-6">
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      Prize: {award.prize}
                    </p>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Evaluation Criteria
                  </h4>
                  <ul className="space-y-2">
                    {award.criteria.map((criterion, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                        {criterion}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Past Award Winners
          </h2>
          <div className="max-w-4xl mx-auto">
            {[2024, 2023, 2022].map((year) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  CSITSS {year}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Best Paper Award
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      Dr. Sarah Johnson
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      "Advanced Neural Networks for Quantum Computing Applications"
                    </p>
                  </div>
                  <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Young Researcher Award
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      Dr. Michael Chen
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      "Novel Approaches to Edge Computing Security"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nomination Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Award Nomination Process
            </h2>
            <div className="bg-white dark:bg-dark-100 rounded-lg shadow-lg p-8">
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 mb-8">
                  <li>All accepted papers are automatically considered for the Best Paper Award</li>
                  <li>Young Researcher Award requires separate nomination</li>
                  <li>Industry Impact Award needs demonstration of practical applications</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Timeline</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300 mb-8">
                  <li>Nominations open: August 1, 2025</li>
                  <li>Submission deadline: September 15, 2025</li>
                  <li>Winners announced: November 21, 2025 (During conference)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Selection Process</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Awards are selected by a distinguished committee of international experts through
                  a rigorous evaluation process. The committee considers the originality,
                  significance, and potential impact of the research work.
                </p>

                <div className="flex justify-center">
                  <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors">
                    <Trophy className="w-5 h-5 mr-2" />
                    Submit Nomination
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}