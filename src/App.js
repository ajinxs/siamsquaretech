import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const url = "https://stockradars.co/assignment/data.php";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div className="App">
       <h1 className="app-header">COMPANY DETAILS</h1>
      <center>
        {data.map((dataObj, index) => {
          return (
            <div className="data">
              <p>Name: {dataObj.N_name}</p>
              <p>Shortname: {dataObj.N_shortname}</p>
              <p>Marketcap: {dataObj.marketcap}</p>
              <p>Company: {dataObj.N_COMPANY_T}</p>
              <p>URL: {dataObj.N_URL}</p>
              <p>Type: {dataObj.F_TYPE}</p>
              <p>Type: {dataObj.N_BUSINESS_TYPE_E}</p>
              <p>Business Type: {dataObj.N_BUSINESS_TYPE_T}</p>
              <p>Full Name: {dataObj.N_fullname}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
