export default function Page()
{
    return(
        <div className="bg-gray-50">
 <div className="flex flex-col justify-center items-center bg-gray-50 ">
      <div className="text-xl md:text-3xl text-orange-500 font-bold uppercase mt-4">
        Contact Us
      </div>
      <div className="border-b-4 border-orange-500 -mt-2">
        {" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
  
    </div>
<div className="flex justify-center ">
  <div className="shadow-2xl flex md:flex-row flex-col justify-center max-w-2xl m-4  mb-10 bg-gray-50">
    <div className="lg:w-1/2 bg-black ">
      <div className="flex justify-center flex-col items-center">
        <div className="text-white m-6 text-xl z-200"> Contact Us </div>
        {/* <div className="text-white m-6 z-200">
          {" "}
          We are always here to help out whatever way we can :){" "}
        </div> */}
        <div className="text-white m-6 z-200">
          <div className="flex m-2">
            <input placeholder="Name" className="bg-gray-800 p-2 rounded-3xl" />
          </div>
          <div className="flex m-2">
            <input
              placeholder="E-mail"
              className="bg-gray-800 p-2 rounded-3xl"
            />
          </div>
          <div className="flex m-2">
            <input
              placeholder="Phone"
              className="bg-gray-800 p-2 rounded-3xl"
            />
          </div>
          <div className="flex m-2">
            <input
              placeholder="Type your message"
              className="bg-gray-800 p-2 rounded-3xl"
            />
          </div>
          <div className="block m-2justify-center">
            <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
              <div className="flex justify-center"> Send </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-3/4 lg:w-2/3 ">
      <div className="w-3/4 bg-slate-600 lg:w-1/2 overflow-contain h-min">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin"
          width={375}
          height={667}
          style={{ border: 0 }}
         
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />{" "}
      </div>
    </div>
  </div>
</div>

        </div>
    )
}