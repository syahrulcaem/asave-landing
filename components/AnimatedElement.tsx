"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  delay: number
  className?: string
  animation?: "drop-in" | "fade-in" | "slide-up" | "bounce-in" | "zoom-in"
  onScroll?: boolean // Add property to control if animation should be triggered on scroll
}

export function AnimatedElement({
  children,
  delay,
  className = "",
  animation = "drop-in",
  onScroll = false, // Default to false for backward compatibility
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(!onScroll) // If not onScroll, show immediately
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If not set to animate on scroll, use the delay approach
    if (!onScroll) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
    
    // Otherwise, use Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          // Use setTimeout to stagger the animations
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          
          // Once visible, stop observing
          if (elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        }
      },
      { 
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -100px 0px" // Trigger a bit before the element enters the viewport
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, onScroll])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-in-out"
      case "slide-up":
        return "opacity-0 translate-y-10 transition-all duration-700 ease-out"
      case "bounce-in":
        return "opacity-0 -translate-y-6 transition-all duration-500 ease-in-out"
      case "zoom-in":
        return "opacity-0 scale-95 transition-all duration-500 ease-out"
      case "drop-in":
      default:
        return "opacity-0 -translate-y-10 transition-all duration-500 ease-out"
    }
  }

  const getVisibleClass = () => {
    switch (animation) {
      case "fade-in":
        return "opacity-100"
      case "slide-up":
        return "opacity-100 translate-y-0"
      case "bounce-in":
        return "opacity-100 translate-y-0 animate-bounce-once"
      case "zoom-in":
        return "opacity-100 scale-100"
      case "drop-in":
      default:
        return "opacity-100 translate-y-0"
    }
  }

  return (
    <div 
      ref={elementRef}
      className={`${className} ${getAnimationClass()} ${isVisible ? getVisibleClass() : ""}`}
    >
      {children}
    </div>
  )
}