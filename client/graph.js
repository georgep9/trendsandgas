import React from 'react'
import { LineChart, Line } from 'recharts';

const Graph = ({ data }) => {
  return (<div>
  {data && <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="gas_price" stroke="#FB8180"/>
    </LineChart>}
  </div>)
}

export default Graph