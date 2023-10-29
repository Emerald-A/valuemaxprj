import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faHouse, faWallet, faCartShopping, faUser, faGear, faRightFromBracket, faShop, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="position-relative d-flex me-auto">
                                <input className="form-control me-2 search-input" type="search" placeholder="Search"/>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="position-absolute end-0" />
                            </form>

                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faWallet} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faInbox} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faUser} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default Nav
