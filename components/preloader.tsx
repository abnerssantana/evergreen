"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="preloader">
      <div className="handle-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="v" className="letters-loading">
              v
            </span>
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="r" className="letters-loading">
              r
            </span>
            <span data-text-preloader="g" className="letters-loading">
              g
            </span>
            <span data-text-preloader="r" className="letters-loading">
              r
            </span>
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="e" className="letters-loading">
              e
            </span>
            <span data-text-preloader="n" className="letters-loading">
              n
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
