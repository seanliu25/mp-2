import Stock from "./components/Stock";
import {useEffect, useState} from 'react';
import styled from "styled-components";
import {Stockinfo} from "./interfaces/Stockinfo";

// Data provided by Financial Modeling Prep:
// https://financialmodelingprep.com/developer/docs/ 

// enter file name
const ParentDiv = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
  border: 10px black solid;
  background-color: orange ;
`

export default function App(){

  const [data, setData] = useState<Stockinfo[]>([]);
  
  useEffect(() => {
    async function fetchData(): Promise<void>{
      const rawData = await fetch (
        "https://financialmodelingprep.com/api/v3/search?query=AA&apikey=66KKckAWsyewn8btBTN0eSfVDlslS2bT"
        );
      const fetchedData :  Stockinfo[] = await rawData.json();
      setData(fetchedData);
    }
    fetchData()
    // if true we return:
      .then(()=> console.log("Data fetched successfully"))
    // else if false or error we return:
      .catch((e: Error) => console.log("Error code: " +  e));
  }, []);


  return(
    <ParentDiv>
      <Stock data = {data}/>
    </ParentDiv>
  );
}

