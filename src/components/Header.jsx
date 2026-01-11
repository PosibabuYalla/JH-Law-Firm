import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 w-full bg-deep-black/95 backdrop-blur-sm border-b border-gold-400/20 z-50">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 xs:h-20 sm:h-24">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="JH Law Firm" className="h-12 xs:h-16 sm:h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <Link to="/" className={`transition-colors text-sm lg:text-base ${location.pathname === '/' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>Home</Link>
            <Link to="/about" className={`transition-colors text-sm lg:text-base ${location.pathname === '/about' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>About</Link>
            <Link to="/services" className={`transition-colors text-sm lg:text-base ${location.pathname === '/services' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>Services</Link>
            <Link to="/practice-areas" className={`transition-colors text-sm lg:text-base ${location.pathname === '/practice-areas' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>Practice Areas</Link>
            <Link to="/blog" className={`transition-colors text-sm lg:text-base ${location.pathname === '/blog' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>Blog</Link>
            <Link to="/contact" className={`transition-colors text-sm lg:text-base ${location.pathname === '/contact' ? 'text-gold-400' : 'text-off-white hover:text-gold-400'}`}>Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="px-4 lg:px-6 py-2 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-deep-black transition-all duration-300 text-sm lg:text-base">
              Contact
            </Link>
          </div>

          <button 
            className="md:hidden text-gold-400 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold-400/20 bg-deep-black/98 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/about' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/services' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/practice-areas" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/practice-areas' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/blog' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors py-2 px-2 rounded ${location.pathname === '/contact' ? 'text-gold-400 bg-gold-400/10' : 'text-off-white hover:text-gold-400 hover:bg-gold-400/5'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 mt-3 border-t border-gold-400/20">
                <Link 
                  to="/contact" 
                  className="block w-full px-4 py-3 bg-gold-gradient text-deep-black font-semibold text-center rounded hover:opacity-90 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header