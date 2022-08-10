import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import { getStoreById } from '../services/service';

function StoreDetail() {

    const { id } = useParams();
    const [store, setStore] = useState({});

    useEffect(() => {
debugger;
const load = async () => {
        await getStoreById(id).then((result) => {
            setStore(result);     
        });        
            
}   
load();
    }, []);    

    return (
        <>
            <Navbar></Navbar>
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="card mb-4">

                                <img
                                    className="card-img-top"
                                    src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h2 className="card-title h4">{store.nombre}</h2>
                                    Direccion
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">Mapa</div>
                                <div className="card-body">
                                    Link mapa
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" id="filtros">
                        <div className="card mb-4">
                            <div className="card-header">Contacto</div>
                            <div className="card-body">
                                Número whastapp
                                Link Facebook
                                Pagina web
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreDetail