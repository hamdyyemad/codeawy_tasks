import { useEffect, useState } from "react";

/**
 * Custom React hook that tracks the scroll position of the window and
 * provides two booleans: `isScrolled` (true if scrollY > threshold)
 * and `atTop` (true if scrollY <= threshold).
 *
 * @param {number} [threshold=50] - The number of pixels to scroll before `isScrolled` becomes true.
 * @returns {{ isScrolled: boolean, atTop: boolean }} - An object containing the scroll status:
 *   - `isScrolled`: true if the page is scrolled beyond the threshold.
 *   - `atTop`: true if the page is at or near the top.
 *
 * @example
 * const { isScrolled, atTop } = useScrollStatus(100);
 * if (isScrolled) {
 *   console.log("User has scrolled more than 100px.");
 * }
 */
export function useScrollStatus(threshold: number = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setIsScrolled(scrolled);
      setAtTop(!scrolled);
    };

    handleScroll(); // Check on initial mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, atTop };
}
