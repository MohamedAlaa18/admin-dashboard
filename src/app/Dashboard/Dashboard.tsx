import { DownloadOutlined } from "@mui/icons-material"
import Title from "components/Title"
import Cards from "./Cards"
import Section2 from "./Section2"
import Section3 from "./Section3"
import { Box, Button, Stack } from "@mui/material"


function Dashboard() {

    return (
        <>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                <Title title={"Dashboard"} subtitle={"Welcome to your dashboard"} isDashboard={true} />
                <Box sx={{ textAlign: "right", mb: 1.3 }}>
                    <Button
                        sx={{ padding: "6px 8px", textTransform: "capitalize" }}
                        variant="contained"
                        color="primary"
                    >
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Box>
            </Stack>
            <Cards />
            <Section2 />
            <Section3 />
        </>
    )
}

export default Dashboard