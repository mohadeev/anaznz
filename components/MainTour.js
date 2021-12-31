import React from 'react'
import Style from '../styles/toursModal/mainTour.module.css'
import Review from './Reviews/Review'

const MainTour = ({ children}) => {
    return <div className={Style.MainTour}>
    {children} 
    </div>
}

export default MainTour
