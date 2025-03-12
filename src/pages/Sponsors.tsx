import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Mail } from 'lucide-react';

type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

interface Sponsor {
  name: string;
  tier: SponsorTier;
  logo: string;
  description: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'TechCorp International',
    tier: 'platinum',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
    description: 'Global leader in enterprise software solutions and cloud computing services.',
    website: 'https://example.com',
  },
  {
    name: 'Innovation Labs',
    tier: 'gold',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    description: 'Pioneering research and development in artificial intelligence and machine learning.',
    website: 'https://example.com',
  },
  {
    name: 'DataSphere Solutions',
    tier: 'silver',
    logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80',
    description: 'Providing cutting-edge data analytics and business intelligence solutions.',
    website: 'https://example.com',
  },
  {
    name: 'Tata Consultancy Services',
    tier: 'platinum',
    logo: 'https://images.unsplash.com/photo-1607082350779-1b27b5d1f4f4?auto=format&fit=crop&q=80',
    description: 'One of India’s largest IT services and consulting companies.',
    website: 'https://www.tcs.com',
  },
  {
    name: 'Infosys',
    tier: 'gold',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    description: 'A leader in digital transformation and AI-driven solutions.',
    website: 'https://www.infosys.com',
  },
  {
    name: 'Wipro Technologies',
    tier: 'silver',
    logo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    description: 'Innovating with cloud, AI, and cybersecurity solutions.',
    website: 'https://www.wipro.com',
  },
  {
    name: 'HCL Technologies',
    tier: 'bronze',
    logo: 'https://images.unsplash.com/photo-1581092331938-36ce0e6f5d83?auto=format&fit=crop&q=80',
    description: 'Providing IT services, software development, and business consulting.',
    website: 'https://www.hcltech.com',
  },
  {
    name: 'Reliance Jio',
    tier: 'bronze',
    logo: 'https://images.unsplash.com/photo-1517245386807-9b4d0e72a861?auto=format&fit=crop&q=80',
    description: 'Revolutionizing digital connectivity and 5G services in India.',
    website: 'https://www.jio.com',
  },
];

export function Sponsors() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-200">
      <section className="py-20 bg-primary-50 dark:bg-dark-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Sponsors</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet the organizations that make CSITSS possible through their generous support.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {['platinum', 'gold', 'silver', 'bronze'].map((tier) => {
            const tierSponsors = sponsors.filter(s => s.tier === tier);
            if (tierSponsors.length === 0) return null;
            return (
              <div key={tier} className="mb-16">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                  {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierSponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-dark-100 rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="h-48 overflow-hidden">
                        <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {sponsor.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {sponsor.description}
                        </p>
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium"
                        >
                          Visit Website →
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
