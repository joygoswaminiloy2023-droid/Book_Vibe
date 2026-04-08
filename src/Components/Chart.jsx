import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
   Z`;

export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;
  if (x == null || y == null || width == null || height == null) return null;
  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

const Chart = ({ allbooks }) => {
  const margin = { top: 20, right: 30, left: 10, bottom: 60 }; // increased bottom margin for rotated labels
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4C4C'];

  const data = allbooks.map((book, index) => ({
    name: book.bookName,
    uv: book.totalPages,
    color: colors[index % colors.length],
  }));

  const CustomShape = (props) => {
    return <TriangleBar {...props} fill={props.payload.color} />;
  };

  return (
    <div className="bg-gray-100 container shadow-xl rounded-2xl m-auto h-150" style={{ height: 600 }}> {/* ensure height */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={margin}>
          <XAxis
            dataKey="name"
            tick={{ fill: 'black', fontSize: 12 }}
            angle={-20}
            textAnchor="end"
            interval={0} // show all labels
          />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} pages`, 'Pages']} />
          <Bar dataKey="uv" shape={CustomShape} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;