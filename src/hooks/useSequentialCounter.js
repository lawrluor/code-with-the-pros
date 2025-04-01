import { useRef } from 'react';

/**
 * A custom hook that provides a sequential counter.
 *
 * @param {number} initialValue - The initial value of the counter (default: 1)
 * @returns {Object} An object containing functions to get the next number and reset the counter
 */
function useSequentialCounter(initialValue = 1) {
  const counterRef = useRef(initialValue);

  const getCurrentNumber = () => {
    return counterRef.current;
  };

  // Get the current number and increment the counter
  const getCurrentNumberAndIncrement = () => {
    const currentNumber = counterRef.current;
    counterRef.current += 1;
    return currentNumber;  // the number BEFORE incrementing
  };

  // Reset the counter to a specific value or the initial value
  const resetCounter = (newValue = initialValue) => {
    counterRef.current = newValue;
  };

  // Return functions to interact with the counter
  return {  getCurrentNumber, getCurrentNumberAndIncrement, resetCounter };
}

export default useSequentialCounter;