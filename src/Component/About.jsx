import React from 'react'

const About = () => {
  return (
    <div>
    <section class="py-14 lg:py-24 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div class="img-box">
          <img src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-f092426/tanzania-specialist.com/wp-content/uploads/2023/07/Mnemba-beach-1024x531.jpg" alt="About Us tailwind page" class="max-lg:mx-auto" />
        </div>
        <div class="lg:pl-[100px] flex items-center">
          <div class="data w-full">
            {/* <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
              About
              Us </h2> */}
            <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                Welcome to ExploreHUB, your ultimate resource for unlocking the wonders of Kenya's vibrant tourism landscape.
                At ExploreHUB, we're dedicated to enhancing your journey through our comprehensive Tourism Information System (TIS),
                meticulously crafted to elevate your experience in one of Africa's most captivating destinations.
                Kenya's allure as a top tourist destination is as diverse as it is mesmerizing.
                From the iconic plains of the Maasai Mara to the pristine beaches along the coastline,
                our country boasts a rich tapestry of landscapes, wildlife, and cultural heritage waiting to be explored.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-14 lg:py-24 relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

        <div class="lg:pr-24 flex items-center">
          <div class="data w-full">
            <img src="https://images.trvl-media.com/lodging/101000000/100700000/100692800/100692708/7cfed71c.jpg" alt="About Us tailwind page" class="block lg:hidden mb-9 mx-auto" />
            {/* <h2 class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">We
              are Creative Since 2005</h2> */}
            <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
            Our dynamic and interactive platform serves as your indispensable guide,
            offering detailed insights into Kenya's most captivating attractions.
            Whether you're drawn to renowned national parks or hidden gems off the beaten path,
            ExploreHUB empowers you with the knowledge to navigate Kenya's diverse natural wonders seamlessly.
            In Kenya, you'll discover a spectrum of accommodations,
            from luxurious hotels and lodges to eco-friendly camps and cozy guesthouses.
            With ExploreHUB, accessing information about coastal towns like Mombasa and other tourist hotspots becomes effortless,
            enhancing your overall experience and making every moment of your adventure in Kenya unforgettable.
            </p>
          </div>
        </div>
        <div class="img-box ">
          <img src="https://images.trvl-media.com/lodging/101000000/100700000/100692800/100692708/7cfed71c.jpg" alt="About Us tailwind page" class="hidden lg:block " />
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About