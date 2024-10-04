import styled from "styled-components";
import {Stockinfo} from "../interfaces/Stockinfo";
import React from 'react';


const AllinfoDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    background-color: bisque;
    
    
`;
const InfoDiv = styled.div`
    padding: 5%;
    margin: 0.8%;
    text-align: center;
    background-color: bisque;
    font: Arial, sans-serif;
    border: 5px black solid;
`;

export default function Stock(props : {data:Stockinfo[]}){
    return(
        <AllinfoDiv>
        {
            props.data.map((stock) => (
                <InfoDiv key={stock.symbol}>
                    <h1>{stock.name}</h1>
                    <p>Symbol: {stock.symbol}</p>
                    <p>Currency: {stock.currency}</p>
                    <p>StockExchange: {stock.stockExchange}</p>
                    <p>exchangeShortName: {stock.exchangeShortName}</p>
                </InfoDiv>
            ))
        }
        </AllinfoDiv>
    )
}