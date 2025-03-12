import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Shield, Brain, Cloud, Database, Smartphone, Globe } from 'lucide-react';

type Track = {
  icon: typeof Cpu;
  title: string;
  description: string;
  topics: string[];
  chairs: {
    name: string;
    affiliation: string;
  }[];
};

const tracks: Track[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence and Machine Learning',
    description: 'Exploring the latest advances in AI, deep learning, and their applications.',
    topics: [
      'Deep Learning Architectures',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
      'AI Ethics and Fairness',
    ],
    chairs: [
      { name: 'Dr. Sarah Chen', affiliation: 'Stanford University' },
      { name: 'Prof. Michael Wong', affiliation: 'MIT' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Computing and Distributed Systems',
    description: 'Advanced research in cloud infrastructure, services, and distributed computing.',
    topics: [
      'Cloud Architecture',
      'Distributed Systems',
      'Serverless Computing',
      'Edge Computing',
      'Cloud Security',
    ],
    chairs: [
      { name: 'Dr. James Wilson', affiliation: 'Google Research' },
      { name: 'Prof. Elena Rodriguez', affiliation: 'ETH Zurich' },
    ],
  },
  {
    icon: Shield,
    title: 'Cybersecurity and Privacy',
    description: 'Cutting-edge research in security, privacy, and trust in digital systems.',
    topics: [
      'Network Security',
      'Cryptography',
      'Privacy-Preserving Computing',
      'Blockchain',
      'Security Protocols',
    ],
    chairs: [
      { name: 'Prof. David Kim', affiliation: 'Berkeley' },
      { name: 'Dr. Lisa Chen', affiliation: 'IBM Research' },
    ],
  },
  {
    icon: Network,
    title: 'Internet of Things and Smart Systems',
    description: 'Innovation in connected devices, smart environments, and IoT applications.',
    topics: [
      'IoT Architectures',
      'Sensor Networks',
      'Smart Cities',
      'Industrial IoT',
      'IoT Security',
    ],
    chairs: [
      { name: 'Dr. Robert Brown', affiliation: 'Microsoft Research' },
      { name: 'Prof. Anna Wang', affiliation: 'TU Munich' },
    ],
  },
  {
    icon: Database,
    title: 'Big Data and Analytics',
    description: 'Research in data management, analytics, and insights extraction.',
    topics: [
      'Data Mining',
      'Big Data Processing',
      'Data Visualization',
      'Predictive Analytics',
      'Data Privacy',
    ],
    chairs: [
      { name: 'Prof. Thomas Anderson', affiliation: 'CMU' },
      { name: 'Dr. Maria Garcia', affiliation: 'Amazon' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile and Ubiquitous Computing',
    description: 'Advances in mobile technologies and pervasive computing systems.',
    topics: [
      'Mobile Applications',
      'Wearable Computing',
      'Mobile Security',
      'Location-based Services',
      'Mobile Networks',
    ],
    chairs: [
      { name: 'Dr. John Smith', affiliation: 'Apple' },
      { name: 'Prof. Yuki Tanaka', affiliation: 'University of Tokyo' },
    ],
  },
];

export function Tracks() {
  const [selectedTrack, setSelectedTrack] = React.useState<Track | null>(null);

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
              Conference Tracks
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our diverse range of research tracks covering the latest advances in
              computer science and information technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-100 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => setSelectedTrack(track)}
              >
                <div className="p-6">
                  <track.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {track.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {track.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {track.topics.slice(0, 3).map(topic => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                    {track.topics.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        +{track.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Modal */}
      {selectedTrack && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTrack(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-dark-100 rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <selectedTrack.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedTrack.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedTrack.description}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Topics
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTrack.topics.map(topic => (
                    <div
                      key={topic}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Track Chairs
                </h3>
                <div className="space-y-4">
                  {selectedTrack.chairs.map(chair => (
                    <div key={chair.name}>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {chair.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {chair.affiliation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-dark-200 px-6 py-4">
              <button
                onClick={() => setSelectedTrack(null)}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}