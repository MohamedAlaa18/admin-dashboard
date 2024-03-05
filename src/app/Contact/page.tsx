"use client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Box, Typography, useTheme } from "@mui/material"

import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import { rows } from "app/Team/data";

function Contact() {
    const theme = useTheme();
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50, align: "center", headerAlign: "center" },
        { field: 'name', headerName: 'Name', width: 150, align: "center", headerAlign: "center" },
        { field: 'email', headerName: 'Email', flex: 1, align: "center", headerAlign: "center" },
        { field: 'age', headerName: 'Age', width: 50, align: "center", headerAlign: "center" },
        { field: 'phone', headerName: 'Phone', flex: 1, align: "center", headerAlign: "center" },
        {
            field: 'access', headerName: 'Access', flex: 1, align: "center", headerAlign: "center",
            renderCell: ({ row: { access } }) => (
                <Box sx={{
                    p: "5px", width: "99px", borderRadius: "3px", display: "flex", textAlign: "center", justifyContent: "space-evenly",
                    bgcolor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
                    color: "#fff"
                }}>
                    {access === "Admin" ? <AdminPanelSettingsOutlined fontSize="small" /> : access === "Manager" ? <SecurityOutlined fontSize="small" /> : <LockOpenOutlined fontSize="small" />}
                    <Typography variant="body1" sx={{ fontSize: "13px" }}>{access}</Typography>
                </Box>
            ),
        },
    ];
    return (
        <div style={{ height: 600, width: '98%', marginInline: "auto" }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}

export default Contact