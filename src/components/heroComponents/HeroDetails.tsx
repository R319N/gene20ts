import { slideIn } from '@/utils/motion'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import ArrowDown from '@mui/icons-material/ArrowDownward'

const HeroDetails = () => {
  const proffessionality = " Web Developer\nand UI Designer"

  return (
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
      <Box gap={{ xs: 4, sm: 1, xl: 4 }}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: { xs: "0vh", sm: "20vh", xl: "10vh" }
        }}>
        <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }} gap={1}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "32px", sm: "24px", xl: "48px" },
              display: "flex",
              fontWeight: (theme) => theme.typography.fontWeightBold,
              justifySelf: "center",
              color: (theme) => theme.palette.primary.main,
              letterSpacing: "2px",
            }}
          >
            wilfred
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: "32px", sm: "24px", xl: "48px" },
              letterSpacing: "2px",
              fontWeight: (theme) => theme.typography.fontWeightBold,
              display: "flex",
              justifySelf: "center",
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            reign
          </Typography>
        </Box>
        <Stack
          gap={{ xs: 4, sm: 2, xl: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%", xl: "60%" } }}>
            <Typography
              variant='h1'
              textAlign={{ xs: "center", sm: "left" }}
              sx={{ fontSize: { xs: "44px", sm: "32px", xl: "68px" } }}>
              {proffessionality}
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <GlowingButtonOutlined
              variant="outlined"
              type="button"
              // size={{xs:"large"}}
              sx={{ width: { xs: "50%", sm: "100px", xl: "20%" } }}
            >
              My Work
            </GlowingButtonOutlined>
            <GlowingButton
              variant="outlined"
              type="button"
              // size="large"
              sx={{ width: { xs: "50%", sm: "100px", xl: "20%" } }}
            >
              Contact Me
            </GlowingButton>
            <ArrowDown />
          </Stack>
        </Stack>

      </Box>
    </motion.div>
  )
}

export default HeroDetails
