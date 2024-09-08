import React from 'react'
import "./Casquette.css"
import ProudctCasquette from './ApiCasquette'
import CardCasquuete1 from './CardCasquuete1'
const Casquette = () => {
 
    console.log(ProudctCasquette)
  return (
    <div className='Casquette'> 
     <div className='CasquetteTitle'>NOS PRODUITS</div>


     <div className='Container__NOS_PRODUITS'>
        <div className='FatherProudct'>

            {ProudctCasquette.map((item)=><CardCasquuete1
           
            id = {item.id} 
            key={item.id}
            imgItem={item.imgLink} titleProudct={item.namerProudct}  PrixProudct ={item.prix} />)}
        </div>
     </div>


    </div>
  )
}

export default Casquette