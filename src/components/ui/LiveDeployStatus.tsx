import { motion } from 'framer-motion'
import { Wifi, WifiOff } from 'lucide-react'
import {
  relativeTime,
  useGitHubDeployStatus,
} from '../../hooks/useGitHubDeployStatus'

const toneMap = {
  passing: { dot: 'bg-[#11e956]', text: 'text-[#11e956]' },
  failing: { dot: 'bg-[#f58f91]', text: 'text-[#f58f91]' },
  pending: { dot: 'bg-[#efbb03]', text: 'text-[#efbb03]' },
  unknown: { dot: 'bg-[#919dab]', text: 'text-[#919dab]' },
}

export function LiveDeployStatus() {
  const { status, loading, online } = useGitHubDeployStatus()

  let tone = toneMap.unknown
  let label = 'deploy: unknown'

  if (status.ok && status.conclusion === 'success') {
    tone = toneMap.passing
    label = 'deploy: passing'
  } else if (status.ok && status.conclusion && status.conclusion !== 'success') {
    tone = toneMap.failing
    label = 'deploy: failing'
  } else if (status.ok && status.status === 'in_progress') {
    tone = toneMap.pending
    label = 'deploy: running…'
  }

  const when =
    (status.ok && relativeTime(status.updatedAt)) ||
    (loading ? 'checking…' : 'n/a')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="flex flex-wrap items-center gap-x-2 font-mono text-[12.5px]"
    >
      <span className="relative flex h-2 w-2">
        {status.ok && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${tone.dot} opacity-60`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${tone.dot}`} />
      </span>
      <span className={tone.text}>{label}</span>
      {status.ok && (
        <>
          <span className="text-[#6e7888]">·</span>
          <span className="text-[#919dab]">{when} ago</span>
        </>
      )}
      <span className="text-[#6e7888]">·</span>
      <span className={`inline-flex items-center gap-1 ${online ? 'text-[#919dab]' : 'text-[#f58f91]'}`}>
        {online ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
        {online ? 'live' : 'offline · cached'}
      </span>
    </motion.div>
  )
}
