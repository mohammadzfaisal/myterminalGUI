/**
 * Timeline Circle Fill Animation - Progress Tracker
 * Uses IntersectionObserver to fill timeline circles when they enter viewport
 * Once filled, circles stay filled permanently to show viewing progress
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // Trigger when 20% of the element is visible
    threshold: 0.2,

    // Start observing slightly before element enters viewport
    rootMargin: '0px 0px -50px 0px',

    // CSS class to add when visible
    visibleClass: 'visible'
  };

  // Keep reference to observer for unobserving
  let observer;

  /**
   * Initialize timeline animation
   */
  function initTimelineAnimation() {
    // Find all timeline nodes
    const timelineNodes = document.querySelectorAll('[data-timeline-node]');

    if (timelineNodes.length === 0) {
      // No timeline nodes on this page, exit gracefully
      return;
    }

    // Create intersection observer
    observer = new IntersectionObserver(handleIntersection, {
      threshold: CONFIG.threshold,
      rootMargin: CONFIG.rootMargin
    });

    // Observe all timeline nodes
    timelineNodes.forEach(node => {
      observer.observe(node);
    });
  }

  /**
   * Handle intersection changes - Progress Tracker behavior
   * @param {IntersectionObserverEntry[]} entries - Array of intersection entries
   */
  function handleIntersection(entries) {
    entries.forEach(entry => {
      const node = entry.target;

      if (entry.isIntersecting) {
        // Element is visible - add fill effect and stop observing
        node.classList.add(CONFIG.visibleClass);

        // Stop observing this node (progress tracker - stays filled)
        observer.unobserve(node);
      }
      // No else block - circles stay filled once viewed
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineAnimation);
  } else {
    // DOM already loaded
    initTimelineAnimation();
  }

})();
