import React, { ReactEventHandler } from "react";
import {Button} from 'reactstrap';

interface Props{
    label : string,
    onClick:(event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent: React.FC<Props> = ({label,onClick})=> {
    return (
        <React.Fragment>  
            <Button className="col-2" name={label} onClick={onClick}>{label}</Button>
        </React.Fragment>
    )
}

export default ButtonComponent;