"use client"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data";

function Contact() {

    return (
        <div style={{ height: 600, width: '98%', marginInline: "auto" }}>
            <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} />
        </div>
    )
}

export default Contact