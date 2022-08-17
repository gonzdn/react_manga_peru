import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import StoreCard from "./storeCard";

function Results(props) {
  const [storesTemp, setStoresTemp] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(6);

  useEffect(() => {
    setStoresTemp(props.stores);
    setItems(props.stores.slice(0, currentOffset));
  }, [props.stores]);

  const fetchData = () => {
    if (hasMore) {
      if (currentOffset >= storesTemp.length) {
        setHasMore(false);
        return;
      }

      let offset = currentOffset + 6;
      setItems(storesTemp.slice(0, offset));
      setCurrentOffset(offset);
      setHasMore(true);
    }
  };

  return (
    <div className="col-lg-9">
      <div className="row">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={
            <div class="d-flex justify-content-center">
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Cargando tiendas...</span>
              </div>
            </div>
          }
          className="row"
          style={{ overflow: "hidden" }}
        >
          {items.map((store) => {
            return <StoreCard key={store.id} store={store} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Results;
