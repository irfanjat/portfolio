export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#121620]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(17,233,86,0.05), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(66,160,237,0.04), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121620]/0 via-transparent to-[#121620]" />
    </div>
  )
}

export function CursorGlow() {
  return null
}