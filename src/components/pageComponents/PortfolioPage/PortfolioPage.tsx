import { styles } from '@/styles/styles'
import { Box, Container } from '@mui/material'
import React from 'react'
import HeadingText from '../../headerBanner'
import MyGallery from './MyGallery'

const PortfolioPage = () => {
    return (
        <section>
            <Container sx={{ ...styles.container }}>
                <Box sx={{ ...styles.center_flex }}>
                    <HeadingText header="welcome to my gallery" />
                </Box>
                {/* <MyGallery/> */}
            </Container>
        </section>
    )
}

export default PortfolioPage
