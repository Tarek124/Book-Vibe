import { useLoaderData, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Card() {
  const { id } = useParams();
  const myData = useLoaderData();

  const notify = () =>
    toast.error("Book already added to list", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const success = () =>
    toast.success("Book added successfly", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  // Find the book based on the provided id
  const book = myData.find((book) => book.bookId === parseInt(id));

  const handleRead = () => {
    const datas = localStorage.getItem("readBook");
    if (datas) {
      const data = JSON.parse(datas);
      if (data.find((item) => item.bookId === parseInt(id))) {
        notify();
      } else {
        data.push(book);
        localStorage.setItem("readBook", JSON.stringify(data));
        success();
      }
    } else {
      localStorage.setItem("readBook", JSON.stringify([book]));
      success();
    }
  };
  const handleWishlist = () => {
    const datas = localStorage.getItem("wishlist");
    const readBookData = localStorage.getItem("readBook");

    const data = JSON.parse(readBookData);
    const wishlistData = JSON.parse(datas);

    if (data?.find((item) => item.bookId === parseInt(id))) {
      notify();
    } else {
      if (datas) {
        if (wishlistData.find((item) => item.bookId === parseInt(id))) {
          notify("wishlist");
        } else {
          wishlistData.push(book);
          localStorage.setItem("wishlist", JSON.stringify(wishlistData));
          success();
        }
      } else {
        localStorage.setItem("wishlist", JSON.stringify([book]));
        success();
      }
    }
  };
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
          <button onClick={handleRead} className="btn mr-2">
            Read
          </button>
          <button onClick={handleWishlist} className="btn fresh text-white">
            Wishlist
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
