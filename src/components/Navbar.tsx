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
      <div className="relative w-full border-b border-gray-200 px-6 py-3">
        <div className=" mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-[36px] font-bold text-black tracking-wide">AWAY IN STYLE</h1>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-[25px] h-[25px] bg-[#ff9c45] flex items-center justify-center rounded-sm hover:bg-orange-500 transition"
              >
                <img src={`${import.meta.env.BASE_URL}down_arrow.png`} alt="menu" className="w-[15px] h-[10px]" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded shadow-lg z-50 w-64">
                  {/* Search Box */}
                  <div className="p-3 border-b border-gray-200">
                    <input
                      type="text"
                      placeholder="search by city"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-[13px] focus:outline-none focus:border-orange-400"
                    />
                  </div>

                  {/* Menu Items */}
                  <div className="max-h-96 overflow-y-auto">
                    {filteredItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setSearchQuery('');
                        }}
                        className="w-full px-4 py-2 text-left text-[14px] font-semibold text-orange-500 hover:bg-gray-50 transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] text-gray-500 text-[#6B6969] hidden md:block">
            Asia's Premier A.I. Powered Lifestyle Platform
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative w-full border-b border-gray-200 bg-white">
        <div className=" mx-auto flex items-center justify-end gap-6 px-6 py-2 text-[12px] text-gray-600">
          <span className='text-[#6B6969]'>Sign in</span>
          <span className='text-[#6B6969]'>Message</span>
          <span className='text-[#6B6969]'>Join us 30K</span>

          <div className="flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}support.png`} alt="icon 1" className="w-[45px] h-[33px]" />
          </div>
        </div>

        <div className="text-[#6B6969] absolute inset-0 flex items-center justify-center text-[12px] text-gray-600 font-medium pointer-events-none hidden md:flex">
          HK {hkTime}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
