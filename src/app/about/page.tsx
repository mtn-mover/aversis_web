import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Aversis</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate innovators dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At Aversis, we believe in the power of technology to solve complex problems and create meaningful experiences. Our mission is to empower businesses with innovative solutions that drive growth, efficiency, and success.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine technical expertise with creative thinking to deliver results that exceed expectations and create lasting impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 mb-4">Years of Excellence</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 mb-4">Projects Delivered</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600">Excellence is not negotiable. We deliver high-quality solutions that stand the test of time.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">We work closely with our clients as partners to understand their needs and deliver tailored solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The talented professionals behind Aversis&apos;s success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
                <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Leading the vision and strategy for innovative technology solutions.</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-2">CTO</p>
                <p className="text-gray-600 text-sm">Architecting scalable solutions and leading technical innovation.</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Davis</h3>
                <p className="text-blue-600 font-medium mb-2">Lead Developer</p>
                <p className="text-gray-600 text-sm">Building robust applications with modern technologies and best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}