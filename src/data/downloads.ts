export interface DownloadResource {
    title: string;
    description: string;
    file: string;
    category: 'word' | 'excel' | 'powerpoint' | 'publisher' | 'internet' | 'windows';
    type: 'pdf' | 'excel' | 'word' | 'zip';
}

export const downloads: DownloadResource[] = [
    // EXCEL
    {
        title: "Excel Ejercicio 01-A",
        description: "Operaciones sobre celdas, uso de fórmulas.",
        file: "/excel/ejercicios/excel-ejercicio-01-a.pdf",
        category: "excel",
        type: "pdf"
    },
    {
        title: "Excel Ejercicio 02-B",
        description: "Formato de celdas, y acciones básicas sobre el libro de trabajo.",
        file: "/excel/ejercicios/excel-ejercicio-02-b.pdf",
        category: "excel",
        type: "pdf"
    },
    {
        title: "Copiar, Cortar y Pegar",
        description: "Ejercicio práctico sobre manipulación básica de celdas.",
        file: "/excel/ejercicios/excel-copiar-cortar-pegar.xlsx",
        category: "excel",
        type: "excel"
    },
    {
        title: "Cálculo de Beneficio",
        description: "Hoja de práctica para cálculos de costos y beneficios.",
        file: "/excel/ejercicios/excel-ejercicio-calculo-beneficio.xlsx",
        category: "excel",
        type: "excel"
    },
    {
        title: "Ejercicios Misceláneos",
        description: "Variedad de problemas para reforzar conceptos generales.",
        file: "/excel/ejercicios/excel-ejercicio-miscelaneas.xlsx",
        category: "excel",
        type: "excel"
    },
    {
        title: "Planilla de Notas",
        description: "Crea y gestiona un registro de calificaciones estudiantiles.",
        file: "/excel/ejercicios/excel-ejercicio-planilla de notas.xlsx",
        category: "excel",
        type: "excel"
    },
    {
        title: "Función y Formato Condicional",
        description: "Aprende a resaltar datos automáticamente según reglas.",
        file: "/excel/ejercicios/excel-funcion-y-formato-condicional.xlsx",
        category: "excel",
        type: "excel"
    },
    // AQUÍ PUEDES AGREGAR MÁS ARCHIVOS DE WORD, WINDOWS, ETC.
    // {
    //     title: "Atajos de Word",
    //     description: "Lista de atajos",
    //     file: "/word/atajos.pdf",
    //     category: "word",
    //     type: "pdf"
    // }
];
