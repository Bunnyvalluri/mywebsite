import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

/**
 * Lazy Load Wrapper Component
 * Provides loading states and error boundaries for lazy-loaded components
 */

// Loading Skeleton Component
export const ComponentSkeleton = ({ height = '400px', variant = 'default' }) => {
  const skeletonVariants = {
    default: (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-[--color-border-custom] rounded-lg w-3/4"></div>
        <div className="h-4 bg-[--color-border-custom] rounded w-full"></div>
        <div className="h-4 bg-[--color-border-custom] rounded w-5/6"></div>
        <div className="h-4 bg-[--color-border-custom] rounded w-4/6"></div>
      </div>
    ),
    card: (
      <div className="animate-pulse">
        <div className="h-48 bg-[--color-border-custom] rounded-2xl mb-4"></div>
        <div className="h-6 bg-[--color-border-custom] rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-[--color-border-custom] rounded w-full mb-2"></div>
        <div className="h-4 bg-[--color-border-custom] rounded w-5/6"></div>
      </div>
    ),
    hero: (
      <div className="animate-pulse min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6 w-full max-w-4xl px-4">
          <div className="h-16 bg-[--color-border-custom] rounded-lg w-3/4 mx-auto"></div>
          <div className="h-8 bg-[--color-border-custom] rounded w-full mx-auto"></div>
          <div className="h-12 bg-[--color-border-custom] rounded-full w-48 mx-auto"></div>
        </div>
      </div>
    ),
    grid: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-64 bg-[--color-border-custom] rounded-2xl"></div>
        ))}
      </div>
    )
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: height }}
      className="w-full p-6"
    >
      {skeletonVariants[variant] || skeletonVariants.default}
    </motion.div>
  );
};

// Spinner Component
export const LoadingSpinner = ({ size = 'md', text = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <motion.div
        className={`${sizes[size]} border-4 border-[--color-border-custom] border-t-[--color-accent] rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[--color-secondary] font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Progressive Loading Component
export const ProgressiveLoader = ({ progress = 0, text = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[--color-secondary]">{text}</span>
          <span className="text-sm font-bold text-[--color-accent]">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-[--color-border-custom] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[--color-accent] to-[--color-accent-secondary]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

// Error Boundary Fallback
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center gap-4 p-8 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-[--color-primary] mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-[--color-secondary] mb-4">
          {error?.message || 'Failed to load component'}
        </p>
        {resetErrorBoundary && (
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-3 bg-[--color-accent] text-white font-semibold rounded-xl hover:scale-105 transition-transform"
          >
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  );
};

// Lazy Load Wrapper with Intersection Observer
export const LazyLoadWrapper = ({
  children,
  fallback = <ComponentSkeleton />,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
};

// Image Lazy Loader with Blur Effect
export const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderSrc = '',
  aspectRatio = '16/9'
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[--color-border-custom] animate-pulse" />
      )}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};

// Preload Critical Resources
export const preloadResources = (resources) => {
  resources.forEach(({ href, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  });
};

// Font Loading Optimization
export const optimizeFontLoading = () => {
  if ('fonts' in document) {
    // Preload critical fonts
    const fonts = [
      new FontFace('Inter', 'url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)', {
        weight: '400',
        style: 'normal',
        display: 'swap'
      }),
      new FontFace('Playfair Display', 'url(https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.woff2)', {
        weight: '700',
        style: 'normal',
        display: 'swap'
      })
    ];

    Promise.all(fonts.map(font => font.load())).then(loadedFonts => {
      loadedFonts.forEach(font => document.fonts.add(font));
    });
  }
};

export default LazyLoadWrapper;
