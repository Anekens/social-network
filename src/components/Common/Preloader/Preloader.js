import preloader from "../../../assets/images/preloader.svg";
import React from "react";


const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img alt={"preloader"} src={preloader}/>
        </div>
    )
};

export default Preloader