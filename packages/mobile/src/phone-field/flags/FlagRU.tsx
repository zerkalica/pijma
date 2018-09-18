import React from 'react'

import uuid from './uuid'

const FlagRU: React.SFC = () => {
  const [a, b, c, d] = [uuid(), uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 24 16">
      <defs>
        <path id={a} d="M0 0h21v15H0z"/>
        <filter id={b} width="104.8%" height="106.7%" x="-2.4%" y="-3.3%" filterUnits="objectBoundingBox">
          <feMorphology in="SourceAlpha" radius="1" result="shadowSpreadInner1"/>
          <feOffset in="shadowSpreadInner1" result="shadowOffsetInner1"/>
          <feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/>
          <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.121659873 0"/>
        </filter>
        <path id={d} d="M.5.5h20v14H.5z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id={c} fill="#fff">
          <use xlinkHref={`#${a}`}/>
        </mask>
        <use fill="#2E5BB3" xlinkHref={`#${a}`}/>
        <use fill="#000" filter={`url(#${b})`} xlinkHref={`#${a}`}/>
        <path fill="#CF2338" mask={`url(#${c})`} d="M0 10h21v5H0z"/>
        <path fill="#FFF" mask={`url(#${c})`} d="M0 0h21v5H0z"/>
        <use stroke="#2F343A" strokeOpacity=".157" xlinkHref={`#${d}`}/>
      </g>
    </svg>)
}

export default FlagRU
