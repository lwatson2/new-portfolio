import React, { useEffect, useState, useRef } from "react"

const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState(false)

  const options = {}
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires

      setIntersecting(entry.isIntersecting)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }
    console.log(true)
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}

export default useOnScreen
