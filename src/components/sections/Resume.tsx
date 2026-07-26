import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { resume } from '../../data/portfolio'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}${resume.fileName}`

  return (
    <section id="resume" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Resume"
          title="Download Resume"
          subtitle="Get a PDF copy of my experience, skills, and project highlights."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-orange-500/20">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{resume.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
                    {resume.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-slate-500">
                    PDF &middot; 1 page &middot; Updated {resume.updated}
                  </p>
                </div>
              </div>

              <motion.a
                href={resumeUrl}
                download={resume.downloadName}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
