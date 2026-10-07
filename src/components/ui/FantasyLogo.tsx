type Props = {
  className?: string
}

export function FantasyLogo({ className }: Props) {
  const outer =
    'M 8 10 L 56 22 L 120 16 L 200 24 L 280 15 L 330 22 L 360 12 L 390 22 L 440 15 L 520 24 L 600 16 L 664 22 L 712 10 ' +
    'L 702 58 L 714 110 L 702 162 L 712 210 ' +
    'L 664 198 L 600 204 L 520 196 L 440 205 L 390 198 L 360 208 L 330 198 L 280 205 L 200 196 L 120 204 L 56 198 L 8 210 ' +
    'L 18 162 L 6 110 L 18 58 Z'
  const inner =
    'M 48 52 L 150 46 L 360 42 L 570 46 L 672 52 L 678 70 L 680 110 L 678 150 L 672 168 L 570 174 L 360 178 L 150 174 ' +
    'L 48 168 L 42 150 L 40 110 L 42 70 Z'
  const ring = outer + ' ' + inner

  const textAttrs = {
    x: 364,
    y: 138,
    textAnchor: 'middle',
    fontFamily: "'Fraunces Variable', Georgia, 'Times New Roman', serif",
    fontWeight: 900,
    fontSize: 78,
    letterSpacing: 7,
  } as const

  return (
    <svg className={className} viewBox="0 0 720 220" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="fl-bg" cx="0.5" cy="0.42" r="0.75">
          <stop offset="0" stopColor="#10162a" />
          <stop offset="0.55" stopColor="#080c16" />
          <stop offset="1" stopColor="#04060b" />
        </radialGradient>
        <linearGradient id="fl-bronze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a7433" />
          <stop offset="0.4" stopColor="#6e5326" />
          <stop offset="0.75" stopColor="#4e3a1a" />
          <stop offset="1" stopColor="#33260f" />
        </linearGradient>
        <linearGradient id="fl-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b08639" />
          <stop offset="0.5" stopColor="#7a5a24" />
          <stop offset="1" stopColor="#4e3a18" />
        </linearGradient>
        <linearGradient id="fl-liner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6dfa0" />
          <stop offset="0.5" stopColor="#c29a3d" />
          <stop offset="1" stopColor="#86621f" />
        </linearGradient>
        <linearGradient id="fl-goldText" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff6cf" />
          <stop offset="0.16" stopColor="#ffe9a8" />
          <stop offset="0.38" stopColor="#f6bd45" />
          <stop offset="0.55" stopColor="#efbb03" />
          <stop offset="0.78" stopColor="#c99412" />
          <stop offset="1" stopColor="#8a6208" />
        </linearGradient>
        <linearGradient id="fl-crown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d179" />
          <stop offset="0.45" stopColor="#b8860b" />
          <stop offset="1" stopColor="#6b4a12" />
        </linearGradient>
        <radialGradient id="fl-rivet" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffeeb0" />
          <stop offset="0.55" stopColor="#d6a017" />
          <stop offset="1" stopColor="#7a5510" />
        </radialGradient>
        <radialGradient id="fl-blueGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#b7ecff" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#4fc3ff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#4fc3ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fl-blueWash" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4fc3ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#4fc3ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fl-white" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fl-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.07" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="fl-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#04060c" stopOpacity="0" />
          <stop offset="0.55" stopColor="#04060c" stopOpacity="0" />
          <stop offset="1" stopColor="#04060c" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="fl-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.4" stopColor="#ffffff" />
          <stop offset="0.6" stopColor="#000000" />
        </linearGradient>

        <filter id="fl-rock" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="7" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.7" />
            <feFuncG type="linear" slope="0.7" />
            <feFuncB type="linear" slope="0.7" />
          </feComponentTransfer>
        </filter>
        <filter id="fl-mottle" x="-5%" y="-15%" width="110%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045 0.09" numOctaves="3" seed="4" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
        <filter id="fl-blur3" x="-20%" y="-30%" width="150%" height="180%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>

        <mask id="fl-shineMask">
          <rect x="130" y="50" width="470" height="100" fill="url(#fl-shine)" />
        </mask>

        <text id="fl-text" {...textAttrs}>
          IRFAN ALI
        </text>
        <clipPath id="fl-textClip">
          <use href="#fl-text" />
        </clipPath>
        <clipPath id="fl-panelClip">
          <path d={inner} />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="720" height="220" fill="url(#fl-bg)" />

      <g clipPath="url(#fl-panelClip)">
        <path d={inner} fill="#14161c" />
        <path d={inner} fill="url(#fl-panel)" />
        <rect x="40" y="42" width="640" height="136" filter="url(#fl-rock)" opacity="0.32" />
      </g>

      <path d={ring} fillRule="evenodd" fill="url(#fl-bronze)" stroke="#170f05" strokeWidth="2.5" strokeLinejoin="round" />
      <path d={outer} fill="none" stroke="#c9a13f" strokeWidth="1.5" opacity="0.3" />
      <path d={inner} fill="none" stroke="url(#fl-liner)" strokeWidth="3.5" />

      <g stroke="#170f05" strokeWidth="1.5">
        <path d="M 20 72 L 48 66 L 52 112 L 24 120 Z" fill="url(#fl-plate)" />
        <path d="M 700 72 L 672 66 L 668 112 L 696 120 Z" fill="url(#fl-plate)" />
        <path d="M 148 24 L 192 20 L 196 36 L 152 40 Z" fill="url(#fl-plate)" />
        <path d="M 572 24 L 528 20 L 524 36 L 568 40 Z" fill="url(#fl-plate)" />
        <path d="M 250 178 L 292 174 L 296 196 L 254 200 Z" fill="url(#fl-plate)" />
        <path d="M 470 178 L 428 174 L 424 196 L 466 200 Z" fill="url(#fl-plate)" />
      </g>

      <g stroke="#241a0a" strokeWidth="0.8">
        <circle cx="31" cy="82" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="33" cy="108" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="689" cy="82" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="687" cy="108" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="170" cy="30" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="550" cy="30" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="272" cy="187" r="3.2" fill="url(#fl-rivet)" />
        <circle cx="448" cy="187" r="3.2" fill="url(#fl-rivet)" />
      </g>

      <g fill="#2c2010" stroke="#140d05" strokeWidth="1">
        <path d="M 62 44 L 84 38 L 96 50 L 82 58 L 64 56 Z" />
        <path d="M 658 44 L 636 38 L 624 50 L 638 58 L 656 56 Z" />
        <path d="M 52 160 L 76 156 L 92 168 L 74 180 L 54 174 Z" />
        <path d="M 668 160 L 644 156 L 628 168 L 646 180 L 666 174 Z" />
      </g>

      <g fill="#1c140a" opacity="0.75">
        <path d="M 120 16 L 134 24 L 146 15 Z" />
        <path d="M 574 15 L 586 24 L 600 16 Z" />
        <path d="M 120 204 L 134 196 L 146 203 Z" />
        <path d="M 574 203 L 586 196 L 600 204 Z" />
        <path d="M 7 96 L 20 102 L 8 112 Z" />
        <path d="M 713 96 L 700 102 L 712 112 Z" />
      </g>

      <g stroke="#e8c766" strokeWidth="1.5" opacity="0.3" fill="none">
        <path d="M 22 72 L 46 67" />
        <path d="M 150 25 L 190 21" />
        <path d="M 600 17 L 660 22" />
      </g>

      <path d="M 316 48 L 404 48 L 400 32 L 320 32 Z" fill="url(#fl-crown)" stroke="#231707" strokeWidth="2" />
      <g fill="url(#fl-plate)" stroke="#170f05" strokeWidth="1.5">
        <path d="M 336 38 L 342 12 L 350 38 Z" />
        <path d="M 354 36 L 360 4 L 366 36 Z" />
        <path d="M 384 38 L 378 12 L 370 38 Z" />
      </g>
      <g fill="url(#fl-rivet)" stroke="#241a0a" strokeWidth="0.8">
        <circle cx="342" cy="11" r="3.2" />
        <circle cx="360" cy="3.5" r="3.2" />
        <circle cx="378" cy="11" r="3.2" />
      </g>

      <ellipse className="logo-gem-glow" cx="360" cy="26" rx="34" ry="30" fill="url(#fl-blueGlow)" />
      <ellipse cx="360" cy="80" rx="130" ry="70" fill="url(#fl-blueWash)" opacity="0.5" />
      <ellipse cx="360" cy="26" rx="15" ry="15" fill="#d9f6ff" opacity="0.7" />

      <g stroke="#062b58" strokeWidth="1" strokeLinejoin="round">
        <path d="M 360 6 L 375 18 L 360 24 Z" fill="#7df0ff" />
        <path d="M 375 18 L 369 36 L 360 24 Z" fill="#2f9fe8" />
        <path d="M 369 36 L 360 43 L 360 24 Z" fill="#0b4a94" />
        <path d="M 360 43 L 351 36 L 360 24 Z" fill="#0a3f80" />
        <path d="M 351 36 L 345 18 L 360 24 Z" fill="#1670c8" />
        <path d="M 345 18 L 360 6 L 360 24 Z" fill="#56d6ff" />
      </g>
      <path d="M 360 13 L 370 19 L 367 30 L 353 30 L 350 19 Z" fill="#a9f2ff" opacity="0.8" stroke="#0a3c72" strokeWidth="1" />
      <path
        d="M 360 6 L 375 18 L 369 36 L 360 43 L 351 36 L 345 18 Z"
        fill="none"
        stroke="#04203f"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <use href="#fl-text" transform="translate(3,11)" fill="#000000" opacity="0.55" filter="url(#fl-blur3)" />
      <use href="#fl-text" transform="translate(0,7)" fill="#4a3008" stroke="#241605" strokeWidth="2" />
      <use href="#fl-text" fill="none" stroke="#5c3f0c" strokeWidth="3" />
      <use href="#fl-text" fill="url(#fl-goldText)" />
      <use href="#fl-text" transform="translate(0,-2)" fill="#fff6d0" opacity="0.55" mask="url(#fl-shineMask)" />

      <g clipPath="url(#fl-textClip)">
        <rect x="140" y="60" width="450" height="100" fill="#3a2508" filter="url(#fl-mottle)" opacity="0.32" />
        <g stroke="#4a2f0a" strokeWidth="2.5" fill="none" opacity="0.65">
          <polyline points="228,92 248,108 266,100 288,116" />
          <polyline points="436,94 456,110 474,102" />
          <polyline points="186,124 202,134 220,128" />
        </g>
      </g>

      <ellipse cx="140" cy="20" rx="300" ry="140" fill="url(#fl-white)" />
      <rect x="0" y="0" width="720" height="220" fill="url(#fl-vignette)" />
    </svg>
  )
}
