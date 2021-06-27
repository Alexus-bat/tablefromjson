import React, { useState, useEffect } from "react";
import { ITable } from "../types";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const ExampleJSON: React.FC = () => {
    const [data, setData] = useState<ITable | {}>({})
    
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(table => setData(table.data))
        .catch(e => console.log(e))
    }, [])

    return (
        <div className="Example">
            <NavLink to='/' className="link">
                <Button variant="contained" color="primary">Back</Button>
            </NavLink>
            <pre>{JSON.stringify(data, null, '\t')}</pre>
        </div>
    )
}

export default ExampleJSON;
