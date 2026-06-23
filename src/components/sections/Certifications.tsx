import { motion } from 'framer-motion'
import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const badgeSvgs: Record<string, string> = {
  AWS: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23FF9900' d='M24 4L4 14v20l20 10 20-10V14L24 4z'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='14' fill='white' text-anchor='middle' font-weight='bold'%3EA%3C/text%3E%3C/svg%3E",
  IBM: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect fill='%230052AD' width='48' height='48' rx='8'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='10' fill='white' text-anchor='middle' font-weight='bold'%3EIBM%3C/text%3E%3C/svg%3E",
  OCI: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect fill='%23F80000' width='48' height='48' rx='24'/%3E%3Ctext x='24' y='30' font-family='Arial' font-size='10' fill='white' text-anchor='middle' font-weight='bold'%3EOCI%3C/text%3E%3C/svg%3E",
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Verified Credentials"
          subtitle="Industry-recognized certifications in DevOps and cloud fundamentals."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card card-hover group relative overflow-hidden rounded-xl p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                  <img src={badgeSvgs[cert.badge] ?? ''} alt={cert.badge} className="h-5 w-5" />
                </div>
                {cert.verified && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-emerald-300">
                    <BadgeCheck className="h-2.5 w-2.5" />
                    Verified
                  </span>
                )}
              </div>
              <Award className="mt-3 h-4 w-4 text-indigo-400" />
              <h3 className="mt-1.5 text-sm font-semibold leading-snug text-slate-100">{cert.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-medium text-cyan-300 transition hover:bg-cyan-500/20"
                >
                  Verify <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
