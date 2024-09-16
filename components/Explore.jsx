import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <div className="bg-yellow-200 w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="flex-1 bg-blue-200 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 1 */}
            <div className="relative flex items-start">
              <div className="xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end">
                <div className="mb-6 flex justify-center items-center">
                  <Image
                    src="/assets/explore/coffees/coffee-1.svg"
                    width={56}
                    height={56}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div>2</div>
          </div>
          {/* Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt="Explore"
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="flex-1 bg-blue-200 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 3 */}
            <div>3</div>
            {/* Item 4 */}
            <div>4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
