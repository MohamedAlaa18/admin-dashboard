"use client"
import { DataGrid } from "@mui/x-data-grid"
import { columns, rows } from "./data"
import { Box } from "@mui/material"
import Title from "components/Title"


function Invoices() {
  return (
    <Box sx={{ height: 600, width: '98%', marginInline: "auto" }}>
      <Title title={"Invoices"} subtitle={"List of Invoice Balances"} isDashboard={false} />
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  )
}

export default Invoices