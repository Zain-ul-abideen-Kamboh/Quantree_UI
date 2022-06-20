import React from "react";
import secp from '../../../../assets/images/secp.png'
import cdc from '../../../../assets/images/cdc.png'
import mufap from '../../../../assets/images/mufap.png'


const PrimaryPartner = ( )=>{
    return(
        <section className="section big-partners bg-primary">
        <div className="container">
            <div className="section-heading">
                <h2 className="text-center text-white">Partners</h2>
            </div>
            <div className="row d-flex flex-column flex-sm-row justify-content-between align-items-start">
                <div className="col col-sm-6 col-md-4 text-center">
                    <p className="lead text-white">Licensed by</p>
                    <img className="d-inline-block" src={secp} alt="" />
                </div>
                <div className="col col-sm-6 col-md-4 text-center">
                    <p className="lead text-white">Supported by</p>
                    <img className="d-inline-block" src={cdc} alt=""/>
                </div>
                <div className="col col-sm-6 col-md-4 text-center">
                    <p className="lead text-white">Partnered by</p>
                    <img className="d-inline-block" src={mufap} alt="" />
                </div>
            </div>
        </div>
    </section>
    )

}

export default PrimaryPartner;