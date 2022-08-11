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
  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const provincesRef = collection(db, "provincias");
  const districtsRef = collection(db, "distritos");
  const storesRef = collection(db, "tiendas");

  const handleProvinceChange = (event) => {
    let filteredDistricts = districts.filter(
      (district) => district.id_ref == event.target.value
    );
    setDistrictsByProvince(filteredDistricts);
    setProvinceId(event.target.value);
    setStoresByDistrict([]);
    setDistrictId(0);
  };

  const handleDistrictChange = (event) => {
    let filteredStores = stores.filter(
      (store) => store.id_ref == event.target.value
    );
    setStoresByDistrict(filteredStores);
    setDistrictId(event.target.value);
  };

  useEffect(() => {
    const getProvinces = async () => {
      const data = await getDocs(provincesRef);
      setProvinces(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getDistricts = async () => {
      const data = await getDocs(districtsRef);
      const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDistricts(dataList);
      return dataList;
    };

    const getStores = async () => {
      const data = await getDocs(storesRef);
      const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setStores(dataList);
      return dataList;
    };

    getProvinces();
    const districtList = getDistricts();
    const storeList = getStores();

    //Inicializo los selects
    districtList.then((result) => {
      let filteredDistricts = result.filter(
        (district) => district.id_ref == 15
      );
      setDistrictsByProvince(filteredDistricts);
      setProvinceId('15');
      setDistrictId('101');

      //Cargo tiendas
      storeList.then((result) => {
        let filteredStores = result.filter(
          (store) => store.id_ref == 101
        );
        setStoresByDistrict(filteredStores);
      })
    })

  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 py-2">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filtros" aria-expanded="false" aria-controls="filtros">
              Ocultar Filtros
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 collapse show collapse-horizontal" id="filtros">
            <div className="card mb-4">
              <div className="card-header">Búsqueda</div>
              <div className="card-body">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa una palabra..."
                    aria-label="Ingresa una palabra..."
                    aria-describedby="button-search"
                  />
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Filtros</div>
              <div className="card-body">
                <div className="form-group p-2">
                  <label htmlFor="provinceSelect">Provincias</label>
                  <select
                    className="form-control"
                    id="provinceSelect"
                    value={provinceId}
                    onChange={handleProvinceChange}
                  >
                    <option value="0">--Seleccione Provincia--</option>
                    {provinces.map((province) => {
                      return (
                        <option key={province.id} value={province.id_ref}>
                          {province.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group p-2">
                  <label htmlFor="districtsSelect">Distritos</label>
                  <select
                    className="form-control"
                    id="districtsSelect"
                    value={districtId}
                    onChange={handleDistrictChange}
                  >
                    <option value="0">--Seleccione Distrito--</option>
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
