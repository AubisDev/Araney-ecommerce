import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url:string) => {
      const [data, setData] = useState([]);

      useEffect(() => {
          axios.get(url)
          .then((resp:any) => setData(resp.data.slice(10)))
          .catch((err) => console.log(err));
      }, [url]);

      return {
        data
      };
};
