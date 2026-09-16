import { useEffect, useState } from 'react'

export interface DeployStatus {
  ok: boolean
  status?: string
  conclusion?: string
  branch?: string
  updatedAt?: string
  runNumber?: number
  url?: string
}

interface Cached {
  at: number
  data: DeployStatus
}

const CACHE_KEY = 'irfan-deploy-status'
const STALE_MS = 5 * 60 * 1000

function loadCache(): Cached | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Cached
    if (!parsed?.data?.updatedAt) return null
    return parsed
  } catch {
    return null
  }
}

function isFresh(c: Cached | null): c is Cached {
  return !!c && Date.now() - c.at < STALE_MS
}

export function useGitHubDeployStatus() {
  const [status, setStatus] = useState<DeployStatus>({ ok: false })
  const [loading, setLoading] = useState(true)
  const [online, setOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )

  useEffect(() => {
    let active = true

    function hydrate(cached: Cached | null) {
      if (isFresh(cached)) {
        setStatus(cached.data)
        setLoading(false)
      }
    }
    hydrate(loadCache())

    async function fetchStatus() {
      try {
        const res = await fetch('/api/status')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: DeployStatus = await res.json()
        if (!data.ok) throw new Error('upstream unavailable')
        if (active) {
          setStatus(data)
          setLoading(false)
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ at: Date.now(), data })
            )
          } catch {}
        }
      } catch {
        if (active) {
          const cached = loadCache()
          if (cached) {
            setStatus(cached.data)
            setLoading(false)
          }
        }
      }
    }

    fetchStatus()

    const onOnline = () => {
      setOnline(true)
      fetchStatus()
    }
    const onOffline = () => setOnline(false)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)

    return () => {
      active = false
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  return { status, loading, online }
}

export function relativeTime(iso?: string) {
  if (!iso) return null
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return null
  const diff = Math.max(0, Date.now() - then)
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}
