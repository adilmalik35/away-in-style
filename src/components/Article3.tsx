// src/components/Article.jsx
export default function Article3() {
  return (
    <section className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1000px] mx-auto px-6">

        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={`${import.meta.env.BASE_URL}avatar.png`}
            className="w-[58px] h-[58px] rounded-full object-cover"
          />
          <div>
            <p className="text-[13px] font-semibold">
              May Ng | Content Director
            </p>
            <p className="text-[12px] text-gray-500">
              Hong Kong | Video
            </p>
            <p className="text-[11px] text-gray-400">1s</p>
          </div>
        </div>

        {/* Title + Search */}
        <div className="flex justify-between items-start mb-6">

          <h1 className="text-[34px] leading-[40px] font-bold max-w-[650px]">
            An Interview with Jenifer Lawrence    
                  </h1>

          {/* Circular Search Button */}
          <button className="w-[40px] h-[40px] md:w-[58px] md:h-[58px] rounded-full border-2 border-orange-400 text-orange-500 text-[10px] md:text-[12px] flex items-center justify-center hover:bg-orange-500 hover:text-white transition flex-shrink-0">
            Search
          </button>
        </div>

        {/* Feature Image */}
        <div className="mt-10 shadow-lg">
          <img
            src={`${import.meta.env.BASE_URL}a_bg_4.png`}
            className="w-full  "
          />
        </div>


      </div>
    </section>
  );
}