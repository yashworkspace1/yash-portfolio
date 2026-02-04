import { useEffect } from 'react'

export const useClickEffect = (effectType = 'flare') => {
  useEffect(() => {
    const handleClick = (e) => {
      // Create 6-8 particles that scatter in different directions
      const particleCount = 6 + Math.random() * 3
      
      for (let i = 0; i < particleCount; i++) {
        const effect = document.createElement('div')
        effect.className = `click-effect click-effect-${effectType}`
        
        // Random angle for scattering (0-360 degrees)
        const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
        const velocity = 60 + Math.random() * 40
        const tx = Math.cos(angle) * velocity
        const ty = Math.sin(angle) * velocity
        
        effect.style.left = e.clientX + 'px'
        effect.style.top = e.clientY + 'px'
        effect.style.setProperty('--tx', tx + 'px')
        effect.style.setProperty('--ty', ty + 'px')
        
        document.body.appendChild(effect)
        
        setTimeout(() => {
          effect.remove()
        }, 1400)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [effectType])
}
