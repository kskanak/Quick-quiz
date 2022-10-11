import React, { useContext } from "react";
import { TopicsContext } from "../layout/Root";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useContext(TopicsContext);

  return (
    <div
      className=" flex  justify-center  flex-col items-center mt-5"
      style={{ width: "100%", height: 300 }}
    >
      <h3 className="text-3xl my-3 font-semibold">Topics Quiz Charts</h3>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
