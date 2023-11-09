export default function Page()
{
    return(
        <div className="">
        <div className="flex flex-col justify-center items-center bg-gray-50">
      <div className="text-xl md:text-3xl text-orange-500 font-bold uppercase mt-4">
        posts
      </div>
      <div className="border-b-4 border-orange-500 -mt-2">
        {" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
  
    </div>
            <div className="flex justify-center bg-gray-50 ">
           
  {""}
  
  <div className="flex flex-col  lg:flex-row items-center shadow-2xl  max-w-7xl w-[90%] m-4">
  
    <div
      style={{
        backgroundImage: "url(vir.jpg)"
      }}
      className="bg-no-repeat bg-cover  bg-center shadow-2xl lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 "
    >
      {" "}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
        {" "}
        <div className="flex flex-col items-center justify-center p-2 text-gray-300">
          {" "}
          <div className="font-bold text-lg m-2 mt-[30%]">
            {" "}
            <a href="">Everything has beauty, but not everyone sees it.</a>
          </div>{" "}
          <div className=" m-2 text-sm">
            <a href="">
              There is no one definition of beauty. Beauty standards vary from
              culture to culture and change over time. In Western cultures,
              beauty standards have traditionally been based on ideals of youth
              and femininity.{" "}
            </a>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div
      style={{
        backgroundImage:
          "url(virr.jpg)"
      }}
      className="bg-no-repeat bg-cover shadow-2xl bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 "
    >
      {" "}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
        {" "}
        <div className="flex flex-col items-center justify-center p-2 text-gray-300">
          {" "}
          <div className="font-bold text-lg m-2 mt-[30%]">
            {" "}
            <a href="">
              There is no Wi-Fi in the forest, but I promise you will find a
              better connection
            </a>
          </div>{" "}
          <div className=" m-2 text-sm">
            <a href="">
              There is something about mountains that is both humbling and
              invigorating. Their very presence seems to demand respect and even
              a certain amount of reverence.{" "}
            </a>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div
      style={{
        backgroundImage:
          "url(bit.jpg)"
      }}
      className="bg-no-repeat shadow-2xl bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 "
    >
      {" "}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
        {" "}
        <div className="flex flex-col items-center justify-center p-2 text-gray-300">
          {" "}
          <div className="font-bold text-lg m-2 mt-[30%]">
            {" "}
            <a href="">
              The twinkle in your eyes is light the brightest stars on the
              clearest night.
            </a>
          </div>{" "}
          <div className=" m-2 text-sm">
            <a href="">
              There is something magical about the universe. It is so vast and
              mysterious, and it is always expanding. Every day, we are learning
              more about it and discovering new things.{" "}
            </a>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  </div>
</div>

        </div>
    )
}