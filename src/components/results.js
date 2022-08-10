import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  return (
    <>
      {props.stores.map((store) => {
        return (
          <div key={store.id} className="col-lg-6">
            <div className="card mb-4">            
              <Link to={`/storedetail/${ store.id_store }`}>
              <img
                  className="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
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
