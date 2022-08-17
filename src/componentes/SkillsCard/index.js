import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles.scss'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaJs, fasails } from 'react-icons/fa';
import SailingIcon from '@mui/icons-material/Sailing';
import { Express, Mongodb, Mysql, Git, Csharp, Docker, Graphql, Postman, Flutter, Angular} from 'styled-icons/simple-icons';
export const SkillsCard = () => {
  return (
    <div className='skills_container'>
      <h3> Skills</h3>
      <div className='contaier_cards'>

        <div className='card' >
          <div className='icon'>
            <FaHtml5 className='icons' />
          </div>
          <div className='skill_name'>
            <p>HTML</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <FaCss3Alt className='icons' />
          </div>
          <div className='skill_name'>
            <p>CSS</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <FaSass className="" />
          </div>
          <div className='skill_name'>
            <p>SASS</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <FaReact className="icons" />
          </div>
          <div className='skill_name'>
            <p>React</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Angular height={40} className="icons" />
          </div>
          <div className='skill_name'>
            <p>Angular</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Express height={40} />
          </div>
          <div className='skill_name'>
            <p>ExpressJS</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <SailingIcon className="icons" />
          </div>
          <div className='skill_name'>
            <p>Sails</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Mongodb height={40} />
          </div>
          <div className='skill_name'>
            <p>MongoDB</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Mysql className="icons" height={40} />
          </div>
          <div className='skill_name'>
            <p>MySQL</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Git className="icons"  height={40} />
          </div>
          <div className='skill_name'>
            <p>Git</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Csharp className="icons" height={40} />
          </div>
          <div className='skill_name'>
            <p>Csharp</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Docker height={40} className="icons" />
          </div>
          <div className='skill_name'>
            <p>Docker</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Flutter height={40} className="icons" />
          </div>
          <div className='skill_name'>
            <p>Flutter</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Graphql height={40} className="icons" />
          </div>
          <div className='skill_name'>
            <p>GraphQL</p>
          </div>
        </div>

        <div className='card' >
          <div className='icon'>
            <Postman height={40} className="icons" />
          </div>
          <div className='skill_name'>
            <p>PostMan</p>
          </div>
        </div>

      </div>
    </div>
  )
}
