import React from 'react';
import { ITable } from '../types';

import '../styles/Table.scss';

const Table: React.FC<ITable> = ({ header, rows }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        {header.map((item, idx) => (
                            <th key={Date.now() + idx}>{item.column_name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((item, idx) => (
                        <tr key={Date.now() + idx}>
                            {                            
                                Object.keys(item).map((obj) => (
                                    <td key={Date.now() + obj}>{item[obj] ?? ''}</td>
                                ))   
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
