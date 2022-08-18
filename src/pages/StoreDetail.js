import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { getStoreById } from "../services/service";

import "bootstrap-icons/font/bootstrap-icons.css";

function StoreDetail() {
  const { id } = useParams();
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // react-router-dom v6

  useEffect(() => {
    getStoreById(id).then((result) => {
      if (result === undefined) {
        navigate('/');
      }
      setStore(result);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      {loading && (<div className="d-flex justify-content-center">
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Cargando tiendas...</span>
        </div>
      </div>)}
      {!loading && (
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-12 py-2">
              <Link to={'/'} className="btn btn-warning">
                <i class="bi bi-arrow-left"></i> Regresar
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="card mb-4">
                  <div className="card-header">
                    <h4 className="card-title">{store.nombre}</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          className="img-fluid"
                          src={`${process.env.PUBLIC_URL + '/images/' + store.urlFoto}`}
                          alt={`${store.nombre}`}
                          loading="lazy"
                          draggable="false"
                        />
                      </div>
                      <div className="col-lg-6">
                        <span><b>{store.descripcion}</b></span>
                        <br></br>
                        <br></br>
                        <span>{store.direccion === "" ? "Tienda online" : "Dirección: " + store.direccion}</span>
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
                  {store.telefono &&
                    (<div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        {store.telefono}
                      </div>
                    </div>
                    )
                  }
                  {store.numero_whatsapp &&
                    (<div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-whatsapp"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a href={`https://wa.me/51${store.numero_whatsapp}`} target="_blank">{store.numero_whatsapp}</a>
                      </div>
                    </div>
                    )
                  }
                  {store.correo &&
                    (<div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        {store.correo}
                      </div>
                    </div>
                    )
                  }
                  {store.urlFacebook && (
                    <div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-facebook"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a
                          href={`${store.urlFacebook}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  )}
                  {store.urlInstagram && (
                    <div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-instagram"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a
                          href={`${store.urlInstagram}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  )
                  }
                  {store.urlWeb && (
                    <div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-browser-chrome"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a
                          href={`${store.urlWeb}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {store.urlWeb}
                        </a>
                      </div>
                    </div>
                  )}
                  {store.urlTelegram && (
                    <div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-telegram"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a
                          href={`${store.urlTelegram}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Telegram
                        </a>
                      </div>
                    </div>
                  )}
                  {store.urlDiscord && (
                    <div className="row">
                      <div className="col-2 col-lg-2">
                        <i className="bi bi-discord"></i>
                      </div>
                      <div className="col-10 col-lg-10">
                        <a
                          href={`${store.urlDiscord}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Discord
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {store.urlGoogleMap &&
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
          }

        </div>)}
      <Footer />
    </>
  );
}

export default StoreDetail;
