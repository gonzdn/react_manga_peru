import React from "react";

function Results(props) {
  return (
    <>
      {props.stores.map((store) => {
        return (
          <div key={store.id} className="col-lg-6">
            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h2 className="card-title h4">{store.nombre}</h2>
                <a className="btn btn-primary" href="#!">
                  Ver tienda →
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Results;
