import { useState, useEffect } from 'react'

// Responsive utility functions and breakpoints

export const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920
}

// Hook to get current screen size
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('lg')

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      
      if (width < breakpoints.xs) {
        setScreenSize('xs')
      } else if (width < breakpoints.sm) {
        setScreenSize('sm')
      } else if (width < breakpoints.md) {
        setScreenSize('md')
      } else if (width < breakpoints.lg) {
        setScreenSize('lg')
      } else if (width < breakpoints.xl) {
        setScreenSize('xl')
      } else if (width < breakpoints['2xl']) {
        setScreenSize('2xl')
      } else {
        setScreenSize('3xl')
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return screenSize
}

// Responsive class generators
export const responsiveClasses = {
  text: {
    xs: 'text-xs xs:text-sm sm:text-base',
    sm: 'text-sm xs:text-base sm:text-lg md:text-xl',
    base: 'text-base xs:text-lg sm:text-xl md:text-2xl',
    lg: 'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    xl: 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    '2xl': 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'
  },
  
  spacing: {
    xs: 'space-y-2 xs:space-y-3 sm:space-y-4',
    sm: 'space-y-3 xs:space-y-4 sm:space-y-6',
    base: 'space-y-4 xs:space-y-6 sm:space-y-8',
    lg: 'space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12',
    xl: 'space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16'
  },
  
  padding: {
    xs: 'p-2 xs:p-3 sm:p-4',
    sm: 'p-3 xs:p-4 sm:p-6',
    base: 'p-4 xs:p-6 sm:p-8',
    lg: 'p-6 xs:p-8 sm:p-10 md:p-12',
    xl: 'p-8 xs:p-10 sm:p-12 md:p-16'
  },
  
  margin: {
    xs: 'm-2 xs:m-3 sm:m-4',
    sm: 'm-3 xs:m-4 sm:m-6',
    base: 'm-4 xs:m-6 sm:m-8',
    lg: 'm-6 xs:m-8 sm:m-10 md:m-12',
    xl: 'm-8 xs:m-10 sm:m-12 md:m-16'
  },
  
  gap: {
    xs: 'gap-2 xs:gap-3 sm:gap-4',
    sm: 'gap-3 xs:gap-4 sm:gap-6',
    base: 'gap-4 xs:gap-6 sm:gap-8',
    lg: 'gap-6 xs:gap-8 sm:gap-10 md:gap-12',
    xl: 'gap-8 xs:gap-10 sm:gap-12 md:gap-16'
  }
}

// Mobile-first grid classes
export const gridClasses = {
  responsive: 'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  responsive2: 'grid grid-cols-1 md:grid-cols-2',
  responsive3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  responsive4: 'grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  stats: 'grid grid-cols-2 md:grid-cols-4'
}

// Container classes
export const containerClasses = {
  section: 'px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16',
  max: 'max-w-7xl mx-auto w-full',
  page: 'pt-20 pb-12 xs:pt-24 xs:pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24'
}

// Button size classes
export const buttonClasses = {
  sm: 'px-3 xs:px-4 sm:px-6 py-2 xs:py-3 text-xs xs:text-sm',
  base: 'px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base',
  lg: 'px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg'
}

// Icon size classes
export const iconClasses = {
  xs: 'w-3 h-3 xs:w-4 xs:h-4',
  sm: 'w-4 h-4 xs:w-5 xs:h-5',
  base: 'w-5 h-5 xs:w-6 xs:h-6',
  lg: 'w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8',
  xl: 'w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12'
}

export default {
  breakpoints,
  useScreenSize,
  responsiveClasses,
  gridClasses,
  containerClasses,
  buttonClasses,
  iconClasses
}