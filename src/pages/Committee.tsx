import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';

type CommitteeMember = {
  name: string;
  role: string;
  type: 'organizing' | 'scientific';
  affiliation: string;
  image: string;
  email: string;
  website?: string;
  expertise: string[];
};

const committeeMembers: CommitteeMember[] = [
  {
    name: 'Dr. Ramesh Iyer',
    role: 'Conference Chair',
    type: 'organizing',
    affiliation: 'Indian Institute of Science (IISc), Bangalore',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&q=80',
    email: 'ramesh.iyer@example.com',
    website: 'https://example.com',
    expertise: ['AI/ML', 'Data Science', 'Robotics'],
  },
  {
    name: 'Prof. Ananya Sharma',
    role: 'Technical Program Chair',
    type: 'organizing',
    affiliation: 'IIT Bombay',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80',
    email: 'ananya.sharma@example.com',
    expertise: ['Quantum Computing', 'Cybersecurity'],
  },
  {
    name: 'Dr. Vikram Patel',
    role: 'Scientific Committee Chair',
    type: 'scientific',
    affiliation: 'IIT Madras',
    image: 'https://images.unsplash.com/photo-1531561855568-3036cd4f03ba?auto=format&fit=crop&q=80',
    email: 'vikram.patel@example.com',
    website: 'https://example.com',
    expertise: ['IoT', 'Embedded Systems', 'Edge Computing'],
  },
];

export function Committee() {
  const [filter, setFilter] = React.useState<'all' | 'organizing' | 'scientific'>('all');

  const filteredMembers = React.useMemo(() => {
    if (filter === 'all') return committeeMembers;
    return committeeMembers.filter(member => member.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 bg-blue-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Conference Committee
          </motion.h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto flex justify-center space-x-4">
          {['all', 'organizing', 'scientific'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.affiliation}</p>
                <div className="flex space-x-4">
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </a>
                  {member.website && (
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
