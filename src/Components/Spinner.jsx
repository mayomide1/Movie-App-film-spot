import React from 'react'

const Spinner = () => {
  return (
   
<svg width="32" height="32" viewBox="0 0 24 24" aria-label="Loading" role="img">
  <circle cx="12" cy="12" r="10" fill="none" stroke="#e5e7eb" stroke-width="4" />
  <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite"/>
  </path>
</svg>

  )
}

export default Spinner