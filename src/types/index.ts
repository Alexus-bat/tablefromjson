export interface ITable {
    header: IHeader[],
    rows: IRows[]
}

interface IHeader {
    column_name: string
}

interface IRows {
    [key: string]: any
}
