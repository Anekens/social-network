import preloader from "../../../assets/images/preloader/Spinner-1s-200px.svg";
import React from "react";
import s from './Preloader.module.css'


const Preloader = () => {
    return (
        <div className={s.container}><img src={preloader} /></div>
    )
};

export default Preloader