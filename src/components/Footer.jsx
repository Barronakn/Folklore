const Footer = () => {
  const handleFocus = () => {
    const label = document.querySelector(".footer label");
    label.style.display = "block";
    const input = document.querySelector(".footer input");
    input.placeholder = "";
  };
  return (
    <div className="footer px-28 bg-black text-white pt-64 pb-24">
      <h1 className="text-xl">Hear from us</h1>
      <div className="footerT flex gap-96 mb-10">
        <form className="relative w-2/3">
          <label className="text-sm absolute top-1">Your Email Address</label>
          <br />
          <div className="form flex justify-around">
            <input
              onFocus={handleFocus}
              className="w-full bg-black"
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
            <button className="flex justify-around gap-5">
              Submit
              <img
                className="w-6 h-6 mt-1"
                src="./right-arrow-svgrepo-com.svg"
                alt=""
              />
            </button>
          </div>
        </form>
        <div className="w-1/3"></div>
      </div>
      <div className="footerB flex">
        <div class="folklore w-2/3">
          <p class="text">Folklore</p>
        </div>
        <div className="text-gray-500 w-1/3">
          <p className="mb-10">
            Folklore operates on Gadigal country. We acknowledge the Gadigal
            people as the traditional custodians of the Eora Nation and pay our
            respects to Elders past and present.
          </p>
          <p>
            Folklore Ventures Pty Ltd (ABN 72 614 351 058) is a corporate
            authorised representative (CAR No.001246978) of Sandford Capital Pty
            Limited (ABN 82 600 590 887) (AFSL 461 981).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
