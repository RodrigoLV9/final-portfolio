import Card from './Card'
import styles from '../../styles/Skills.module.css'
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
        "name": "Js",
        "url": "https://skillicons.dev/icons?i=js"
      },
      {
        "name": "React",
        "url": "https://skillicons.dev/icons?i=react"
      },
      {
        "name": "Next",
        "url": "https://skillicons.dev/icons?i=next"
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
        "name": "Threejs",
        "url": "https://skillicons.dev/icons?i=threejs"
      },
      {
        "name": "Ts",
        "url": "https://skillicons.dev/icons?i=ts"
      },
      {
        "name": "Redux",
        "url": "https://skillicons.dev/icons?i=redux"
      }
    ],
    "backend": [
      {
        "name": "Nodejs",
        "url": "https://skillicons.dev/icons?i=nodejs"
      },
      {
        "name": "Express",
        "url": "https://skillicons.dev/icons?i=express"
      },
      {
        "name": "Postgresql",
        "url": "https://skillicons.dev/icons?i=postgresql"
      },
      {
        "name": "MySql",
        "url": "https://skillicons.dev/icons?i=mysql"
      },
      {
        "name": "Sqlite",
        "url": "https://skillicons.dev/icons?i=sqlite"
      },
      {
        "name": "Ts",
        "url": "https://skillicons.dev/icons?i=ts"
      },
      {
        "name": "Mongodb",
        "url": "https://skillicons.dev/icons?i=mongodb"
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
        "name": "Linux",
        "url": "https://skillicons.dev/icons?i=linux"
      },
      {
        "name": "Vscode",
        "url": "https://skillicons.dev/icons?i=vscode"
      },
      {
        "name": "Github",
        "url": "https://skillicons.dev/icons?i=github"
      },
      {
        "name": "Postman",
        "url": "https://skillicons.dev/icons?i=postman"
      },
      {
        "name": "Photoshop",
        "url": "https://skillicons.dev/icons?i=photoshop"
      },
    ]
  }
export default function SkillsCards(){
    return(
        <div className={styles.containerCards}>
          <Card title='Tools' data={dataEN.tools}/>
          <Card title='Frontend' data={dataEN.frontend}/> 
          <Card title='Backend' data={dataEN.backend}/>
        </div>
    )
}