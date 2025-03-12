import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Sun, Moon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const importantDates = [
    {
      title: "Paper Submission Begins",
      date: "20th March 2025",
      icon: Clock,
    },
    {
      title: "Paper Submission Deadline",
      date: "20th July 2025",
      icon: Clock,
    },
    {
      title: "Notification of Acceptance",
      date: "30th August 2025",
      icon: Clock,
    },
    {
      title: "Camera Ready Paper",
      date: "10th September 2025",
      icon: Clock,
    },
    {
      title: "Conference Registration",
      date: "10th October 2025",
      icon: Clock,
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur-sm"
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CSITSS-2025
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              International Conference on Computer Science, Information Technology, and Smart Systems
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>November 20–22, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Conference Center, University Campus</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/call-for-papers"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Submit Paper
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/registration"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                Register Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Important Dates
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />
            {importantDates.map((date, index) => (
              <motion.div
                key={date.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'} px-8`}>
                  <div className={`bg-white p-6 rounded-lg shadow-lg inline-block ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    <date.icon className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {date.title}
                    </h3>
                    <p className="text-gray-900 font-medium">
                      {date.date}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Conference Overview
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              CSITSS-2025 will bring together the brightest minds in Computer Science and Information Technology. Explore the latest research, innovations, and advancements in Smart Systems, AI, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Key Highlights & Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Keynote Speakers</h3>
              <p className="text-gray-800">Learn from leading experts in the field of Computer Science and Smart Systems.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Registration Dates</h3>
              <p className="text-gray-800">Be sure to register early for a chance to be part of this exciting event.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Important Deadlines</h3>
              <p className="text-gray-800">Stay updated with the latest submission and registration deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Sections for Main Pages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Explore More
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80" 
                  alt="About" 
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">About</h3>
                <p className="text-gray-800">Learn more about CSITSS-2025, our vision, and the exciting opportunities for research and networking.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80" 
                  alt="Speakers" 
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">Speakers</h3>
                <p className="text-gray-800">Get to know the world-class speakers who will share their insights on the future of technology.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80" 
                  alt="Call for Papers" 
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">Call for Papers</h3>
                <p className="text-gray-800">Submit your research papers and contribute to the scientific community.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" 
                  alt="Registration" 
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4">Registration</h3>
                <p className="text-gray-800">Join us at CSITSS-2025. Secure your spot and be part of this groundbreaking conference.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Timer */}
      <CountdownTimer targetDate={new Date('2025-11-20')} />

      {/* Featured Sessions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Featured Sessions & Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Green Electronics</h3>
              <p className="text-gray-800">Discover the future of sustainable electronics and its impact on the environment.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Renewable Energy</h3>
              <p className="text-gray-800">Explore cutting-edge research in renewable energy technologies and solutions.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Smart Systems</h3>
              <p className="text-gray-800">Dive into the world of smart systems and the Internet of Things (IoT).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Sponsors & Partners</h2>
          <div className="flex justify-center gap-8">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-800">Sponsor 1</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-800">Sponsor 2</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-800">Sponsor 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-800 mb-4">"CSITSS-2025 was a game-changer in my career. The insights and networking opportunities were invaluable!"</p>
              <h4 className="text-lg font-semibold text-primary-600">John Doe</h4>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-800 mb-4">"An amazing event! I made lasting connections and learned so much from the keynotes and sessions."</p>
              <h4 className="text-lg font-semibold text-primary-600">Jane Smith</h4>
              <p className="text-gray-600">Researcher</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-800 mb-4">"I gained a deeper understanding of the latest trends in IT. The event was organized flawlessly."</p>
              <h4 className="text-lg font-semibold text-primary-600">Alice Johnson</h4>
              <p className="text-gray-600">Professor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join CSITSS-2025?</h2>
          <p className="text-lg mb-8 text-white">Don't miss out on this opportunity to be a part of the most anticipated conference in Computer Science and IT.</p>
          <div className="flex justify-center gap-6">
            <Link
              to="/call-for-papers"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit Paper
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/registration"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Time Until Conference
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="text-4xl font-bold text-primary-600">
                  {value}
                </div>
                <div className="text-gray-800 capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}