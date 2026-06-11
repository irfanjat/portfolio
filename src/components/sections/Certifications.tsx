import { motion } from 'framer-motion'
import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const badgeSvgs: Record<string, string> = {
  AWS: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF9900' d='M18.038 10.227c-1.084-.082-2.235.184-3.178.481l-.228.07c-.088.028-.124.079-.066.158l.099.115c.046.053.108.07.198.046.702-.19 1.873-.465 2.721-.38.576.058 1.227.322 1.227.935 0 .633-.694.987-1.76 1.312-1.473.446-3.176 1.123-3.176 3.091 0 1.906 1.42 3.025 3.239 3.025.788 0 1.568-.163 2.229-.454l.129-.058c.085-.04.112-.08.112-.159v-.249c0-.075-.042-.115-.12-.115h-.038c-.763.283-1.56.456-2.312.456-1.128 0-2.155-.584-2.155-1.651 0-1.012.843-1.398 1.96-1.73 1.403-.417 3.148-1.018 3.148-3.035 0-1.727-1.36-2.592-3.21-2.592m-5.55.076v.291c0 .08.048.123.126.123h.82c.126 0 .175.049.175.17v4.632c0 .823.039 1.607-.078 2.307-.097.588-.504 1.1-1.074 1.382-.448.223-.832.271-1.37.271-.288 0-.625-.04-.914-.104l-.168-.038c-.064-.015-.106.009-.106.08v.28c0 .073.042.109.108.127l.393.088c.426.087.874.123 1.302.123.743 0 1.38-.086 2.011-.497.566-.37.845-1.027.933-1.694.101-.772.07-1.56.07-2.477V10.595c0-.145.029-.194.175-.194h.795c.082 0 .13-.042.13-.123v-.29c0-.08-.048-.121-.13-.121h-2.95c-.078 0-.126.042-.126.121m-4.12.044c-.746 0-1.511.166-2.128.546l-.123.07c-.058.036-.075.08-.038.137l.148.168c.046.053.11.065.184.034.544-.234 1.26-.451 1.83-.451.746 0 1.206.275 1.206.906 0 .336-.27.494-.772.689-.773.3-1.673.67-1.673 1.75 0 1.009.7 1.531 1.515 1.531.508 0 1.017-.13 1.428-.347l.074-.04c.053-.027.085-.059.085-.12v-.198c0-.072-.036-.1-.097-.1h-.029c-.41.167-1.018.316-1.415.316-.52 0-1.016-.21-1.016-.743 0-.393.343-.552.84-.727.785-.28 1.582-.586 1.582-1.689 0-.972-.708-1.541-1.68-1.541'/%3E%3C/svg%3E",
  IBM: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%230062FF' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8'/%3E%3Ctext x='12' y='16' font-size='10' font-weight='bold' fill='%230062FF' text-anchor='middle'%3EIBM%3C/text%3E%3C/svg%3E",
  OCI: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%23F80000'/%3E%3Cpath fill='%23FFFFFF' d='M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6'/%3E%3Ctext x='12' y='17' font-size='9' font-weight='bold' fill='%23FFFFFF' text-anchor='middle'%3EOCI%3C/text%3E%3C/svg%3E",
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Certifications"
          title="Verified Credentials"
          subtitle="Industry-recognized certifications in DevOps and cloud fundamentals."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-cyan-400/30 hover:glow-cyan"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition group-hover:bg-cyan-500/10" />
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80">
                  <img
                    src={badgeSvgs[cert.badge] ?? ''}
                    alt={cert.badge}
                    className="h-6 w-6"
                  />
                </div>
                {cert.verified && (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                    <BadgeCheck className="h-3 w-3" />
                    Verified
                  </span>
                )}
              </div>
              <Award className="mt-4 h-4 w-4 text-violet-400/80" />
              <h3 className="mt-2 text-sm font-semibold leading-snug text-white">{cert.title}</h3>
              <p className="mt-1.5 text-xs text-slate-500">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:glow-cyan"
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