import * as XLSX from 'xlsx';

export function readExcel(file: string, columnIndices: number[]) {
    const workbook = XLSX.readFile(file);
    const sheetName = workbook.SheetNames[0]; // Pega o nome da primeira planilha
    const worksheet = workbook.Sheets[sheetName]; // Pega a primeira planilha

    const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });

    let extractedData1: any[] = [];
    let extractedData2: any[] = [];

    jsonData.forEach((row) => {
        extractedData1.push(row[columnIndices[0]]);
        extractedData2.push(row[columnIndices[1]]);
    });

    return [extractedData1, extractedData2];
}

// let [data1, data2] = readExcel('C:\\Codigos\\Cluster\\Src\\Models\\Barretos.xlsx', [0, 1]); // Substitua 'caminho/para/seu/arquivo.xlsx' pelo caminho do seu arquivo

// console.log(data1);
// console.log(data2);
