import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './pageLoder';

const EnhancedRouteTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      setIsLoading(false);
      setShowLoader(false);
      return;
    }

    setIsLoading(true);
    setShowLoader(true);

    // Create a promise that resolves when all images are loaded
    const loadImages = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      });
      return Promise.all(imagePromises);
    };

    // Minimum loading time to prevent flashing
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 600));

    // Wait for both images and minimum time
    Promise.all([loadImages(), minLoadTime]).then(() => {
      // Add fade out animation before hiding
      const loaderElement = document.querySelector('.page-loader-wrapper');
      if (loaderElement) {
        loaderElement.classList.add('fade-out');
        setTimeout(() => {
          setIsLoading(false);
          setShowLoader(false);
        }, 500);
      } else {
        setIsLoading(false);
        setShowLoader(false);
      }
    });

    // Fallback timeout to prevent infinite loading
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, [location.pathname]);

  return (
    <>
      {showLoader && <PageLoader />}
      <div style={{ 
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}>
        {children}
      </div>
    </>
  );
};

export default EnhancedRouteTransition;