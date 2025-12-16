const Contact = () =>
  <div>
    <h1 className="text-2xl md:text-3xl p-5 text-center"> Contact </h1>
    <div className="flex justify-center items-center m-2">
      <div className="w-[90vw] md:w-[80vw] border-2 border-black p-2">
        <form action="#">
          <div className=" mb-2 md:mb-4">
            <label htmlFor="name">Name:</label>
            <input placeholder="Enter your name" className="border-2 w-full border-gray-50" id="name" type="text" />
          </div>
          <div className=" mb-2 md:mb-4">
            <label htmlFor="email">Email:</label>
            <input placeholder="Enter your email" className="border-2  border-gray-50 w-full" id="email" type="text" />
          </div>
          <div className="flex justify-between mb-2 md:mb-4">
            <label htmlFor="msg">Message:</label>
            <textarea rows={5} placeholder="Enter your Message" name="msg" id="msg" className="border-2 border-gray-50 w-full"></textarea>
          </div>
          <button type="submit" className="mx-auto my-0 block cursor-pointer border-2 border-black p-1 md:p-1 md:text-lg hover:bg-blue-100 rounded">Submit</button>
        </form>
      </div>
    </div>
  </div>


export default Contact;