"use client"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data";
import Title from "components/Title";
import { Box } from "@mui/material";

function Contact() {

    return (
        <Box style={{ height: 600, width: '98%', marginInline: "auto" }}>
            <Title title={"Contacts"} subtitle={"List of Contacts for Future Reference"} isDashboard={false} />
            <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
        </Box>
    )
}

export default Contact