import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import { render } from '@testing-library/react';
import Table from "./Table";
//import axios from "axios";
import mockData from "../Json/mockData.json";
import oneDayData from "../Json/oneDayData.json";
import oneWeekData from "../Json/oneWeekData.json"

const columns = [
  { label: "FeedName", accessor: "feedName" },
  { label: "FeedCount", accessor: "feedCount" },
  { label: "FeedDate", accessor: "date" }
];


function ChartData() {

  const [data, SetData] = useState(oneWeekData);
  //let [tdata, TSetData] = useState([]);
 
   function handleClick(e) {
    if(e.target.id === "A")
    SetData(mockData);
    if(e.target.id === "B")
    SetData(oneDayData);
    if(e.target.id === "C")
    SetData(oneWeekData);
  }
  return (
    <div className="row">
      {/*Buttons*/}
      <div className="col-md-6 Btn_filter">

        <Button variant="primary" onClick={handleClick} id='A'>
          12H
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='B'>
          1D
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='C'>
          1W
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='D'>
          15D
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='E'>
          1M
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='F'>
          3M
        </Button> &ensp;
        <Button variant="primary" onClick={handleClick} id='G'>
          6M
        </Button>
      </div>
      {/*Table*/}
      
      <div className='table'>
        <Card>
          <Card.Body>
            <Table caption="Incoming monitoring feeds data"
              data={data}
              columns={columns}>

            </Table>
          </Card.Body>
        </Card>
      </div>
      {/*Chart*/}
      <div className="row first_chart" >

        {data.map((lineData, key) => {
            return(
              <div className="col-md-6" key={key}>
              <Card >
                <Card.Body>
                  <div className="feedName">{lineData.feedName}</div>
                  <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart
                      width={500}
                      height={300}
                      data={lineData.data}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 20,
                        bottom: 15,
                      }}
                    >
  
                      <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
                      <XAxis dataKey="key" tick={{}} />
                      <YAxis tick={{}} />
                      <Tooltip contentStyle={{}} itemStyle={{}} cursor={false} />
                      <Line type="monotone" dataKey="feedCount" stroke="#8884d8" strokeWidth="5" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 5, r: 10 }} />
  
                    </LineChart>
                  </ResponsiveContainer>
  
                </Card.Body>
              </Card>
            </div>
            )
          //}
          //)
          
        })}

      </div>
    </div>
  );
}
export default ChartData;