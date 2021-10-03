import React, { ReactEventHandler } from "react";
import ButtonComponent from './ButtonComponent'

// interface Props{
//     label : string,
//     onClick:(event: React.MouseEvent<HTMLButtonElement>) => void
// }

export default {
    title: 'ButtonComponent',
    component: ButtonComponent
}

export const Basic =(label,onClick)=> (
    <ButtonComponent  label="Demo" onClick={onClick}/>
)