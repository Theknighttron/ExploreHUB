import React from 'react'

const Card = () => {
  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div class="text-center p-10">
            <h1 class="font-bold text-4xl mb-4">Discover Kenya</h1>
            <h1 class="text-3xl">Explore Our Diverse Accommodation Options</h1>
        </div>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://www.elewanacollection.com/images/welcome-page/the-collection/loisaba-tented-2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                    </p>
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                        Amboseli
                    </div>
                    <p class="text-gray-700 text-sm">
                    Choose from a variety of accommodations,
                     from luxury lodges to tented camps, and enjoy unrivaled wildlife viewing opportunities. 
                    </p>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://www.elewanacollection.com/images/welcome-page/the-collection/arusha-coffee-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    Nairobi City
                    </div>
                    <p class="text-gray-700 text-sm">
                    Offering a blend of urban sophistication and natural beauty.
                     Choose from a range of accommodation options, including boutique hotels, guesthouses, and luxury resorts.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://www.elewanacollection.com/images/slider-home/afrochic.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                            Mombasa
                        </div>
                    <p class="text-gray-700 text-sm">
                        Experience the vibrant coastal city of Mombasa with our range of accommodation options,
                        from beachfront resorts to boutique hotels. 
                       </p>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://www.elewanacollection.com/images/slider-home/elsas.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                            Samburu
                    </div>
                    <p class="text-gray-700 text-sm">
                    Explore the rugged landscapes of Samburu National Reserve,
                     home to unique wildlife species adapted to the arid environment.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-f092426/tanzania-specialist.com/wp-content/uploads/2023/11/Tanzania-Grumeti-Serengeti-River-Lodge-Guest-Area-exterior-1-1024x576.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                        Masai Mara
                    </div>
                    <p class="text-gray-700 text-sm">
                        Experience the iconic Masai Mara with our diverse range of accommodation options,
                         from luxury lodges overlooking the savannah to intimate tented camps nestled amidst the wildlife.
                    </p>
                </div>
            </div>
        </div>

        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://www.elewanacollection.com/images/welcome-page/the-collection/pioneer-2.jpg" alt='' class="w-full mb-3" />
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                        Laikipia
                        </div>
                    <p class="text-gray-700 text-sm">
                        Explore the rugged beauty of Laikipia,
                        where luxury safari lodges and exclusive ranch retreats offer unparalleled wildlife encounters. 
                    </p>
                </div>
            </div>
        </div>


    </div>

    <a href="/accomodation" className='max-w-screen-xl  mx-auto'>
            <button type="button" class="text-white mt-10 flex justify-center bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                See more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </a>
</div>
  )
}

export default Card