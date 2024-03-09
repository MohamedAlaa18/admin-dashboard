"use client"
import { DownloadOutlined } from "@mui/icons-material";
import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "app/Line/page";
import { Transactions } from "./data";

function Section2() {
    const theme = useTheme();

    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>
            <Paper sx={{ maxWidth: 900, minWidth: "400px", flexGrow: 1 }}>
                <Stack direction={"row"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <Typography
                            color={theme.palette.secondary.main}
                            mb={1}
                            mt={2}
                            ml={4}
                            variant="h6"
                            fontWeight={"bold"}
                        >
                            Revenue Generated
                        </Typography>
                        <Typography variant="body2" ml={4}>
                            $59,342.32
                        </Typography>
                    </Box>

                    <Box>
                        <IconButton sx={{ mr: 3 }}>
                            <DownloadOutlined />
                        </IconButton>
                    </Box>
                </Stack>

                <Line isDashboard={true} />
            </Paper>

            <Box sx={{ maxHeight: 380, minWidth: "280px", flexGrow: 1, overflow: "auto" }}>
                <Paper>
                    <Typography
                        color={theme.palette.secondary.main}
                        fontWeight={"bold"}
                        p={1.2}
                        variant="h6"
                    >
                        Recent Transactions
                    </Typography>
                </Paper>
                {
                    Transactions.map(transaction => (
                        <Paper
                            key={transaction.txId}
                            sx={{
                                mt: 0.4,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box p={1.2}>
                                <Typography variant="body1">text</Typography>
                                <Typography variant="body2">text</Typography>
                            </Box>
                            <Typography variant="body1"></Typography>

                            <Typography
                                borderRadius={1.4}
                                p={1}
                                bgcolor={theme.palette.error.main}
                                color={theme.palette.getContrastText(theme.palette.error.main)}
                                variant="body2"
                            >
                                text
                            </Typography>
                        </Paper>
                    ))
                }
            </Box>
        </Stack>
    )
}

export default Section2