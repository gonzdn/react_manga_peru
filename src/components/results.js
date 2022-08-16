import React, { useEffect, useState } from "react";
import StoreCard from "./storeCard";

function Results(props) {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(3);

  const handleScroll = (e) => {
    const { scrollTop, offsetHeight } = document.documentElement;
const { innerHeight } = window;
const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
    if (bottomOfWindow) {
      fetchData();
    }
  };

  /*const handleClick = (e) => {
    fetchData();
  };*/

  useEffect(() => {
    setItems(props.stores.slice(0, currentOffset));
    window.addEventListener("scroll", handleScroll);
  }, [props.stores]);

  const fetchData = () => {
    if (hasMore) {
      if (currentOffset >= props.stores.length) {
        setHasMore(false);
        return;
      }

      let offset = currentOffset + 3;
      setItems(props.stores.slice(0, offset));
      setCurrentOffset(offset);
      setHasMore(true);
    }
  };

  return (
    <>
      {items.map((store) => {
        return <StoreCard key={store.id} store={store} />;
      })}
      {/* <button onClick={handleClick}>test</button> */}
    </>
  );
}

export default Results;
