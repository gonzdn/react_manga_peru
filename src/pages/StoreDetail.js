import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { getStoreById } from "../services/service";

import "bootstrap-icons/font/bootstrap-icons.css";

function StoreDetail() {
  const { id } = useParams();
  const [store, setStore] = useState({});

  useEffect(() => {
    getStoreById(id).then((result) => {
      setStore(result);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="card mb-4">
                <div className="card-header">
                  <h2 className="card-title h4">{store.nombre}</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL +'/images/'+ store.urlFoto}`}
                        alt={`${store.nombre}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-lg-6">                      
                        <span>{store.descripcion}</span>
                        <br></br>
                        <br></br>
                        <span>{store.direccion === "" ? "Tienda online" : "Dirección: "+store.direccion}</span>                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-header">Contacto</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-whatsapp"></i> 
                  </div>
                  <div className="col-lg-10">
                  {store.numero_whatsapp === "" ? "No presenta número" 
                    : <a href={`https://wa.me/51${store.numero_whatsapp}`} target="_blank">{store.numero_whatsapp}</a>}
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-envelope"></i> 
                    </div>
                    <div className="col-lg-10">
                    {store.correo === "" ? "No presenta email" : store.correo}
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-facebook"></i>
                    </div>
                    <div className="col-lg-10">
                    <a
                      href={`${store.urlFacebook}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-2">
                    <i className="bi bi-browser-chrome"></i> 
                    </div>
                    <div className="col-lg-10">
                    {store.urlWeb === "" ? "Sin página web" : store.urlWeb}
                    </div>  
                  </div>
                </div>
              </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-header">Mapa</div>
              <div className="card-body">
                <center>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={store.urlGoogleMap}
                      width="800"
                      height="600"
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <Footer/>
    </>
  );
}

export default StoreDetail;
