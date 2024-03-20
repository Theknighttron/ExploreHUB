import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
            <a href="#" class="flex justify-center items-center text-2xl font-semibold text-white">
                ExploreHUB
            </a>
            <p class="my-6 text-gray-500 dark:text-gray-400">
                Join us at ExploreHUB and embark on a journey of discovery through Kenya's breathtaking landscapes,
                diverse wildlife, and rich cultural heritage.
                Let us be your trusted companion as you explore the wonders of our beloved country.
                Welcome to ExploreHUB – where every adventure begins.
                </p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-white">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" class="hover:underline">ExploreHub™</a>. All Rights Reserved.</span>
        </div>
        </footer>
    </div>
  )
}

export default Footer