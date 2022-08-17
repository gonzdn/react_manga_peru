import React from 'react'

import { Link } from "react-router-dom";

function StoreCard({ store: { id_store, urlFoto, nombre } }) {
  return (
    
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mb-4 animate__animated animate__fadeInUp">
        <Link to={`/storedetail/${id_store}`}>
          <img
            className="card-img-top img-fluid"
            src={`${process.env.PUBLIC_URL + '/images/' + urlFoto}`}
            alt={`${nombre}`}
            loading="lazy"
            draggable="false"
          />
        </Link>
        <div className="card-body">
          <h2 className="card-title h4">{nombre}</h2>
          <Link to={`/storedetail/${id_store}`} className="btn btn-primary">
            Ver tienda →
          </Link>
        </div>
      </div>
      </div>
            
  )
}

export default StoreCard