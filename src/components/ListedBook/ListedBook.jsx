import { useState } from "react";

export default function ListedBook() {
  const [tab, setTab] = useState("read");
  const readBook = JSON.parse(localStorage.getItem("readBook"));
  const wishList = JSON.parse(localStorage.getItem("wishlist"));
  console.log(readBook, wishList);
  const handleSort = () => {
    readBook.sort();
    console.log(readBook.totalPages);
  };
  return (
    <div>
      <div className="bg-[#4949490c] text-4xl font-bold text-center py-6 my-6">
        Books
      </div>
      <div className="flex justify-center">
        <details className="dropdown ">
          <summary className="m-1 btn green text-white">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={handleSort}>
              <a>Total Page</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Publishing Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked={tab === "read"}
          onChange={() => setTab("read")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-4"
        >
          {readBook &&
            readBook.map((book, inx) => (
              <div key={inx} className="p-4 my-4 border rounded-lg flex gap-4">
                <div className="bg-[#4949490c] w-44 px-8 py-4 rounded-lg">
                  <img className="" src={book.image} alt="" />
                </div>
                <div className="playfair">
                  <h1 className="text-2xl font-bold">{book.bookName}</h1>
                  <p className="sans my-2 text-[#424242]">By : {book.author}</p>
                  <div className="w-full items-center flex gap-2 my-2">
                    <h2 className="font-bold">Tag</h2>
                    {book.tags?.map((p, inx) => (
                      <p
                        className="green-text px-4 py-2 bg-[#F4FCF3] rounded-full"
                        key={inx}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <img src="./user.png" alt="" />
                      <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="./network.png" alt="" />
                      <p>Page: {book.totalPages}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-4 mt-4">
                    <div className="px-4 py-2 text-[#328EFF] bg-[#E0EEFF] rounded-full">
                      Category: {book.category}
                    </div>
                    <div className="px-4 py-2 text-[#FFAC33] bg-[#FFF0EF] rounded-full">
                      Rating: {book.rating}
                    </div>
                    <div className="cursor-pointer px-4 py-2 text-[#fefefe] green rounded-full">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked={tab === "wishlist"}
          onChange={() => setTab("wishlist")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {wishList &&
            wishList.map((book, inx) => (
              <div key={inx} className="p-4 my-4 border rounded-lg flex gap-4">
                <div className="bg-[#4949490c] w-44 px-8 py-4 rounded-lg">
                  <img className="" src={book.image} alt="" />
                </div>
                <div className="playfair">
                  <h1 className="text-2xl font-bold">{book.bookName}</h1>
                  <p className="sans my-2 text-[#424242]">By : {book.author}</p>
                  <div className="w-full items-center flex gap-2 my-2">
                    <h2 className="font-bold">Tag</h2>
                    {book.tags?.map((p, inx) => (
                      <p
                        className="green-text px-4 py-2 bg-[#F4FCF3] rounded-full"
                        key={inx}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <img src="./user.png" alt="" />
                      <p>Publisher: {book.publisher}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="./network.png" alt="" />
                      <p>Page: {book.totalPages}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-4 mt-4">
                    <div className="px-4 py-2 text-[#328EFF] bg-[#E0EEFF] rounded-full">
                      Category: {book.category}
                    </div>
                    <div className="px-4 py-2 text-[#FFAC33] bg-[#FFF0EF] rounded-full">
                      Rating: {book.rating}
                    </div>
                    <div className="cursor-pointer px-4 py-2 text-[#fefefe] green rounded-full">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
