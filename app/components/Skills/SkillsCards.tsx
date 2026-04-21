"use client"
import Card from './Card'
import styles from '../../styles/Skills.module.css'
import { useLanguage } from '@/app/Contexts/LanguageContext'
const dataEN={
    "frontend": [
      {
        "name": "HTML",
        "url": "https://skillicons.dev/icons?i=html"
      },
      {
        "name": "CSS",
        "url": "https://skillicons.dev/icons?i=css"
      },
      {
        "name": "JavaScript",
        "url": "https://skillicons.dev/icons?i=js"
      },
      {
        "name": "React",
        "url": "https://skillicons.dev/icons?i=react"
      },
      {
        "name": "Next.js",
        "url": "https://skillicons.dev/icons?i=nextjs"
      },
      {
        "name": "Sass",
        "url": "https://skillicons.dev/icons?i=sass"
      },
      {
        "name": "Bootstrap",
        "url": "https://skillicons.dev/icons?i=bootstrap"
      },
      {
        "name": "Tailwind",
        "url": "https://skillicons.dev/icons?i=tailwind"
      },
      {
        "name": "Three.js",
        "url": "https://skillicons.dev/icons?i=threejs"
      },
      {
        "name": "TypeScript",
        "url": "https://skillicons.dev/icons?i=ts"
      },
      {
        "name": "Redux",
        "url": "https://skillicons.dev/icons?i=redux"
      },
      {
        "name": "Astro",
        "url": "https://skillicons.dev/icons?i=astro"
      }
    ],
    "backend": [
      {
        "name": "Node.js",
        "url": "https://skillicons.dev/icons?i=nodejs"
      },
      {
        "name": "Express",
        "url": "https://skillicons.dev/icons?i=express"
      },
      {
        "name": "Firebase",
        "url": "https://skillicons.dev/icons?i=firebase"
      },
      {
        "name": "NestJS",
        "url": "https://skillicons.dev/icons?i=nestjs"
      },
      {
        "name": "Prisma",
        "url": "https://skillicons.dev/icons?i=prisma"
      },
      {
        "name": "C#"  ,
        "url": "https://skillicons.dev/icons?i=cs"  
      },
      {
        "name": ".NET",
        "url": "https://skillicons.dev/icons?i=dotnet"
      }
    ],
    "databases": [
      {
        "name": "PostgreSQL",
        "url": "https://skillicons.dev/icons?i=postgres"
      },
      {
        "name": "MySQL",
        "url": "https://skillicons.dev/icons?i=mysql"
      },
      {
        "name": "SQLite",
        "url": "https://skillicons.dev/icons?i=sqlite"
      },
      {
        "name": "MongoDB",
        "url": "https://skillicons.dev/icons?i=mongodb"
      },
      {
        "name": "Redis",
        "url": "https://skillicons.dev/icons?i=redis"
      }
    ],
    "devops": [
      {
        "name": "Docker",
        "url": "https://skillicons.dev/icons?i=docker"
      },
      {
        "name": "Kubernetes",
        "url": "https://skillicons.dev/icons?i=kubernetes"
      },
      {
        "name": "GitHub Actions",
        "url": "https://skillicons.dev/icons?i=githubactions"
      },
      {
        "name": "Linux",
        "url": "https://skillicons.dev/icons?i=linux"
      }
    ],
    "qa": [
      {
        "name": "Jest",
        "url": "https://skillicons.dev/icons?i=jest"
      },
      {
        "name": "Vitest",
        "url": "https://skillicons.dev/icons?i=vitest"
      },
      {
        "name": "Cypress",
        "url": "https://skillicons.dev/icons?i=cypress"
      },
      {
        "name": "Selenium",
        "url": "https://skillicons.dev/icons?i=selenium"
      },
      {
        "name": "Postman",
        "url": "https://skillicons.dev/icons?i=postman"
      },
      {
        "name": "Gherkin",
        "url": "https://skillicons.dev/icons?i=gherkin"
      }
    ],
    "tools": [
      {
        "name": "Git",
        "url": "https://skillicons.dev/icons?i=git"
      },
      {
        "name": "Figma",
        "url": "https://skillicons.dev/icons?i=figma"
      },
      {
        "name": "npm",
        "url": "https://skillicons.dev/icons?i=npm"
      },
      {
        "name": "pnpm",
        "url": "https://skillicons.dev/icons?i=pnpm"
      },
      {
        "name": "VS Code",
        "url": "https://skillicons.dev/icons?i=vscode"
      },
      {
        "name": "GitHub",
        "url": "https://skillicons.dev/icons?i=github"
      },
      {
        "name": "Photoshop",
        "url": "https://skillicons.dev/icons?i=photoshop"
      },
    ]
  }
export default function SkillsCards(){
  const {language}=useLanguage()
    return(
        <div className={styles.containerCards}>
          <Card
            title='Frontend'
            subtitle={language ? 'Interfaces dinamicas, accesibles y con foco en UX.' : 'Dynamic, accessible interfaces focused on UX.'}
            data={dataEN.frontend}
          />
          <Card
            title={language ? 'Bases de Datos' : 'Databases'}
            subtitle={language ? 'Persistencia relacional y no relacional para aplicaciones modernas.' : 'Relational and non-relational persistence for modern applications.'}
            data={dataEN.databases}
          />
          <Card
            title='Backend'
            subtitle={language ? 'APIs robustas, servicios y arquitectura escalable.' : 'Robust APIs, services and scalable architecture.'}
            data={dataEN.backend}
          />
          <Card
            title='DevOps'
            subtitle={language ? 'Contenedores, orquestacion y CI/CD para entregar software confiable.' : 'Containers, orchestration and CI/CD for reliable software delivery.'}
            data={dataEN.devops}
          />
          <Card
            title='QA'
            subtitle={language ? 'Testing unitario, integracion y end-to-end para asegurar calidad.' : 'Unit, integration and end-to-end testing to ensure quality.'}
            data={dataEN.qa}
          />
          <Card
            title={language ? 'Herramientas' : 'Tools'}
            subtitle={language ? 'Flujo de trabajo, colaboracion y productividad diaria.' : 'Daily workflow, collaboration and productivity toolkit.'}
            data={dataEN.tools}
          />
        </div>
    )
}