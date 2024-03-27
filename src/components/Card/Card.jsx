import { useLoaderData, useParams } from "react-router-dom";

export default function Card() {
  const { id } = useParams();
  const myData = useLoaderData();
  if (!myData || !Array.isArray(myData)) {
    return <div>Loading...</div>; // or display an error message
  }

  // Find the book based on the provided id
  const book = myData.find((book) => book.bookId === parseInt(id));

  return (
    <div className="flex justify-start gap-8 my-5">
      <div className="flex justify-center items-center p-16 bg-[#4949490c] w-1/2 rounded">
        <img className="rounded shadow-md w-[60%]" src={book.image} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl font-bold ">{book.bookName}</h2>
        <p className="sans my-4 text-[#424242]">By : {book.author}</p>
        <div className="border-b w-full"></div>
        <p className="my-3 sans text-[#424242]">{book.category}</p>
        <div className="border-b w-full"></div>
        <p className="font-bold my-4">
          Review: <span className="font-normal">{book.review}</span>
        </p>
        <div className="w-full items-center flex gap-4 my-4">
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
        <div className="border-b w-full py-1"></div>
        <table className="table-auto my-4 w-full">
          <tbody>
            <tr>
              <td>Number of pages</td>
              <td className="font-semibold">{book.totalPages}</td>
            </tr>
            <tr>
              <td>Publisher</td>
              <td className="font-semibold">{book.publisher}</td>
            </tr>
            <tr>
              <td>Year of Publishing</td>
              <td className="font-semibold">{book.yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td className="font-semibold">{book.rating}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button className="btn mr-2">Read</button>
          <button className="btn fresh text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
