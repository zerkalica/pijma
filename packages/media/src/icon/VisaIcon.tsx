import React from 'react'

const VisaIcon: React.FunctionComponent = () => (
  <svg viewBox="0 0 48 24" focusable="false">
    <defs>
      <linearGradient id="visaIconGradient" x1="0%" x2="100%" y1="50%" y2="50%">
        <stop offset="0%" stopColor="#363C61"/>
        <stop offset="100%" stopColor="#4D64A9"/>
      </linearGradient>
    </defs>
    <path
      fill="url(#visaIconGradient)"
      d="M13 .91L8.52 11.82H5.6L3.4 3.27a1.21 1.21 0 0 0-.65-1 11.44 11.44 0 0 0-2.72-1l.06-.4h4.69a1.36 1.36 0 0 1 1.27 1.16l1.16 6.13L10.08.87 13 .91zm11.4 7.33c0-2.81-3.89-3-3.86-4.22 0-.38.37-.79 1.17-.89a5.2 5.2 0 0 1 2.72.48l.48-2.26a7.41 7.41 0 0 0-2.58-.47c-2.72 0-4.64 1.45-4.66 3.52 0 1.53 1.37 2.39 2.41 2.9 1.04.51 1.43.86 1.43 1.32 0 .72-.86 1-1.65 1A5.77 5.77 0 0 1 17 9l-.5 2.34a8.35 8.35 0 0 0 3.07.57c2.9 0 4.79-1.43 4.8-3.65l.03-.02zm7.17 3.6h2.55L31.92.91h-2.35a1.38 1.38 0 0 0-1.17.91l-4.14 10h2.89l.58-1.82h3.54l.3 1.84zm-3.05-4.11l1.45-4 .84 4h-2.29zM16.92.91l-2.28 10.91h-2.76L14.17.91h2.75z"
      transform="translate(7 6)"
    />
  </svg>
)

export default VisaIcon
