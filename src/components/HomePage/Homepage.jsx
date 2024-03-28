import { NavLink, useLoaderData } from "react-router-dom";

export default function Homepage() {
  const myData = useLoaderData();
  return (
    <>
      <div className="playfair w-full my-4 p-3 sm:p-8 bg-[#4949490c] rounded  flex justify-center items-center gap-8">
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold">
            Books to freshen up your bookshelf
          </h2>
          <NavLink to="/listedbooks" className="btn my-4 text-white green">
            View The List
          </NavLink>
        </div>
        <div className="p-0 xl:px-4 w-64 sm:w-72 flex justify-start items-center">
          <img
            className="rounded shadow-md"
            src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
            alt=""
          />
        </div>
      </div>



      <div className="playfair py-4">
        <h2 className="text-center text-4xl font-bold my-6">Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {myData.map((book) => (
            <NavLink to={`/books/${book.bookId}`} key={book.bookId}>
              <div className="flex justify-start my-4 border hover:shadow-lg ease-in duration-300 p-4 rounded flex-col min-h-[450px]">
                <div className="flex justify-center items-center p-4 bg-[#4949490c] w-full rounded">
                  <img
                    className="rounded shadow-md"
                    src={book.image}
                    alt=""
                    width="100"
                  />
                </div>
                <div className="flex flex-col justify-start i w-full">
                  <div className="w-full flex gap-4 my-4">
                    {book.tags?.map((p, inx) => (
                      <p
                        className="green-text px-4 py-2 bg-[#F4FCF3] rounded-full"
                        key={inx}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold ">{book.bookName}</h2>
                  <p className="sans my-2 text-[#424242]">By : {book.author}</p>
                  <div className="border-b border-dashed my-2"></div>
                  <div className="flex justify-between my-2 sans">
                    <p>{book.category}</p>
                    <div className="flex justify-center items-center gap-2">
                      <p>{book.rating}</p>
                      <img src="/Vector.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
