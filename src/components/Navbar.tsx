import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [hkTime, setHkTime] = useState('00:00');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    'FASHION',
    'BEAUTY',
    'JEWELERY',
    'WATCHES',
    'YACHTS',
    'CARS',
    'HOTEL & RESORTS',
    'TRAVEL',
    'WELLNESS',
    'DINING',
    'BAR',
    'CAFES',
    'F&B',
    'PEOPLE',
    'CULTURE',
    'ART',
    'PARTIES',
    'EDM',
    'REAL ESTATE',
    'TECH',
    "WHAT'S ON",
    'VIDEOS'
  ];

  const filteredItems = menuItems.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hk = new Date(
        now.toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' })
      );
      setHkTime(hk.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const id = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Top Row */}
      <div className="w-full border-b border-gray-200 px-4 py-3">
        <div className="mx-auto ">
          <div className="flex items-center justify-between gap-2">
            {/* Left: Logo */}
            <h1 className="text-xs md:text-xl lg:text-[36px] font-bold text-black tracking-wide whitespace-nowrap">
              AWAY IN STYLE
            </h1>

            {/* Center: tagline */}
            <p className="flex-1 text-center text-[8px] md:text-[10px] lg:text-[12px] text-gray-500 text-[#6B6969] px-2 truncate">
              Asia's Premier A.I. Powered Lifestyle Platform
            </p>

            {/* Right: dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-6 h-6 flex items-center justify-center rounded-sm bg-[#ff9c45] hover:bg-orange-500 transition"
              >
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-64">
                  <div className="p-3 border-b border-gray-200">
                    <input
                      type="text"
                      placeholder="search by city"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-[11px] md:text-[13px] focus:outline-none focus:border-orange-400"
                    />
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {filteredItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }}
                        className="w-full px-4 py-2 text-left text-[12px] md:text-[14px] font-semibold text-orange-500 hover:bg-gray-50 transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto] flex items-center justify-between gap-3 px-4 py-2 text-[8px] md:text-[10px] text-gray-600">
        
          <div className="flex-1  max-w-[450px] items-center gap-4 md:gap-6">
          </div>

         {/* Hk Time center text */}
          <span className="flex-1 text-center text-[#6B6969]">HK {hkTime}</span>
            
            {/* Right */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[#6B6969] whitespace-nowrap">Sign in</span>
            <span className="text-[#6B6969] whitespace-nowrap">Message</span>
            <span className="text-[#6B6969] whitespace-nowrap">Join us 30K</span>
            <img src={`${import.meta.env.BASE_URL}support.png`} alt="support" className="w-[30px] h-[22px] md:w-[45px] md:h-[33px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
