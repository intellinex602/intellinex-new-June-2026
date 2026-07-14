import { useEffect } from 'react'

export function useCounterAnimation() {
  useEffect(() => {
    const animate = (el) => {
      const target = parseFloat(el.dataset.target || el.textContent)
      const suffix = el.dataset.suffix || ''
      const prefix = el.dataset.prefix || ''
      const duration = 2000
      const start = performance.now()

      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const value = eased * target
        el.textContent =
          prefix +
          (Number.isInteger(target)
            ? Math.round(value)
            : value.toFixed(1)) +
          suffix
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true'
            animate(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const counters = document.querySelectorAll('.counter')
    counters.forEach((c) => observer.observe(c))

    return () => observer.disconnect()
  }, [])
}

export function useProgressBars() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target
            bar.style.width = bar.dataset.width || '0%'
          }
        })
      },
      { threshold: 0.3 }
    )

    const bars = document.querySelectorAll('.progress-fill')
    bars.forEach((bar) => {
      bar.style.width = '0%'
      observer.observe(bar)
    })

    return () => observer.disconnect()
  }, [])
}
