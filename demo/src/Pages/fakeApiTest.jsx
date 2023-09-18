import React, { useEffect } from "react";
import axios from "axios";

function FakeApi() {
  useEffect(() => {
    axios.put('https://reqres.in/api/users/2',{
     "name":"anjali",
     "job":"off pages seo",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <h1>hello</h1>
  );
}

export default FakeApi;
