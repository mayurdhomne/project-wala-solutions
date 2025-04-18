
import { useState, useEffect, useRef } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypingAnimation = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
  className = "",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const currentText = texts[textIndex];
  
  // For cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // For typing/deleting animation
  useEffect(() => {
    let timeout: number;
    
    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timeout = window.setTimeout(() => {}, delayBetweenTexts);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (displayedText.length === currentText.length) {
        timeout = window.setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, currentText, delayBetweenTexts, deletingSpeed, typingSpeed, texts]);
  
  return (
    <span className={className}>
      {displayedText}
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};

export default TypingAnimation;
