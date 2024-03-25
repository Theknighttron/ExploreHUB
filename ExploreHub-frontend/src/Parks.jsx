import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const Parks = () => {
  return (
    <div>
        <Navbar />

        <div className="max-w-full-lg mx-auto p-5 sm:p-10 md:p-16 mt-20">
            <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
                <div className="max-w-screen mx-auto text-sm sm:text-4xl font-bold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                   Kenya's Spectacular National Parks and Reserves
                </div>
                <p className="text-gray-700 text-base leading-8 max-w-5xl mx-auto">
                Welcome to Kenya, where the call of the wild beckons and adventure awaits at every turn.
                Explore the breathtaking diversity of Kenya's national parks and reserves,
                each offering a unique window into the untamed beauty of Africa.
                From the legendary Maasai Mara, teeming with iconic wildlife and the spectacle of the Great Wildebeest Migration,
                to the majestic Amboseli National Park, where the towering presence of Mount Kilimanjaro provides a stunning backdrop to your safari experience.
                Traverse the rugged terrain of Tsavo East and West, home to a profusion of elephants and big cats,
                and immerse yourself in the tranquility of Lake Nakuru National Park, a paradise for bird enthusiasts and wildlife lovers alike.
                Discover hidden gems like the enchanting Aberdare National Park,
                with its misty forests and tree hotels offering a unique perspective on Kenya's natural wonders.
                Whether you're seeking heart-pounding encounters with Africa's iconic Big Five or longing for moments of serenity amidst lush landscapes,
                Kenya's national parks and reserves promise an unforgettable journey into the heart of the wild.
                Join us as we invite you to explore, discover, and connect with the magic of Kenya's untamed wilderness.                  
                </p>
                    <img className="max-w-5xl mx-auto my-4" src="https://www.go2africa.com/wp-content/uploads/2019/03/Kleins_2014-91.jpg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500" alt="Sunset in the mountains" />
            </div>
        </div>


        <div class="bg-gray-100 px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://www.andbeyond.com/wp-content/uploads/sites/5/elephant-bull-front-of-kilimanjaro-amboseli.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        1. Amboseli National Park 
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Amboseli National Park is one of Kenya’s safari icons,
                        a world of big-tusked elephants and big cats (lions, and sometimes cheetahs),
                        all set against the backdrop of Africa’s highest mountain, Mt Kilimanjaro. It’s a beautiful,
                        compact park with lots of wildlife, including flamingos and an easy-to-find hyena den.
                        And there’s real safari magic in the air in the early morning or late afternoon when the clouds part to reveal Kilimanjaro’s summit.
                    </p>
                </div>
            </div>
        </div>


        <div class="px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelou5i89Wd3Gk2dyNCKGiXAohINhQo8T8Y5aB1CxJTmvyr8X01GV9GTDtKdCreF7O6cw&usqp=CAU')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        2. Kora National Park  
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Kora National Park was once home of famed wildlife conservationist George Adamson,
                        known as Baba ya Simba (Father of Lions). It was here that the lion Elsa, of ‘Born Free’ fame, lived.
                        Following decades of poaching, the park is slowly recovering and wildlife can be scarce.
                        Kora’s main appeal is its wild backcountry feel and a real sense of adventure.
                    </p>
                </div>
            </div>
        </div>


        <div class="bg-gray-100 px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://www.kws.go.ke/sites/default/files/styles/park_node_style/public/Lake%20Nakuru%20NP_1.jpg?itok=dO-y4gfR')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        3. Lake Nakuru National Park 
                    </h2>
                    <p class="mt-4 text-gray-600">
                    Lake Nakuru National Park is Kenya’s most popular national park and with good reason.
                    It’s a fantastic place to see rhino and sightings of lion and leopard are possible.
                    It’s also easy to reach: the entrance is very close to the city of Nakuru.
                    Centered on a large, shallow lake that supports great birdlife, including pelicans and flamingos,
                    the park has experienced dramatically fluctuating water levels in recent years.
                    This can affect everything from flamingo populations to trail access.
                    </p>
                </div>
            </div>
        </div>

        <div class="px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://www.micato.com/wp-content/uploads/2018/09/maasai-mara-1110x700.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        4. Masai Mara National Reserve 
                    </h2>
                    <p class="mt-4 text-gray-600">
                    Masai Mara National Reserve is one of Africa’s most famous parks and it’s undoubtedly one of the continent’s best places to see animals.
                    The wildlife viewing is superb throughout the year.
                    The grassy plains and regular rainfall support a huge population of herbivores, in turn attracting many predators.
                    All three big cats are relatively easy to see.
                    The yearly wildebeest migration coming through the park is one of the world’s most amazing wildlife spectacles.
                    </p>
                </div>
            </div>
        </div>


        <div class="bg-gray-100 px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/8e/66/29/8e66291e065da4b086b54dbe16594327.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        5. Lake Turkana 
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Lake Turkana, a Unesco World Heritage Site, is the largest alkaline lake in the world,
                        and the largest lake of any kind in a desert. The area is inhospitable, but eerily beautiful,
                        and the lake’s three islands are a stopover for migrant birds and a breeding site for crocodiles and hippos.
                        Scenery, cultural visits and bird watching are the main attractions.
                        There are big mammals in Sibiloi National Park on the shore of the lake,
                        but this is not primarily a safari destination.
                    </p>
                </div>
            </div>
        </div>


        <div class="px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/e6/Group_of_Loxodonta_africana_next_to_a_dirt_road_south-west_of_Salt_Lick_Game_Lodge_in_the_Taita_Hills_Wildlife_Sanctuary%2C_Kenya_5.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        6. Taita Hills Wildlife Sanctuary 
                    </h2>
                    <p class="mt-4 text-gray-600">
                    Taita Hills Wildlife Sanctuary is a compact park in Kenya’s southeast with excellent birding and beautiful scenery.
                    Compared to the arid Tsavo nearby, Taita Hills is relatively lush and perfectly suited to game drives looking for lions,
                    elephants and more across the grassy plains. Taita Hills has a fascinating history, having played a role in WWI.
                    There is a museum that tells the story.
                    </p>
                </div>
            </div>
        </div>

        
        <div class="bg-gray-100 px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://www.crystalbaywatamu.com/eng/wp-content/uploads/2013/12/sokoke-696x330.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        7. Arabuko Sokoke Forest Reserve
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Arabuko Sokoke Forest Reserve protects the largest remaining tract of coastal forest in East Africa.
                        The reserve is mainly a bird-watching destination, and several endemics and near-endemics can be found here.
                        The forest, which is home to the eerie Gede Ruins, is a magical place to spend a couple of hours.
                        Arabuko Sokoke is a welcome refuge from the coastal heat – but don’t expect to see any of the big safari animals.
                    </p>
                </div>
            </div>
        </div>




        <div class="px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://www.maasaimarakenyapark.com/wp-content/uploads/2019/08/Hell%E2%80%99s-Gate-National-Park.png')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        8. Hell’s Gate National Park 
                    </h2>
                    <p class="mt-4 text-gray-600">
                    A small park near Lake Naivasha,
                    Hell’s Gate National Park contains a variety of plains animals but lacks most flagship species:
                    you wouldn’t come here for the wildlife. The appeal lies more in the scenery with its impressive sandstone cliffs and volcanic outcrops.
                    These provide the backdrop to some brilliant activities including rock climbing, hiking and mountain biking.
                    </p>
                </div>
            </div>
        </div>



        <div class="bg-gray-100 px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://whdonner.org/wp-content/uploads/Lewa-Zebras-800x532.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        9. Lewa Wildlife Conservancy
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Lewa Wildlife Conservancy captures the pioneering tourism and conservation spirit of the region.
                        Lewa is known for its outstanding conservation record and development work in the local community and its excellent accommodations.
                        It’s also one of the best places in Kenya to see the Big Five, with sightings of black rhino and white rhino common.
                        Lewa has a full suite of predators, and it’s a stronghold for the endangered Grevy's zebra.
                    </p>
                </div>
            </div>
        </div>




        <div class="px-2 py-20 w-full flex justify-center">
            <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div class="lg:w-1/2">
                <div
                    class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                    style={{ backgroundImage: "url('https://serengetinationalparksafaris.com/wp-content/uploads/2023/05/kakamega-rainforest-kenya.jpg')" }}
                ></div>

                </div>
                <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 class="text-3xl text-gray-800 font-bold">
                        10. Kakamega Forest National Reserve 
                    </h2>
                    <p class="mt-4 text-gray-600">
                        Kakamega Forest National Reserve is the only tropical forest left in Kenya.
                        The forest is home to a variety of primates, and it is one of Kenya’s birding hot spots.
                        It marks the easternmost distribution of many sought-after West African species.
                        Even non-birders will appreciate the jungle atmosphere of the forest.
                        Walking with a knowledgeable guide is the best way to explore the forest.
                    </p>
                </div>
            </div>
        </div>



        <Footer />

    </div>
  )
}

export default Parks