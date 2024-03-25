import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';

const AboutUs = () => {
  const spacing = 2; 

  return (
    <div>

      <Navbar />



      <div className="relative overflow-hidden bg-gray-100 pt-16 pb-32 space-y-24 mt-10">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 mt-10 mb-10">
          <div className="">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Discover Kenya's Wonders with ExploreHUB
                </h2>
                <p className="mt-4 text-lg text-gray-900">
                  Welcome to ExploreHUB,
                  your ultimate gateway to unlocking the wonders of Kenya's vibrant landscapes and rich cultural heritage.
                  Our comprehensive Tourism Information System (TIS) is meticulously designed to enhance every aspect of your Kenyan adventure.
                  From the iconic plains of the Maasai Mara to the pristine beaches along the coastline,
                  Kenya beckons with its mesmerizing attractions.
                  However, navigating through this diverse tapestry of experiences can be daunting without reliable and up-to-date information.
                  This is where ExploreHUB steps in, serving as your trusted companion to ensure you make the most of your journey.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img loading="lazy" width="647" height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ marginRight: spacing + 'em' }}
                  src="https://media.istockphoto.com/id/478924237/photo/african-lion-couple-and-safari-jeep.jpg?s=612x612&w=0&k=20&c=5_AFHVAd2GF2s51ZYtenE0NTKy5hiaofGjOtbjtHALI="
                  alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 mt-10 mb-10">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div class="mt-6 ml-28">
                        <h2 class="text-3xl font-bold tracking-tight text-black">
                          Your Ultimate Guide to Kenya's Captivating Attractions
                        </h2>
                        <p class="mt-4 text-lg text-black">
                          At ExploreHUB, we are dedicated to simplifying your travel experience through a dynamic and interactive platform.
                          Our TIS is your go-to resource for detailed insights into Kenya's most captivating attractions,
                          ranging from renowned national parks to hidden gems off the beaten path. Whether you're a wildlife enthusiast,
                          a nature lover, or a cultural explorer, ExploreHUB provides the tools you need to create unforgettable memories in Kenya.
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-12 mr-20 sm:mt-16 lg:mt-0">
                <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img loading="lazy" width="647" height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ marginRight: spacing + 'em' }}
                  src="https://miro.medium.com/v2/resize:fit:2000/1*-0ziOsLhoa-u3_kTaki8gw.jpeg"
                  alt="Placeholder" /> 
                </div>
            </div>
        </div>
    </div>



    <div className="relative overflow-hidden bg-gray-100 pt-16 pb-32 space-y-24 mt-10">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 mt-10 mb-10">
          <div className="">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black">
                  Find Your Perfect Stay and Local Services with ExploreHUB
                </h2>
                <p className="mt-4 text-lg text-gray-900">
                  But ExploreHUB isn't just about sightseeing; it's about curating every aspect of your trip to perfection.
                  From luxurious hotels and lodges to eco-friendly camps and cozy guesthouses,
                  our platform offers comprehensive profiles, ratings, and booking options for a diverse range of accommodations.
                  Additionally, we understand that seamless access to local services is crucial for a hassle-free journey.
                  With ExploreHUB, discovering the coastal towns of Mombasa and other tourist hubs becomes effortless,
                  ensuring that your Kenyan adventure is as enjoyable as it is enriching.
                  Join us on ExploreHUB and embark on a journey of discovery across the breathtaking landscapes and vibrant culture of Kenya.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img loading="lazy" width="647" height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ marginRight: spacing + 'em' }}
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/519348104.jpg?k=99ccdef09bb514e4116c38bf1ca50e03e0e5c3389d9963208d637dc54dccf507&o=&hp=1"
                  alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>



    



   
    <Footer />

    </div>
  )
}

export default AboutUs