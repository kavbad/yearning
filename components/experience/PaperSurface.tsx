export function PaperSurface() {
  return (
    <div className="paper" aria-hidden="true">
      <svg className="paper-grain" width="100%" height="100%">
        <filter id="paper-fiber">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".72"
            numOctaves="3"
            seed="24"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#paper-fiber)"
          opacity=".19"
        />
      </svg>
      <div className="edge-wash edge-wash-north" />
      <div className="edge-wash edge-wash-south" />
    </div>
  );
}
