import React from "react";
import s from './Header.module.css'
import logo from '../assets/logo.png'



const Header = (props) => {


    return (
        <div>
        <div className={s.headerTop}>
        <div className={s.logo}><img src={logo} alt={'logo'}/></div>
        <div className={s.searchString}> <input onChange={props.handleChange} onKeyPress={(e) => {
            if (e.charCode === 13) {
                props.repoData()
            }

        }}/></div>
        </div>  </div>)
}


export default Header