export function WatercolorOrb() {
  return (
    <svg className="watercolor" viewBox="0 0 260 180" aria-hidden="true">
      <defs>
        <filter id="wet-edge" x="-40%" y="-40%" width="180%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".045"
            numOctaves="3"
            seed="17"
            result="grain"
          />
          <feDisplacementMap in="SourceGraphic" in2="grain" scale="16" />
          <feGaussianBlur stdDeviation=".55" />
        </filter>
        <filter id="pigment-grain">
          <feTurbulence baseFrequency=".34" numOctaves="3" seed="9" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".21" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" />
          <feBlend in2="SourceGraphic" mode="multiply" />
        </filter>
        <radialGradient id="rose">
          <stop stopColor="#b5777e" stopOpacity=".52" />
          <stop offset=".68" stopColor="#c79892" stopOpacity=".34" />
          <stop offset="1" stopColor="#c79892" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="indigo">
          <stop stopColor="#77758f" stopOpacity=".5" />
          <stop offset=".72" stopColor="#8e899d" stopOpacity=".25" />
          <stop offset="1" stopColor="#9691a2" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ochre">
          <stop stopColor="#d4ab7e" stopOpacity=".48" />
          <stop offset="1" stopColor="#d4ab7e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g filter="url(#wet-edge)">
        <g filter="url(#pigment-grain)">
          <ellipse
            className="pigment pigment-ochre"
            cx="103"
            cy="77"
            rx="70"
            ry="59"
            fill="url(#ochre)"
          />
          <ellipse
            className="pigment pigment-rose"
            cx="123"
            cy="95"
            rx="75"
            ry="65"
            fill="url(#rose)"
          />
          <ellipse
            className="pigment pigment-indigo"
            cx="161"
            cy="103"
            rx="56"
            ry="58"
            fill="url(#indigo)"
          />
          <path
            d="M68 89 Q93 47 123 64 T183 111 Q144 151 104 128Z"
            fill="#b48c98"
            opacity=".1"
          />
        </g>
      </g>
    </svg>
  );
}
