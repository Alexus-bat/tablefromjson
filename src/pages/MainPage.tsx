import React, { useState } from "react";
import { ITable } from "../types";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";

import {Button, TextField} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/Main.scss';

const instanceOfInterface = (object: any): object is ITable => 'header' in object && 'rows' in object;

const MainPage: React.FC = () => {
    const [data, setData] = useState<ITable[]>([]);
    const [url, setUrl] = useState<string>('');

    const handleClickAddTable = (url: string) => {
        fetch(url)
          .then(res => res.json())
          .then(table => {
            if (instanceOfInterface(table.data)) {
                setData([...data, table.data])
            } else throw new Error('Invalid object! Try again!')
          })
          .catch(e => {           
            toast.error(e.message || 'Error fetch data! Try again!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
          })
          .finally(() => setUrl(''))
    }

    const handleClickRemoveTable = (id: number) => {
        setData(data.filter((_, idx) => idx !== id))
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setUrl(e.target.value);
    }
    
    return (
        <div className="main">            
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <NavLink to='/example' className="link">
                <Button variant="contained">Example JSON</Button>
            </NavLink>
            <Button variant="contained" color="primary" onClick={() => handleClickAddTable('./data.json')}>Example Table</Button>
            {data.map((item, idx) => {
                if (item.hasOwnProperty('header') && item.hasOwnProperty('rows')) {
                    return (
                        <div key={Date.now() + idx}>
                            <Table {...item} />
                            <Button variant="contained" color="secondary" onClick={() => handleClickRemoveTable(idx)}>Remove table</Button>
                        </div>
                    )
                }
                return null
            })}
            <form>
                <TextField label="DataURL" variant="outlined" className="input" value={url} onChange={(e) => handleChangeInput(e)} />
                <Button variant="contained" color="primary" onClick={() => handleClickAddTable(url)}>Add table</Button>
            </form>
        </div>
    )
}

export default MainPage;
