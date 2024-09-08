import React from 'react'
import "./CardCasquuete1.css"
const CardCasquuete1 = ({id,imgItem,titleProudct,PrixProudct}) => {
    const HandelData = ()=>{
        console.log(id,imgItem,titleProudct,PrixProudct)
    }
  return (
    <div className='CardCasquuete1'>
        
        <div className='imgCardQas'><img src={imgItem}/></div>
       
        <div className='TitleImgCarde'>{titleProudct}</div>
        <br/>
        <div className='PrixTitle'>{PrixProudct}</div>
        <br/>
        <button onClick={HandelData}>Button</button>

    </div>
  )
}

export default CardCasquuete1