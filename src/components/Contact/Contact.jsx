export default function Contact() {
  return (
    <section>
      <div className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10">
          <form
            className="mx-auto mb-4 max-w-sm pb-4"
            name="wf-form-password"
            method="get"
          >
            <div className="relative">
              <img
                alt=""
                src="./user.png"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <input
                type="text"
                className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                maxLength="256"
                name="name"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="relative">
              <img
                alt=""
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
              />
              <input
                type="email"
                className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
                maxLength="256"
                name="name"
                placeholder="Email Address"
                required=""
              />
            </div>
            <div className="relative mb-4 pb-2">
              <textarea
                rows="4"
                className="mb-4 block w-full border border-black bg-white px-3 py-2 pl-2 text-sm text-[#333333]"
                placeholder="massage"
                required=""
              />
            </div>
            <a
              href="#"
              className="flex max-w-full grid-cols-2 flex-row items-center justify-center green px-8 py-4 text-center font-semibold text-white transition hover:shadow-xl"
            >
              <p className="mr-6 font-bold">Send</p>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
