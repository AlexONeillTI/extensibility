import React from "react";

const Hero = () => {
  return (
    <div className="p-20">
      {/* header */}
      <div className="flex-row text-9xl">
        <div className="">Extensibility</div>
        <div className="">Solutions</div>
      </div>
      {/* body */}
      <div className="text-2xl pt-5 pr-12">
        Our team excels in building custom integrations that streamline workflows and enhance data
        management—both for our clients and our internal operations. With a strong focus on
        innovation and efficiency, we develop tailored solutions that address unique challenges,
        whether it’s automating workflows, integrating systems, migrating users, synchronizing data,
        or expanding system capabilities. Our expertise ensures seamless connectivity across diverse
        platforms, empowering businesses to operate with greater precision, scalability, and ease.
      </div>
      {/* request button */}
      <div className="">
        <a
          href="https://www.google.com/url?q=https%3A%2F%2Fthought-industries-group.monday.com%2Fboards%2F5469425141%2Fviews%2F120421630&sa=D&sntz=1&usg=AOvVaw2HhbuP3E0MBLWWY3Ok189O"
          className="text-zinc-900"
        >
          <button className="bg-zinc-900 text-white px-4 py-2 mt-5 rounded-full">
            Make a Request
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
