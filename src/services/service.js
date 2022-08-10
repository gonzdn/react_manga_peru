import React from 'react';

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export async function getStoreById (id) {    
    getStores().then((result) => {        
        const test = result.find((item) => item.id_store == id);
        return test;
    });
}


export async function getStores () {
    const storesRef = collection(db, "tiendas");
        const data = await getDocs(storesRef);
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));                
      };