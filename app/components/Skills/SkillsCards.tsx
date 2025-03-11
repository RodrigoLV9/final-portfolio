import Card from './Card'
import styles from '../../styles/Skills.module.css'
const dataEN={
    "frontend": [
      {
        "name": "html",
        "url": "https://skillicons.dev/icons?i=html"
      },
      {
        "name": "css",
        "url": "https://skillicons.dev/icons?i=css"
      },
      {
        "name": "js",
        "url": "https://skillicons.dev/icons?i=js"
      },
      {
        "name": "react",
        "url": "https://skillicons.dev/icons?i=react"
      },
      {
        "name": "next",
        "url": "https://skillicons.dev/icons?i=next"
      },
      {
        "name": "sass",
        "url": "https://skillicons.dev/icons?i=sass"
      },
      {
        "name": "bootstrap",
        "url": "https://skillicons.dev/icons?i=bootstrap"
      },
      {
        "name": "tailwind",
        "url": "https://skillicons.dev/icons?i=tailwind"
      },
      {
        "name": "threejs",
        "url": "https://skillicons.dev/icons?i=threejs"
      },
      {
        "name": "ts",
        "url": "https://skillicons.dev/icons?i=ts"
      },
      {
        "name": "redux",
        "url": "https://skillicons.dev/icons?i=redux"
      }
    ],
    "backend": [
      {
        "name": "nodejs",
        "url": "https://skillicons.dev/icons?i=nodejs"
      },
      {
        "name": "express",
        "url": "https://skillicons.dev/icons?i=express"
      },
      {
        "name": "postgresql",
        "url": "https://skillicons.dev/icons?i=postgresql"
      },
      {
        "name": "mysql",
        "url": "https://skillicons.dev/icons?i=mysql"
      },
      {
        "name": "sqlite",
        "url": "https://skillicons.dev/icons?i=sqlite"
      },
      {
        "name": "ts",
        "url": "https://skillicons.dev/icons?i=ts"
      },
      {
        "name": "mongodb",
        "url": "https://skillicons.dev/icons?i=mongodb"
      }
    ],
    "tools": [
      {
        "name": "git",
        "url": "https://skillicons.dev/icons?i=git"
      },
      {
        "name": "figma",
        "url": "https://skillicons.dev/icons?i=figma"
      },
      {
        "name": "linux",
        "url": "https://skillicons.dev/icons?i=linux"
      },
      {
        "name": "vscode",
        "url": "https://skillicons.dev/icons?i=vscode"
      },
      {
        "name": "github",
        "url": "https://skillicons.dev/icons?i=github"
      },
      {
        "name": "postman",
        "url": "https://skillicons.dev/icons?i=postman"
      },
      {
        "name": "photoshop",
        "url": "https://skillicons.dev/icons?i=photoshop"
      },
    ]
  }
export default function SkillsCards(){
    return(
        <div className={styles.containerCards}>
          <Card title='Tools' data={dataEN.tools}/>
          <Card title='Frontend' data={dataEN.frontend}/> 
          <Card title='backend' data={dataEN.backend}/>
        </div>
    )
}