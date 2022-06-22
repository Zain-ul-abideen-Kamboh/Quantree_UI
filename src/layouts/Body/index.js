import React, {Fragment} from "react";
import Header from "../Header";
import Footer from '../Footer';

const Body = (props) =>{
    return (
        <Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default Body;