import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface DemoCommand {
  name: string
  cmd: string
  output: string[]
}

const demos: DemoCommand[] = [
  {
    name: 'docker ps',
    cmd: 'docker ps --format "table {{.Names}}\t{{.Status}}"',
    output: [
      'CONTAINER ID   IMAGE                             STATUS',
      'a1b2c3d4e5f6   prom/prometheus:latest            Up 3 months',
      'f6e5d4c3b2a1   grafana/grafana:latest            Up 3 months',
      '9a8b7c6d5e4f   argoproj/argocd:v2.12              Up 8 weeks',
    ],
  },
  {
    name: 'kubectl get pods',
    cmd: 'kubectl get pods -n production',
    output: [
      'NAME                          READY   STATUS    RESTARTS   AGE',
      'api-59f7ffd9cd-8k2lp          1/1     Running   0          118d',
      'worker-7d6bcc89f9-4ht2n       1/1     Running   0          118d',
      'ingress-nginx-2f8b9c6d8       1/1     Running   2          98d',
    ],
  },
  {
    name: 'terraform plan',
    cmd: 'terraform plan -out=tfplan',
    output: [
      'Refreshing state: aws_instance.worker, module.eks, module.vpc...',
      '',
      'Terraform will perform the following actions:',
      '  ~ module.eks.aws_autoscaling_group.workers  (config drift)',
      '  + aws_ebs_volume.prometheus-data            (new)',
      '',
      'Plan: 1 to add, 2 to change, 0 to destroy.',
    ],
  },
]

type Tone = 'idle' | 'typing' | 'done'

export function ClickableCommands() {
  const [active, setActive] = useState<DemoCommand>(demos[0])
  const [tone, setTone] = useState<Tone>('idle')
  const [typed, setTyped] = useState('')
  const [runId, setRunId] = useState(0)

  async function run(demo: DemoCommand) {
    setActive(demo)
    setTyped('')
    setTone('typing')
    setRunId((v) => v + 1)

    for (let i = 1; i <= demo.cmd.length; i++) {
      setTyped(demo.cmd.slice(0, i))
      await new Promise((r) => setTimeout(r, 22))
    }
    await new Promise((r) => setTimeout(r, 140))
    setTone('done')
  }

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-2">
        {demos.map((demo) => {
          const selected = demo.name === active.name
          const toneCls =
            selected && tone === 'typing'
              ? 'border-[#39d353]/60 bg-[#39d353]/10 text-[#39d353]'
              : selected
                ? 'border-[#f85149]/60 bg-[#f85149]/10 text-[#f85149]'
                : 'border-[#30363d] bg-[#21262d] text-[#8b949e]'
          return (
            <motion.button
              key={demo.name}
              onClick={() => void run(demo)}
              whileTap={{ scale: 0.96 }}
              className={`rounded-md border px-3 py-1.5 font-mono text-[11px] transition-colors hover:border-[#58a6ff]/60 hover:text-[#c9d1d9] ${toneCls} ${
                selected ? 'ring-1 ring-inset ring-[#39d353]/30' : ''
              }`}
            >
              {selected && tone === 'typing' && (
                <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-[#39d353] align-middle" />
              )}
              {selected && tone === 'done' && (
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#3fb950] align-middle" />
              )}
              {demo.name}
            </motion.button>
          )
        })}
      </div>

      <div className="mt-2.5 overflow-hidden rounded-md border border-[#30363d] bg-[#21262d] font-mono text-[12px]">
        <div className="flex items-center gap-1.5 border-b border-[#30363d] px-2.5 py-1.5">
          <span className="text-[#39d353]">$</span>
          <span className="text-[#b1bac4]">{typed || ' '}</span>
          {tone === 'typing' && (
            <span className="inline-block h-[0.9em] w-[7px] animate-blink bg-[#39d353]" />
          )}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.name}-${runId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-2.5 py-2 text-[#8b949e]"
          >
            {tone === 'done' &&
              active.output.map((l, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="whitespace-pre"
                >
                  {l}
                </motion.p>
              ))}
            {tone !== 'done' && (
              <p className="text-[#6e7681]">_ · awaiting input…</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
