import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './styles.scss'
export const SocialCards = () => {
    return (
        <div className=''>
            <h2> Social </h2>

            <div className='container_cards'>

                <a href='https://github.com/faridvl/' target="_blank" rel="noreferrer">
                    <div className='card' >
                        <div className='icon'>
                            <GitHubIcon sx={{ width: '45px', height: '45px' }} />
                        </div>
                       {/*  <div className='skill_name'>
                            <p>Github</p>
                        </div> */}

                    </div>
                </a>

                <a href='https://www.linkedin.com/in/faridvillacis/' target="_blank" rel="noreferrer">
                    <div className='card' >
                        <div className='icon'>
                            <LinkedInIcon sx={{ width: '45px', height: '45px' }} />
                        </div>
                        {/* <div className='skill_name'>
                            <p>LinkedIn</p>
                        </div> */}

                    </div>
                </a>

                <a href='https://wa.me/50688165808' target="_blank" rel="noreferrer">
                    <div className='card' >
                        <div className='icon'>
                            <WhatsAppIcon sx={{ width: '45px', height: '45px' }} />
                        </div>
                        {/* <div className='skill_name'>
                            <p>WhatsApp</p>
                        </div> */}

                    </div>
                </a>

            </div>
        </div>
    )
}
