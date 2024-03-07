"use client"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Box, Typography, useTheme } from "@mui/material"
import { columns, rows } from "./data";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

function Team() {
    const theme = useTheme();

    const customColumns: GridColDef[] = columns.map((col) => {
        if (col.field === 'access') {
            return {
                ...col,
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
            };
        }
        return col;
    });
    return (
        <div style={{ height: 600, width: '98%', marginInline: "auto" }}>
            <DataGrid rows={rows} columns={customColumns} />
        </div>
    )
}

export default Team