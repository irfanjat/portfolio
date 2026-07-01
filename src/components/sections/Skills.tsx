import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  Activity, Box, Cloud, Code2, Database, FileCode, GitBranch, Globe, Lock, Monitor, Router, Server, Shield, Terminal, Workflow,
  type LucideIcon,
} from 'lucide-react'
import {
  SiGithubactions, SiArgo, SiJenkins,
  SiDocker, SiKubernetes, SiHelm,
  SiTerraform, SiAnsible,
  SiPrometheus, SiGrafana,
  SiPython, SiGnubash,
  SiNginx, SiApache, SiMysql,
  SiGit, SiGithub,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import { skillCategories } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'

const categoryIcons: Record<string, LucideIcon> = {
  'CI/CD & GitOps': Workflow,
  'Containers & Orchestration': Box,
  'Infrastructure as Code': Code2,
  'Cloud & AWS': Cloud,
  'Monitoring & Observability': Activity,
  'Languages & Scripting': FileCode,
  'Linux & System Admin': Terminal,
  'Web Servers & Databases': Database,
  'Version Control': GitBranch,
}

const brandIcon: Record<string, ReactNode> = {
  'GitHub Actions': <SiGithubactions className="text-[#2088FF]" />,
  ArgoCD: <SiArgo className="text-[#EF7B4D]" />,
  Jenkins: <SiJenkins className="text-[#D24939]" />,
  Docker: <SiDocker className="text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  Helm: <SiHelm className="text-[#0F1689]" />,
  Terraform: <SiTerraform className="text-[#844FBA]" />,
  Ansible: <SiAnsible className="text-[#EE0000]" />,
  Prometheus: <SiPrometheus className="text-[#E6522C]" />,
  Grafana: <SiGrafana className="text-[#F46800]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Bash: <SiGnubash className="text-[#4EAA25]" />,
  Nginx: <SiNginx className="text-[#009639]" />,
  Apache: <SiApache className="text-[#D22128]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  Git: <SiGit className="text-[#F05032]" />,
  GitHub: <SiGithub className="text-white" />,
}

const iconColors: Record<string, string> = {
  EC2: '#FF9900',
  ECS: '#FF9900',
  EKS: '#FF9900',
  Lambda: '#FF9900',
  S3: '#FF9900',
  RDS: '#FF9900',
  DynamoDB: '#FF9900',
  ECR: '#FF9900',
  Route53: '#FF9900',
  CloudFront: '#FF9900',
  'API Gateway': '#FF9900',
  CloudWatch: '#FF9900',
  'App Runner': '#FF9900',
  'Auto Scaling': '#FF9900',
  VPC: '#FF9900',
  ALB: '#FF9900',
  'Secrets Manager': '#FF9900',
  CodePipeline: '#FF9900',
  CodeBuild: '#FF9900',
  CodeDeploy: '#FF9900',
  CloudFormation: '#FF9900',
  IAM: '#FF9900',
}

const AwsIcon = () => <FaAws className="text-[#FF9900]" />

const awsFallbackIcons: Record<string, LucideIcon> = {
  EC2: Server,
  ECS: Box,
  EKS: Box,
  Lambda: Code2,
  S3: Database,
  RDS: Database,
  DynamoDB: Database,
  ECR: Box,
  Route53: Globe,
  CloudFront: Globe,
  'API Gateway': Router,
  CloudWatch: Monitor,
  'App Runner': Server,
  'Auto Scaling': Activity,
  VPC: Shield,
  ALB: Router,
  'Secrets Manager': Lock,
  CodePipeline: Workflow,
  CodeBuild: Code2,
  CodeDeploy: Workflow,
  CloudFormation: Code2,
  IAM: Shield,
  SSH: Terminal,
  'Firewall (UFW)': Shield,
  'Cron Jobs': Activity,
  Systemd: Server,
  'Log Management': Activity,
  YAML: FileCode,
  JSON: FileCode,
  HCL: FileCode,
}

const itemBorderThemes: Record<string, string> = {
  cyan: 'border-cyan-500/20',
  emerald: 'border-emerald-500/20',
  violet: 'border-indigo-500/20',
  rose: 'border-rose-500/20',
}

const itemBgThemes: Record<string, string> = {
  cyan: 'bg-cyan-500/[0.04]',
  emerald: 'bg-emerald-500/[0.04]',
  violet: 'bg-indigo-500/[0.04]',
  rose: 'bg-rose-500/[0.04]',
}

const accentDot: Record<string, string> = {
  cyan: 'bg-cyan-500 shadow-[0_0_6px_#06b6d4]',
  emerald: 'bg-emerald-500 shadow-[0_0_6px_#10b981]',
  violet: 'bg-indigo-500 shadow-[0_0_6px_#6366f1]',
  rose: 'bg-rose-500 shadow-[0_0_6px_#f43f5e]',
}

const progressBar: Record<string, string> = {
  cyan: 'bg-gradient-to-r from-cyan-500/60 to-cyan-400/40',
  emerald: 'bg-gradient-to-r from-emerald-500/60 to-emerald-400/40',
  violet: 'bg-gradient-to-r from-indigo-500/60 to-indigo-400/40',
  rose: 'bg-gradient-to-r from-rose-500/60 to-rose-400/40',
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Toolkit"
          title="Cloud-Native Stack"
          subtitle="Production tools across CI/CD, orchestration, IaC, AWS, and observability."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const color = cat.color as string
            const CatIcon = categoryIcons[cat.title]
            const isAws = cat.title === 'Cloud & AWS'

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.06, duration: 0.4 }}
                className="card card-hover relative overflow-hidden rounded-xl p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${itemBgThemes[color]} ${itemBorderThemes[color]} border`}
                  >
                    {isAws ? <AwsIcon /> : CatIcon ? <CatIcon className="h-5 w-5 text-slate-300" /> : null}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-100">{cat.title}</h3>
                </div>

                <div className="flex flex-col gap-2">
                  {cat.skills.map((skill, si) => {
                    const BrandedIcon = brandIcon[skill.name]
                    const FallbackIcon = awsFallbackIcons[skill.name]
                    const colorOverride = iconColors[skill.name]
                    const level = skill.level

                    let icon: ReactNode
                    if (BrandedIcon) {
                      icon = BrandedIcon
                    } else if (isAws) {
                      icon = FallbackIcon ? (
                        <FallbackIcon style={{ color: colorOverride }} />
                      ) : (
                        <AwsIcon />
                      )
                    } else if (FallbackIcon) {
                      icon = <FallbackIcon className="text-slate-400" />
                    } else {
                      icon = null
                    }

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.02 }}
                        className={`relative rounded-lg border ${itemBorderThemes[color]} ${itemBgThemes[color]} px-3 py-2.5 overflow-hidden group hover:border-opacity-40 transition-all`}
                      >
                        <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l ${accentDot[color]}`} />

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="shrink-0 text-sm [&>svg]:h-4 [&>svg]:w-4">
                              {icon}
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-slate-200 truncate group-hover:text-slate-50 transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="mt-0.5 text-[10px] text-slate-500 leading-relaxed truncate">
                                {skill.usecase}
                              </div>
                            </div>
                          </div>
                          <span className="shrink-0 font-mono text-[10px] tabular-nums text-slate-500">{level}%</span>
                        </div>

                        <div className="mt-1.5 h-1 w-full rounded-full bg-white/[0.04] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${progressBar[color]} transition-all duration-700`}
                            style={{ width: `${level}%` }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
