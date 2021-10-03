import React from 'react';


interface Props{
    result:string
}
const InputComponent: React.FC<Props> =({result})=> {
    
    return (
        <div className="showResult col-8">
            <p>{result}</p>
        </div>
    )
}

export default InputComponent