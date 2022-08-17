import { Container, Box } from '@mui/material'
import React from 'react'
import './styles.scss'
export const Home = () => {
    return (
        <>
           {/*  <header >

            </header> */}
            <Container maxWidth="sm">
                <Box sx={{ top:'0px', marginTop:'0px', bgcolor: '#cfe8fc', height: '100vh' }}>

                <h1>HOME</h1>

                </Box>
            </Container>
            <div className=''>
            </div>
        </>
    )
}
