/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageToRead() {
  const [book, setBooks] = useState([]);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  useEffect(() => {
    const data = localStorage.getItem("readBook");
    const readBookData = JSON.parse(data);

    const newData = readBookData?.map((value) => ({
      name: value?.bookName,
      uv: value?.totalPages,
      pv: value?.rating,
      amt: value?.yearOfPublishing,
    }));

    setBooks(newData);
  }, []);

  return (
    <>
      {book ? (
        <div className="flex justify-center items-center my-8">
          <BarChart
            width={1000}
            height={500}
            data={book}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {book.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      ) : (
        <section>
          <div className="">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center min-h-screen justify-center">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Data not Availabe
              </h1>

              <NavLink
                to="/"
                className="inline-block items-center green rounded-full  px-8 py-4 text-center font-semibold text-white"
              >
                Back Home
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
