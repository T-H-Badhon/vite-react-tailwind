import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = () => {

    const data=[
        {
          "price": 134,
          "name": "Christian",
          "Brand": "ZIGGLES"
        },
        {
          "price": 101,
          "name": "Talley",
          "Brand": "COMTENT"
        },
        {
          "price": 94,
          "name": "Winifred",
          "Brand": "ZYTREK"
        },
        {
          "price": 60,
          "name": "Barnes",
          "Brand": "ARCTIQ"
        },
        {
          "price": 101,
          "name": "Walter",
          "Brand": "PURIA"
        },
        {
          "price": 164,
          "name": "Quinn",
          "Brand": "TETRATREX"
        },
        {
          "price": 100,
          "name": "Beach",
          "Brand": "ENJOLA"
        }
      ]

    return (
        <div>
            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         <Legend/>
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
    );
};

export default Rechart;