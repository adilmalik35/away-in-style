// src/components/Article.jsx
export default function Article() {
  return (
    <section className="w-full bg-[#ffffff] py-10">
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
              Hong Kong | Dining
            </p>
            <p className="text-[11px] text-gray-400">1s</p>
          </div>
        </div>

        {/* Title + Search */}
        <div className="flex justify-between items-start mb-6">

          <h1 className="text-[34px] leading-[40px] font-bold max-w-[650px]">
            Best Hotel In Asia In Asia What Is Your
          </h1>
  {/* Circular Search Button */}
          <button className="w-[40px] h-[40px] md:w-[58px] md:h-[58px] rounded-full border-2 border-orange-400 text-orange-500 text-[10px] md:text-[12px] flex items-center justify-center hover:bg-orange-500 hover:text-white transition flex-shrink-0">
            Search
          </button>
        </div>

        {/* Description */}
        <p className="text-[14px] text-gray-600 leading-[22px] max-w-[700px]">
          This October, W Maldives invites guests to an unforgettable culinary 
          chapter as part of its Flavors Unscripted series — a two-night, 
          six-hands collaboration bringing together three of Bali’s most 
          sought-after chefs: Benjamin Cross of Mason and Bar Vera, 
          Stephen Moore of Shelter whats the plan...
          <span className="text-orange-500 cursor-pointer ml-2">
            View Content
          </span>
        </p>

        {/* Feature Image */}
        <div className="mt-10 shadow-lg">
          <img
            src={`${import.meta.env.BASE_URL}a_bg_1.png`}
            className="w-full  "
          />
        </div>

        {/* Social Actions */}
        <div className="flex items-center gap-6 mt-6 text-[13px] text-gray-600">
          <span className="flex items-center gap-1 text-orange-500">
            <img src={`${import.meta.env.BASE_URL}aic_like.png`} alt="heart" className="w-[23px] h-[18px]" />
            15
          </span>
             <span className="flex items-center gap-1 cursor-pointer">
            share
            <img src={`${import.meta.env.BASE_URL}aic_share.png`} alt="share" className="w-[12px] h-[12px]" />
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            repost
            <img src={`${import.meta.env.BASE_URL}aic_repost.png`} alt="repost" className="w-[20px] h-[10px]" />
          </span>
       
          <span className="flex items-center gap-1 cursor-pointer">
            comments 
            <img src={`${import.meta.env.BASE_URL}aic_comment.png`} alt="comments" className="w-[22px] h-[18px]" />
              88
          </span>
        </div>

        {/* Comment Input */}
        <div className="mt-8 pt-4 w-full md:w-1/2">
          <div className="w-full border-b border-orange-400 pl-4 py-3">
            <div className="flex items-center justify-between gap-3 flex-nowrap">
              <input
                id="thoughts"
                placeholder="your thoughts"
                className="flex-1 focus:outline-none py-2 text-[13px] bg-transparent"
              />

              <div className="flex items-center gap-2 flex-shrink-0">
                <img src={`${import.meta.env.BASE_URL}ic_upload.png`} alt="icon 1" className="w-7 h-7 object-cover rounded" />
                <img src={`${import.meta.env.BASE_URL}ic_play.png`} alt="icon 2" className="w-7 h-7 object-cover rounded" />
                <img src={`${import.meta.env.BASE_URL}ic_share.png`} alt="icon 3" className="w-7 h-7 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}