import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Barchart = () => {

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
        <BarChart width={500} height={300} data={data}>
            <XAxis dataKey='name' />
            <YAxis/>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default Barchart;