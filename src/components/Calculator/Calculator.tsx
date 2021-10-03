import React, {useState} from "react";
import InputComponent from "../InputComponent/InputComponent";
import  ButtonComponent from "../Buttons/ButtonComponent";


const Calculator: React.FC =()=> {

    const  [inputList,setInputList] = useState<string[]>([])
    const [result,setResult] = useState<string>("")
    
    
    const onButtonClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if(e.currentTarget.innerText==="="){
            
            try{
                setResult(eval(result).toString());
            }
            catch(e){
                setResult("error")
            }
            
        }
        else if(e.currentTarget.innerText==="C"){
            setResult("");
        }
        
        else{
            setInputList([...inputList,e.currentTarget.innerText])
            setResult(result.concat(e.currentTarget.innerText));
        }
    }
    return (
        <div className="container"  >
            <div className="row">
                <div className="header" >
                <h3>Calculator App</h3>
                </div>
                
            </div>
            <div className="row">
                <InputComponent result={result} />
            </div>
            
            <div className="row">
                
                    <ButtonComponent label="(" onClick={onButtonClick}/>
               
               
                    <ButtonComponent label = ")" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "C" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "+" onClick={onButtonClick}/>
                
            </div>
            <div className="row">
                
                    <ButtonComponent label="1" onClick={onButtonClick}/>
               
               
                    <ButtonComponent label = "2" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "3" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "-" onClick={onButtonClick}/>
            </div>
               
               <div className="row">
                
                    <ButtonComponent label="4" onClick={onButtonClick}/>
               
               
                    <ButtonComponent label = "5" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "6" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "*" onClick={onButtonClick}/>
                </div>
                <div className="row">
                    <ButtonComponent label="7" onClick={onButtonClick}/>
               
               
                    <ButtonComponent label = "8" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "9" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "/" onClick={onButtonClick}/>
                </div>
                <div className="row">
                    <ButtonComponent label="." onClick={onButtonClick}/>
               
               
                    <ButtonComponent label = "0" onClick={onButtonClick}/>
                
               
                    <ButtonComponent label = "=" onClick={onButtonClick}/>
                
                </div>


            </div>
       
    )
    
}

export default Calculator;