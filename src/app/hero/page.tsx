export default function Hero() {
    return (
      <div>
        <div className="hero min-h-screen bg-gradient-to-t from-violet-300 to-zinc-600" style={{ backgroundImage: 'url(/hero.avif)' }}>
            <div className="hero-overlay bg-opacity-50">
            </div>
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-white uppercase">Hello there</h1>
              <p className="py-6 text-white">
               Welcome To My Site
              </p>
              {/* <button className="btn btn-primary bg-black text-white border-black hover:bg-slate-700 hover:border-slate-900">Click Here to know More</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  