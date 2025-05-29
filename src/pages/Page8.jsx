import React from "react";
import AnimatedText from "../components/AnimatedText";

const Page8 = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b98c5254-0c74-4773-9ac6-63ce5004deeb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section className="flex justify-between items-end h-[50vh] px-1 relative">
      <div className="overflow-hidden">
        <AnimatedText />
      </div>
      <div className="relative max-w-[500px] w-full mb-[3rem]">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-3xl blur-2xl opacity-70"></div>
        <form
          onSubmit={onSubmit}
          className="relative bg-transparent text-black flex flex-col gap-4"
        >
          <div className="flex w-full">
            <div className="w-1/2 flex flex-col pr-6">
              <div className="mt-2">
                <label htmlFor="name" className="block cursor-none font-two">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name.."
                  required
                  className="w-full h-[25px] font-two bg-white/50 backdrop-blur-md border border-white/30 border-gray-300 outline-none rounded-md px-3 py-5 text-base text-black mt-1 cursor-none"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block cursor-none font-two">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email.."
                  required
                  className="w-full h-[25px] font-two bg-white/50 backdrop-blur-md border border-white/30 border-gray-300 outline-none rounded-md px-3 py-5 text-base text-black mt-1 cursor-none"
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col pr-6">
              <div className="mt-2">
                <label htmlFor="message" className="block cursor-none font-two">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message.."
                  required
                  className="w-full h-[70px] font-two resize-none bg-white/50 backdrop-blur-md border border-white/30 rounded-md px-3 py-2 text-base text-black mt-1 focus:outline-none cursor-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#ff595e] font-two text-[#ffca3a] font-semibold h-[43px] rounded-md mt-[0.55rem] active:scale-95 hover:bg-[#6a4c93] hover:text-[#8ac926] cursor-none transition-all duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page8;
