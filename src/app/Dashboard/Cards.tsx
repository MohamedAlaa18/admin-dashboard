"use client"
import { DownloadOutlined } from "@mui/icons-material"
import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { ResponsivePie } from "@nivo/pie";
import { data1, data2, data3, data4 } from "./data";
import { customizedNivoTheme } from "app/Bar/theme";


function Cards() {
    const theme = useTheme();

    const cartData = [
        {
            icon: <EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />,
            title: "12,361",
            subtitle: "Emails Sent",
            chart: "",
            increase: "+14%",
            data: data1,
            scheme: 'nivo',
        },
        {
            icon: <PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />,
            title: "431,225",
            subtitle: "Sales obtained",
            chart: "",
            increase: "+21%",
            data: data2,
            scheme: 'category10',
        },
        {
            icon: <PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />,
            title: "32,441",
            subtitle: "New Clients",
            chart: "",
            increase: "+5%",
            data: data3,
            scheme: 'accent',
        },
        {
            icon: <TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />,
            title: "1,325,134",
            subtitle: "Traffic Received",
            chart: "",
            increase: "+43%",
            data: data4,
            scheme: 'dark2',
        }
    ]
    return (
        <Box>
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

            <Stack direction={"row"} gap={1} flexWrap={"wrap"} justifyContent={{ xs: "center", sm: "space-between" }}>
                {
                    cartData.map((card, index) => (
                        <Paper key={index} sx={{ minWidth: "333px", padding: 1.5, display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "space-between" }}>
                            <Stack gap={1}>
                                {card.icon}
                                <Typography variant="body2" sx={{ fontSize: "13px" }}>{card.title}</Typography>
                                <Typography variant="body2" sx={{ fontSize: "13px" }}>{card.subtitle}</Typography>

                            </Stack>
                            <Stack alignItems={"center"}>
                                <Box height={"70px"} width={"87px"}>
                                    <ResponsivePie
                                        data={card.data}
                                        theme={customizedNivoTheme(theme)}
                                        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                                        innerRadius={0.7}
                                        padAngle={0.7}
                                        cornerRadius={3}
                                        activeOuterRadiusOffset={8}
                                        borderWidth={1}
                                        enableArcLabels={false}
                                        enableArcLinkLabels={false}
                                        colors={{ scheme: card.scheme as any }}
                                        borderColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    0.2
                                                ]
                                            ]
                                        }}

                                        defs={[
                                            {
                                                id: 'dots',
                                                type: 'patternDots',
                                                background: 'inherit',
                                                color: 'rgba(255, 255, 255, 0.3)',
                                                size: 4,
                                                padding: 1,
                                                stagger: true
                                            },
                                            {
                                                id: 'lines',
                                                type: 'patternLines',
                                                background: 'inherit',
                                                color: 'rgba(255, 255, 255, 0.3)',
                                                rotation: -45,
                                                lineWidth: 6,
                                                spacing: 10
                                            }
                                        ]}
                                        fill={[
                                            {
                                                match: {
                                                    id: 'ruby'
                                                },
                                                id: 'dots'
                                            },
                                            {
                                                match: {
                                                    id: 'c'
                                                },
                                                id: 'dots'
                                            },
                                            {
                                                match: {
                                                    id: 'go'
                                                },
                                                id: 'dots'
                                            },
                                            {
                                                match: {
                                                    id: 'python'
                                                },
                                                id: 'dots'
                                            },
                                            {
                                                match: {
                                                    id: 'scala'
                                                },
                                                id: 'lines'
                                            },
                                            {
                                                match: {
                                                    id: 'lisp'
                                                },
                                                id: 'lines'
                                            },
                                            {
                                                match: {
                                                    id: 'elixir'
                                                },
                                                id: 'lines'
                                            },
                                            {
                                                match: {
                                                    id: 'javascript'
                                                },
                                                id: 'lines'
                                            }
                                        ]}
                                    />
                                </Box>
                                <Typography variant="body2" sx={{ fontSize: "13px" }}>{card.increase}</Typography>
                            </Stack>
                        </Paper>
                    ))
                }
            </Stack>
        </Box>
    )
}

export default Cards