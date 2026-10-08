export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--color-green) 5%, transparent), transparent 60%), radial-gradient(ellipse 60% 40% at 90% 20%, color-mix(in srgb, var(--color-cyan) 4%, transparent), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/0 via-transparent to-[var(--color-bg)]" />
    </div>
  )
}

export function CursorGlow() {
  return null
}