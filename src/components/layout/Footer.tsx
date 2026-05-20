import { Heart, Terminal } from 'lucide-react'
import { personal } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 py-10 px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-slate-500">
          <Terminal className="h-4 w-4 text-cyan-500/60" />
          <span>
            {personal.name} � <span className="text-slate-600">{year}</span>
          </span>
        </div>
        <p className="flex items-center gap-1 text-sm text-slate-600">
          Built with <Heart className="h-3.5 w-3.5 text-rose-500/80" /> for cloud-native engineering
        </p>
        <p className="font-mono text-xs text-slate-600">kubectl apply -f portfolio.yaml</p>
      </div>
    </footer>
  )
}
