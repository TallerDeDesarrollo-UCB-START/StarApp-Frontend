import React from 'react'
import { Button } from '@material-ui/core'
import XLSX from 'xlsx'


const DownloadExcelButton = () => {
    const data = [
        {"name":"John", "city": "Seattle"},
        {"name":"Mike", "city": "Los Angeles"},
        {"name":"Zach", "city": "New York"}
    ]
    const writeIntoFile = () => {
        var ws = XLSX.utils.json_to_sheet(data)

        /* add to workbook */
        var wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "People")

        /* generate an XLSX file */
        XLSX.writeFile(wb, "sheetjs.xlsx")
    }
    return (
        <Button variant="contained" color="secondary" onClick={writeIntoFile}>
            Descargar
        </Button>
    )
}

export default DownloadExcelButton
