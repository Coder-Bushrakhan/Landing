import Image from "next/image"
export default function Page()
{
    return(
        <div>
            <div className="flex justify-center bg-gray-50">
  <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
    <div className="flex flex-col justify-center items-center ">
      <div className="text-xl md:text-3xl text-orange-500 font-bold uppercase">
        testimonials
      </div>
      <div className="border-b-4 border-orange-500 -mt-2">
        {" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
      <div className="text-black text-sm text-center mt-5">
        Subscribe Easy Tutorial YouTube channel to watch more videos
      </div>
    </div>
    <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
      <div className="bg-slate-200 hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  shadow-2xl flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
        <div className="-mt-20 ">
          <Image
            src="/photo.jpg"
            className="rounded-full "
            alt=""
            height={150}
            width={150}
          />
        </div>
        <p className="text-center text-sm p-5">
        Bushra Khan provides best Services and create
          an unique websites within minutes.
        </p>
        <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
          <h1 className="text-orange-500 text-lg font-semibold">
            Antonio Starc
          </h1>
          <p className="text-black text-sm lg:mt-[5px]">Co-Founder at xyz</p>
        </div>
      </div>
      <div className="bg-slate-200 shadow-2xl hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
        <div className="-mt-20 ">
        <Image
            src="/ano.jpg"
            className="rounded-full "
            alt=""
            height={150}
            width={150}
          />
        </div>
        <p className="text-center text-sm p-5">
        Bushra Khan provides best Services and create
          an unique websites within minutes.
        </p>
        <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
          <h1 className="text-orange-500 text-lg font-semibold">Maria Starc</h1>
          <p className="text-black text-sm lg:mt-[5px]">Co-Founder at xyz</p>
        </div>
      </div>
      <div className="bg-slate-200 shadow-2xl hover:-translate-y-1 transition duration-700 ease-in-out  hover:scale-110  flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
        <div className="-mt-20 ">
        <Image
            src="/wom.jpg"
            className="rounded-full "
            alt=""
            height={150}
            width={150}
          />
        </div>
        <p className="text-center text-sm p-5">
        Bushra Khan provides best Services and create
          an unique websites within minutes.
        </p>
        <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
          <h1 className="text-orange-500 text-lg font-semibold">
            Jessica Starc
          </h1>
          <p className="text-black text-sm lg:mt-[5px]">Co-Founder at xyz</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}