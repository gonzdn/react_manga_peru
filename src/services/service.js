import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

export async function getStoreById(id) {
  const result = await getStores();
  let store = result.find((item) => item.id_store == id);
  return store;
}

export async function getStores() {
  const storesRef = collection(db, "tiendas");
  const data = await getDocs(storesRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
