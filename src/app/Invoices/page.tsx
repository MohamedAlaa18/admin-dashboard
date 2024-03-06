"use client"
import { DataGrid } from "@mui/x-data-grid"
import { columns, rows } from "./data"


function Invoices() {
  return (
    <div style={{ height: 600, width: '98%', marginInline: "auto" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  )
}

export default Invoices