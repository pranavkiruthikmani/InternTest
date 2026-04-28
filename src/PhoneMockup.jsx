import { useState, useEffect } from 'react';
import { Heart, Share } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Cookie Dough",
    brand: "Larabar",
    score: 92,
    rating: "Excellent",
    img: "https://plus.unsplash.com/premium_photo-1670895802275-ed748ced4309?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    review: "\"This product, which includes ingredients like cashews and dates, scored well mainly because it doesn't contain processed sugars, harmful additives, or seed oils, making it a healthier choice for your family.\""
  },
  {
    id: 2,
    name: "Sourlittles",
    brand: "YumEarth",
    score: 84,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"This product's score is impacted mainly by the presence of processed sugars like organic cane sugar and organic rice syrup, which can be concerning for your family's health. Good to enjoy in moderation.\""
  },
  {
    id: 3,
    name: "Pure Jersey Milk",
    brand: "Claravale Farm",
    score: 100,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives, making it a great option for your family's health.\""
  },
  {
    id: 4,
    name: "Organic Seaweed Snacks",
    brand: "Ocean's Halo",
    score: 88,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"A great low-calorie snack with no added sugars. Contains healthy minerals but watch out for sodium levels if you are eating multiple packs.\""
  },
  {
    id: 5,
    name: "Cold-Pressed Green Juice",
    brand: "Suja",
    score: 95,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"Packed with organic greens and zero added sugars. An excellent way to get vitamins on the go, though eating whole vegetables is always preferred for the fiber.\""
  },
  {
    id: 6,
    name: "Raw Sprouted Almonds",
    brand: "Sunfood Superfoods",
    score: 98,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"These sprouted almonds are fantastic. Sprouting makes the nutrients more bioavailable, and with zero added processing or oils, it's a perfect brain food for kids.\""
  },
  {
    id: 7,
    name: "Wild Blueberries",
    brand: "Wyman's",
    score: 100,
    rating: "Excellent",
    img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=400&h=500&q=80", 
    review: "\"A perfect score. Frozen wild blueberries have twice the antioxidants of regular blueberries and absolutely zero additives. A phenomenal staple for morning smoothies.\""
  }
];
export default function PhoneMockup() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section className="relative w-full max-w-5xl mx-auto mt-16 flex justify-center items-center h-[850px] overflow-hidden">
      
      <div className="absolute top-[129px] w-full h-44 flex justify-center items-center pointer-events-none z-0">
        {products.map((product, index) => {
          
          const total = products.length;
          let offset = index - activeIndex;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          let bgPositionClass = "";

          if (offset === 0) { 
            bgPositionClass = "opacity-0 translate-x-0 scale-75 z-0";
          } else if (offset === 1) { 
            bgPositionClass = "opacity-0 translate-x-[120px] scale-75 z-0";
          } else if (offset === -1) { 
            bgPositionClass = "opacity-0 -translate-x-[120px] scale-75 z-0";
          } else if (offset === 2) { 
            bgPositionClass = "opacity-30 translate-x-[140px] md:translate-x-[260px] scale-75 blur-[4px] z-10";
          } else if (offset === -2) { 
            bgPositionClass = "opacity-30 -translate-x-[140px] md:-translate-x-[260px] scale-75 blur-[4px] z-10";
          } else if (offset >= 3) { 
            bgPositionClass = "opacity-0 translate-x-[300px] md:translate-x-[480px] scale-75 z-0";
          } else if (offset <= -3) { 
            bgPositionClass = "opacity-0 -translate-x-[300px] md:-translate-x-[480px] scale-75 z-0";
          }

          return (
            <div 
              key={`bg-${product.id}`}
              className={`absolute transition-all duration-700 ease-in-out ${bgPositionClass}`}
            >
              <div className="w-32 h-40 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center p-2 overflow-hidden">
                 <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[380px] h-[780px] bg-bgOffWhite border-[14px] border-[#E5E7EB] rounded-[3.5rem] shadow-2xl relative overflow-hidden flex flex-col z-10">
        
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 flex items-center justify-end px-3">
           <div className="w-3 h-3 bg-gray-800 rounded-full border border-gray-700 shadow-inner"></div>
        </div>

        <div className="flex-1 overflow-hidden pb-10 bg-white">
          
          <div className="mt-20 h-44 w-full relative flex justify-center items-center px-4">
            {products.map((product, index) => {
              
              const total = products.length;
              let offset = index - activeIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              let positionClass = ""; 

              if (offset === 0) { // Center
                positionClass = "opacity-100 translate-x-0 scale-100 blur-none z-30";
              } else if (offset === 1) { // Visible Right
                positionClass = "opacity-60 translate-x-28 scale-75 blur-[2px] z-20 cursor-pointer hover:opacity-80";
              } else if (offset === -1) { // Visible Left
                positionClass = "opacity-60 -translate-x-28 scale-75 blur-[2px] z-20 cursor-pointer hover:opacity-80";
              } else if (offset >= 2) { // Hidden Far Right 
                positionClass = "opacity-0 translate-x-48 scale-50 z-10";
              } else if (offset <= -2) { // Hidden Far Left 
                positionClass = "opacity-0 -translate-x-48 scale-50 z-10";
              }

              return (
                <div 
                  key={product.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
                >
                  <div className="w-32 h-40 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center justify-center p-2 overflow-hidden">
                     <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-6 mb-4"></div>

          <div className="px-6 text-center h-16">
             <h2 className="text-[20px] font-bold text-gray-900 leading-tight mb-1 line-clamp-2">{activeProduct.name}</h2>
             <p className="text-gray-500 text-sm">{activeProduct.brand}</p>
          </div>

          <div className="flex justify-between items-center px-6 mt-6">
             <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${activeProduct.score >= 90 ? 'bg-green-500' : 'bg-green-400'}`}></div>
                <div>
                   <p className="font-bold text-xl leading-none">{activeProduct.score}/100</p>
                   <p className="text-gray-500 text-sm mt-0.5">{activeProduct.rating}</p>
                </div>
             </div>
             <div className="flex gap-4 text-gray-400">
                <Heart size={22} className="hover:text-red-500 cursor-pointer transition-colors" />
                <Share size={22} className="hover:text-blue-500 cursor-pointer transition-colors" />
             </div>
          </div>

          <div className="bg-[#F8FAF9] rounded-2xl p-6 mx-5 mt-6 shadow-sm border border-gray-100 min-h-[160px]">
             <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥑</span>
                <span className="font-bold text-gray-900">Oliver Says:</span>
             </div>
             <p className="text-gray-600 text-[14px] leading-[1.6]">
                {activeProduct.review}
             </p>
          </div>

          <h3 className="px-6 mt-8 font-bold text-lg text-gray-900 mb-8">Breakdown</h3>
          
        </div>
      </div>
    </section>
  );
}