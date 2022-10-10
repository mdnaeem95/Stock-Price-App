import { createContext, useState, useEffect } from "react";

export const watchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(
      watchList.filter((item) => {
        return item !== stock;
      })
    );
  };

  return (
    <watchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </watchListContext.Provider>
  );
};
