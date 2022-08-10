import React, { useEffect, useState } from "react";
import Results from "./results";
import { db } from "../services/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Search() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [stores, setStores] = useState([]);
  const [districtsByProvince, setDistrictsByProvince] = useState([]);
  const [storesByDistrict, setStoresByDistrict] = useState([]);
  const provincesRef = collection(db, "provincias");
  const districtsRef = collection(db, "distritos");
  const storesRef = collection(db, "tiendas");

  const handleProvinceChange = (event) => {
    let filteredProvinces = districts.filter(
      (district) => district.id_ref == event.target.value
    );
    setDistrictsByProvince(filteredProvinces);
  };

  const handleDistrictChange = (event) => {
    let filteredStores = stores.filter(
      (store) => store.id_ref == event.target.value
    );
    setStoresByDistrict(filteredStores);
  };

  useEffect(() => {
    const getProvinces = async () => {
      const data = await getDocs(provincesRef);
      setProvinces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getDistricts = async () => {
      const data = await getDocs(districtsRef);
      setDistricts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getStores = async () => {
      const data = await getDocs(storesRef);
      setStores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProvinces();
    getDistricts();
    getStores();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-header">Búsqueda</div>
              <div className="card-body">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escribe una palabra..."
                    aria-label="Escribe una palabra..."
                    aria-describedby="button-search"
                  />
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Filtros</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="provinceSelect">Provincias</label>
                  <select
                    className="form-control"
                    id="provinceSelect"
                    onChange={handleProvinceChange}
                  >
                    {provinces.map((province) => {
                      return (
                        <option key={province.id} value={province.id_ref}>
                          {province.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="districtsSelect">Distritos</label>
                  <select
                    className="form-control"
                    id="districtsSelect"
                    onChange={handleDistrictChange}
                  >
                    {districtsByProvince.map((district) => {
                      return (
                        <option key={district.id} value={district.id_dist}>
                          {district.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Side Widget</div>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <Results stores={storesByDistrict} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
