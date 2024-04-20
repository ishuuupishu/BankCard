import React, { useState } from "react";

function BreadCrumps(props) {
    return(
        <div>
            {/* Breadcrumb */}
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li><a href="index.html">Home</a></li>
            <li className="active"> / {props.page}</li>
          </ul>
        </div>
      </section>
      {/* //Breadcrumb */}
        </div>
    )
}

export default BreadCrumps