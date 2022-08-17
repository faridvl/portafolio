import { Container } from '@mui/material'
import React from 'react'
import { SkillsCard } from '../../componentes/SkillsCard'
import { SocialCards } from '../../componentes/SocialCards'
import './styles.scss'
import profile1 from '../../assets/4.jpeg'
export const Home = () => {
    return (
        <>
            <Container className='home_content'>


                <div className='title'>
                    <div style={{marginRight: '45px'}}>
                        <h1>Hi, im Farid Villacis Leiva</h1>
                        <h2>Web Developer</h2>
                    </div>
                    <img src={profile1} alt="profile" />
                </div>
                <div className='description'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque non nibh venenatis consectetur. Maecenas maximus nisi fermentum, bibendum nisi sit amet, pharetra felis. Curabitur elit nisl, cursus vitae fringilla vel, hendrerit non neque. Aliquam vehicula, nulla lacinia convallis scelerisque, arcu erat tempus orci, sed auctor eros lacus non tortor. Fusce porta dignissim volutpat. Donec bibendum aliquam venenatis. Maecenas consequat porta augue, nec gravida ipsum hendrerit eu. Aenean pulvinar pulvinar leo, eu tincidunt ligula tincidunt non. Morbi tristique semper velit eu malesuada. Mauris finibus cursus mi, nec pretium nulla maximus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>
                </div>

                <SocialCards />
                <SkillsCard />
            </Container>
            <div className=''>
            </div>
        </>
    )
}
