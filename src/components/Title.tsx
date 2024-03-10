"use client"
import { Box, Typography, useTheme } from "@mui/material"

interface props {
    title: string,
    subtitle: string,
    isDashboard: boolean
}
function Title({ title, subtitle, isDashboard }: props) {
    const theme = useTheme();
    return (
        <Box mb={isDashboard ? 0 : 4}>
            <Typography variant="h5" sx={{ color: theme.palette.info.light, fontWeight: "bold" }}>{title}</Typography>
            <Typography variant="body1">{subtitle}</Typography>
        </Box>
    )
}

export default Title