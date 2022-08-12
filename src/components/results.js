import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  return (
    <>
      {props.stores.map((store) => {
        return (
          <div key={store.id} className="col-md-6 col-lg-4">
            <div className="card mb-4 animate__animated animate__fadeInUp" style={{width: "16rem"}}>            
              <Link to={`/storedetail/${ store.id_store }`}>
              <img
                        className="card-img-top img-fluid"
                        src={`${process.env.PUBLIC_URL +'/images/'+ store.urlFoto}`}
                        alt={`${store.nombre}`}
                        loading="lazy"
                      />
              </Link>
              <div className="card-body">
                <h2 className="card-title h4">{store.nombre}</h2>
                <Link to={`/storedetail/${ store.id_store }`} className="btn btn-primary">
                  Ver tienda →
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Results;
