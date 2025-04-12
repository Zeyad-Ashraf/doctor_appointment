import { React, Fragment } from 'react'
import Description from '../../components/Description/Description'
import SpecialityMenu from '../../components/SpecialityMenu/SpecialityMenu'
import Banner from '../../components/Banner/Banner'
import './Home.css'

const Home = () => {
    return (
        <Fragment>
            <Description />
            <SpecialityMenu />
            <Banner />
        </Fragment>
    )
}

export default Home
