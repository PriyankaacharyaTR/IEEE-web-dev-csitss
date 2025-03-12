import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ChevronDown, FileText, Send } from 'lucide-react';

export function CallForPapers() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const timeline = [
    {
      date: 'March 15, 2025',
      title: 'Paper Submission Opens',
      description: 'Start submitting your research papers.',
    },
    {
      date: 'June 30, 2025',
      title: 'Submission Deadline',
      description: 'Last day to submit your papers.',
    },
    {
      date: 'August 15, 2025',
      title: 'Review Results',
      description: 'Authors will be notified of acceptance decisions.',
    },
    {
      date: 'September 30, 2025',
      title: 'Camera-Ready Deadline',
      description: 'Final version of accepted papers due.',
    },
  ];

  const tracks = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      topics: [
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning',
      ],
    },
    {
      title: 'Smart Systems and IoT',
      topics: [
        'Internet of Things',
        'Edge Computing',
        'Sensor Networks',
        'Smart Cities',
      ],
    },
    {
      title: 'Cybersecurity and Privacy',
      topics: [
        'Network Security',
        'Cryptography',
        'Privacy-Preserving Computing',
        'Blockchain',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is the page limit for submissions?',
      answer: 'Full papers should be between 8-10 pages in IEEE format, including figures and references. Short papers should be 4-6 pages.',
    },
    {
      question: 'Is it possible to submit supplementary material?',
      answer: 'Yes, authors may submit supplementary material (e.g., proofs, source code, datasets) along with their papers. This material will be reviewed but not published.',
    },
    {
      question: 'What is the review process like?',
      answer: 'Each paper will undergo a double-blind peer review process by at least three members of the program committee. Reviews will be based on originality, technical soundness, and presentation.',
    },
    {
      question: 'Can I submit previously published work?',
      answer: 'No, all submissions must be original work that has not been previously published or is currently under review at another venue.',
    },
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
              Call for Papers
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Share your research with the global computer science and information technology
              community at CSITSS-2025.
            </p>
            <a
              href="#submit"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Submit Your Paper
            </a>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Important Dates
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary-200 dark:bg-primary-800" />
              {timeline.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2 px-6">
                    <div
                      className={`bg-white dark:bg-dark-100 p-6 rounded-lg shadow-lg ${
                        index % 2 === 0 ? 'text-right' : ''
                      }`}
                    >
                      <div className="flex items-center mb-2 text-primary-600 dark:text-primary-400">
                        <Calendar className="w-5 h-5 mr-2" />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-200" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Conference Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {track.title}
                </h3>
                <ul className="space-y-2">
                  {track.topics.map(topic => (
                    <li
                      key={topic}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Submission Guidelines
            </h2>
            <div className="bg-white dark:bg-dark-100 rounded-lg shadow-lg p-8">
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">Paper Format</h3>
                <ul className="space-y-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Papers must be written in English</li>
                  <li>Use the IEEE conference template</li>
                  <li>Full papers: 8-10 pages including references</li>
                  <li>Short papers: 4-6 pages including references</li>
                  <li>PDF format only</li>
                  <li>Double-blind review process - remove author information</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">Review Criteria</h3>
                <ul className="space-y-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Technical soundness and originality</li>
                  <li>Significance and relevance</li>
                  <li>Presentation and clarity</li>
                  <li>Literature review and references</li>
                </ul>

                <div className="mt-8">
                  <a
                    href="#submit"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 dark:bg-dark-100 rounded-b-lg">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}