/** The same transparent pigment artwork persists through the invitation morph. */
export function WatercolorOrb() {
  return (
    <div className="watercolor" aria-hidden="true">
      <div className="pigment pigment-body" />
      <div className="pigment pigment-settling" />
    </div>
  );
}
