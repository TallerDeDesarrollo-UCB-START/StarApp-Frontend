import React from 'react';
import XLSX from 'xlsx';
import MyButton from '../button';


const DownloadExcelButton = ({data}) => {
    const writeIntoFile = () => {
        var ws = XLSX.utils.json_to_sheet(data)

        /* add to workbook */
        var wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, "People")

        /* generate an XLSX file */
        XLSX.writeFile(wb, "usuarios.xlsx")
    }
    return (
        <MyButton className="excel" onClick={writeIntoFile}>
            Descargar
        </MyButton>
    )
}

export default DownloadExcelButton
