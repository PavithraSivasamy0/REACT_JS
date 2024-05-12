const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact us</h1>
      <div className="flex flex-col w-6/12 text-center">
        <input
          className="border-solid p-4 m-2 bg-cyan-100 text-gray-300 rounded-md  shadow-slate-200"
          type="text"
          placeholder="Name"
          value={""}
          onChange={(e) => e.target.value}
        />
        <input
          className="border-solid p-4 m-2 bg-cyan-100 text-gray-300 rounded-md  shadow-slate-200"
          type="text"
          placeholder="Email"
          value={""}
          onChange={(e) => e.target.value}
        />
        <input
          className="border-solid p-10 m-2 bg-cyan-100 text-gray-300 rounded-md  shadow-slate-200"
          type="text"
          placeholder="Message"
          value={""}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <button className="bg-emerald-400 text-white rounded-xl p-3 my-4">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
