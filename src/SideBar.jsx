import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faHouse, faWallet, faCartShopping, faUser, faGear, faRightFromBracket, faShop, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
  return (
    <div>
       <h3><FontAwesomeIcon icon={faShop} />OnShop</h3>
                <section className='nav'>
                    <ul>
                        <li><FontAwesomeIcon icon={faHouse} />  Home</li>
                        <li><FontAwesomeIcon icon={faInbox} />Categories</li>
                        <li><FontAwesomeIcon icon={faWallet} />Wallet</li>
                        <li><FontAwesomeIcon icon={faCartShopping} />Cart</li>
                        <li><FontAwesomeIcon icon={faUser} />User Profile</li>
                        <li><FontAwesomeIcon icon={faGear} />Settings</li>
                    </ul>
                    <strong><FontAwesomeIcon icon={faRightFromBracket} />LogOut</strong>
                </section>
    </div>
  )
}

export default SideBar
