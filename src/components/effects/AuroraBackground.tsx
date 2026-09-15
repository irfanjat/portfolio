export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#0d1117]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(57,211,83,0.05), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(88,166,255,0.04), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/0 via-transparent to-[#0d1117]" />
    </div>
  )
}

export function CursorGlow() {
  return null
}