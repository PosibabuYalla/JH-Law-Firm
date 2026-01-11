import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import logo from '../assets/images/logo.png'

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation(0.1)
  const practiceAreas = [
    'Civil Litigation',
    'Corporate Law',
    'Family Law',
    'Criminal Law',
    'Property Law'
  ]

  const quickLinks = [
    'About Us',
    'Our Team',
    'Services',
    'Blog',
    'Contact'
  ]

  return (
    <footer className="bg-deep-black border-t border-gold-400/20 py-8 xs:py-10 sm:py-12">
      <div className="container-max section-padding">
        <div ref={footerRef} className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 mb-6 xs:mb-8 animate-on-scroll ${footerVisible ? 'visible' : ''}`}>
          <div className="xs:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4">
              <img src={logo} alt="JH Law Firm" className="h-6 xs:h-8 w-auto" />
              <h3 className="text-lg xs:text-xl font-serif font-bold gold-text">
                JH Law Firm
              </h3>
            </Link>
            <p className="text-off-white leading-relaxed text-sm xs:text-base">
              Delivering exceptional legal services with unwavering commitment to justice and client success.
            </p>
          </div>

          <div>
            <h4 className="text-base xs:text-lg font-semibold gold-text mb-3 xs:mb-4">Quick Links</h4>
            <ul className="space-y-1 xs:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-off-white hover:text-gold-400 transition-colors text-sm xs:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base xs:text-lg font-semibold gold-text mb-3 xs:mb-4">Practice Areas</h4>
            <ul className="space-y-1 xs:space-y-2">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a href="#" className="text-off-white hover:text-gold-400 transition-colors text-sm xs:text-base">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base xs:text-lg font-semibold gold-text mb-3 xs:mb-4">Connect</h4>
            <div className="flex space-x-3 xs:space-x-4 mb-3 xs:mb-4">
              <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-off-white text-xs xs:text-sm">
              Follow us for legal insights and updates
            </p>
          </div>
        </div>

        <div className="border-t border-gold-400/20 pt-6 xs:pt-8 text-center">
          <p className="text-off-white text-xs xs:text-sm">
            © 2024 JH Law Firm. All rights reserved. | 
            <a href="#" className="text-gold-400 hover:text-gold-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-gold-400 hover:text-gold-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer