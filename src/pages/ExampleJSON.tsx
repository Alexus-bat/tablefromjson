import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

import data from '../data.json';

const ExampleJSON: React.FC = () => {
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
