import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { SectionHeading } from '../ui/SectionHeading'
import { MagneticButton } from '../ui/MagneticButton'

export function ResumeCTA() {
  return (
    <section id="resume-cta" className="section-padding relative content-visibility-auto">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="09" label="resume" title="Want the full picture?" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mt-8 flex flex-col items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg2)] p-8 text-center"
        >
          <FileText className="h-6 w-6 text-[var(--color-green)]" />
          <p className="text-balance text-[15px] leading-relaxed text-[var(--color-muted)]">
            Download my resume for a concise, recruiter-ready summary of projects, skills, and certifications.
          </p>
          <MagneticButton href={personal.resume} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
