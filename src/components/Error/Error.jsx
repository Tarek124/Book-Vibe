import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <div className="">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center min-h-screen justify-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 not found</h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">
            is this page exist? </p>
          <NavLink
            to="/"
            className="inline-block items-center green rounded-full  px-8 py-4 text-center font-semibold text-white"
          >
            Back Home
          </NavLink>
        </div>
      </div>
    </section>
  );
}
