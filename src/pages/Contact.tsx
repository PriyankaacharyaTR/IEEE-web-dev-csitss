import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions about CSITSS-2025? We're here to help. Reach out to our team
              for assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-lg text-center"
              >
                <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:contact@csitss2025.org"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  contact@csitss2025.org
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-lg text-center"
              >
                <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-lg text-center"
              >
                <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conference Center<br />
                  University Campus<br />
                  City, State 12345
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      When is the registration deadline?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Early bird registration ends on July 31, 2025. Regular registration
                      continues until October 31, 2025.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Is virtual attendance available?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we offer a hybrid format with both in-person and virtual
                      attendance options.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      How can I submit a paper?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Paper submissions are accepted through our online submission system.
                      Visit the Call for Papers page for detailed instructions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Are there student discounts?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Yes, we offer reduced registration fees for students. Valid student ID
                      is required.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Conference Venue
          </h2>
          <div className="max-w-6xl mx-auto bg-white dark:bg-dark-200 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              {/* Replace with actual map implementation */}
              <div className="w-full h-96 bg-gray-200 dark:bg-dark-300 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Conference Center
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                123 University Avenue<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}