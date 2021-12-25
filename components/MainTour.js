import React from 'react'
import Style from '../styles/toursModal/mainTour.module.css'

const MainTour = ({ children}) => {
    return <div className={Style.MainTour}>{children}</div>;
}

export default MainTour
