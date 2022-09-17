import axios from "axios";
import { useState, useEffect } from "react";

interface FetchProps {
  itemsAmount: number;
  url:string;
}

export const useFetch = ({url, itemsAmount}:FetchProps) => {
      const [data, setData] = useState([]);

      useEffect(() => {
          axios.get(url)
          .then((resp:any) => setData(resp.data.slice(itemsAmount)))
          .catch((err) => console.log(err));
      }, [url]);

      return {
        data
      };
};
