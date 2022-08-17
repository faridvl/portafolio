import { Container } from '@mui/material'
import React from 'react'
import { SocialCards } from '../../componentes/SocialCards'
import './styles.scss'
export const Home = () => {
    return (
        <>
            <Container className='home_content'>


                <div className='title'>
                    <h1>Hi, im Farid Villacis Leiva</h1>

                </div>
                <div className='description'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque non nibh venenatis consectetur. Maecenas maximus nisi fermentum, bibendum nisi sit amet, pharetra felis. Curabitur elit nisl, cursus vitae fringilla vel, hendrerit non neque. Aliquam vehicula, nulla lacinia convallis scelerisque, arcu erat tempus orci, sed auctor eros lacus non tortor. Fusce porta dignissim volutpat. Donec bibendum aliquam venenatis. Maecenas consequat porta augue, nec gravida ipsum hendrerit eu. Aenean pulvinar pulvinar leo, eu tincidunt ligula tincidunt non. Morbi tristique semper velit eu malesuada. Mauris finibus cursus mi, nec pretium nulla maximus ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>
                </div>

                <SocialCards />
            </Container>
            <div className=''>
            </div>
        </>
    )
}
