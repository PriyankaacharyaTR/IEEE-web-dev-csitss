import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Users, CheckCircle, Info } from 'lucide-react';

type RegistrationType = 'regular' | 'student' | 'virtual';
type AttendanceType = 'in-person' | 'virtual';

interface RegistrationFormData {
  type: RegistrationType;
  attendance: AttendanceType;
  firstName: string;
  lastName: string;
  email: string;
  affiliation: string;
  dietaryRestrictions: string;
  paperTitle?: string;
  paperId?: string;
}

export function Registration() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState<RegistrationFormData>({
    type: 'regular',
    attendance: 'in-person',
    firstName: '',
    lastName: '',
    email: '',
    affiliation: '',
    dietaryRestrictions: '',
  });

  const fees = {
    regular: {
      'in-person': 599,
      virtual: 399,
    },
    student: {
      'in-person': 299,
      virtual: 199,
    },
    virtual: {
      'in-person': 0,
      virtual: 199,
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
              Conference Registration
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us at CSITSS-2025 for three days of inspiring talks, networking, and
              knowledge sharing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 dark:bg-gray-700" />
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= i
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Registration Type
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Personal Details
                </span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Payment
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-dark-100 rounded-lg shadow-lg p-8"
              >
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Choose Registration Type
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Registration Category
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                        >
                          <option value="regular">Regular Registration</option>
                          <option value="student">Student Registration</option>
                          <option value="virtual">Virtual Attendance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Attendance Type
                        </label>
                        <select
                          name="attendance"
                          value={formData.attendance}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                        >
                          <option value="in-person">In-Person</option>
                          <option value="virtual">Virtual</option>
                        </select>
                      </div>

                      <div className="bg-primary-50 dark:bg-dark-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Info className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-2" />
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              Selected fee:
                              <span className="font-bold ml-2">
                                ${fees[formData.type][formData.attendance]}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Personal Information
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Affiliation
                        </label>
                        <input
                          type="text"
                          name="affiliation"
                          value={formData.affiliation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Dietary Restrictions
                        </label>
                        <textarea
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                      Payment Information
                    </h2>
                    <div className="space-y-6">
                      <div className="bg-primary-50 dark:bg-dark-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                          Order Summary
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-gray-600 dark:text-gray-300">
                            <span>Registration Type:</span>
                            <span className="font-medium">
                              {formData.type.charAt(0).toUpperCase() + formData.type.slice(1)}
                            </span>
                          </div>
                          <div className="flex justify-between text-gray-600 dark:text-gray-300">
                            <span>Attendance:</span>
                            <span className="font-medium">
                              {formData.attendance === 'in-person' ? 'In-Person' : 'Virtual'}
                            </span>
                          </div>
                          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                              <span>Total:</span>
                              <span>${fees[formData.type][formData.attendance]}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Card Number
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                            />
                            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              CVC
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-200 text-gray-900 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2 bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors ml-auto"
                    >
                      Complete Registration
                    </button>
                  )}
                </div>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Registration Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-md">
                <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Important Dates
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Early Bird: Until July 31, 2025</li>
                  <li>Regular: Until Oct 31, 2025</li>
                  <li>Late: Until Nov 19, 2025</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-md">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Conference Access</li>
                  <li>Workshop Participation</li>
                  <li>Networking Events</li>
                  <li>Conference Materials</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-dark-200 rounded-lg p-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Requirements
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Valid ID</li>
                  <li>Proof of Student Status*</li>
                  <li>Paper Acceptance Letter**</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}