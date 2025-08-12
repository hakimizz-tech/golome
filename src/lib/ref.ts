import React from 'react';

/**
 * Utility function that converts any HTML element ref to an HTMLDivElement ref
 * Useful for fixing TypeScript errors with useParallax refs
 */
export function createDivRef<T extends HTMLElement>(ref: React.RefObject<T>): React.RefObject<HTMLDivElement> {
  return ref as unknown as React.RefObject<HTMLDivElement>;
}