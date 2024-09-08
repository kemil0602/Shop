import React from 'react'
import "./NavNar.css"
 const  Navbar = () => {
  return (
    <div className='container__nav__bar'>
        
        <div className='logo'>MENZEL PARIS</div>
        <div className='nav__logo'>
            <ul>
                <li>Accueil </li>
                <li>Produits
                </li>
                <li>Mon Compte
                </li>
             <li>Contact
             </li>
            </ul>
        </div>
        <div className='panier__logo'>
            <img src='./iamges/panier.png'  alt=""/>
        </div>



    </div>
  )
}


export default Navbar