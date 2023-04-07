const Subscribe = () => {
  const handlFocus = () => {
    const label = document.querySelector(".subscribe label");
    label.style.display = "block";
    const input = document.querySelector(".subscribe input");
    input.placeholder = "";
  };
  return (
    <div className="subscribe flex justify-between p-20">
      <div className="w-1/2 titre">
        <h1 className="text-8xl mt-14">Stay in the loop</h1>
      </div>
      <div className="w-1/3 mt-96">
        <p className="text-3xl">
          Subscribe to our newsletter for updates delivered directly to your
          inbox.
        </p>
        <form className="relative">
          <label className="text-sm absolute top-2">Your Email Address</label>
          <br />
          <div className="form flex justify-around">
            <input
              onFocus={handlFocus}
              className="w-full mail"
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
      </div>
    </div>
  );
};

export default Subscribe;
