import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
import NotebookViewer from '@/components/NotebookViewer/NotebookViewer'
const page = () => {
        return (
                <>
                        <Navbar />
                        <div className="container mx-auto">

                                <div className="flex justify-between flex-wrap items-center pt-16 min-h-full">
                                        <h1 className="text-4xl font-bold mb-4 pt-6">Navagating the Wildfires: How Climate Change is Affecting the Frequency and Intensity of Wildfires</h1>
                                        <div className="w-full lg:w-1/2 p-4">
                                                <p className="text-gray-400 mb-4">Wildfires in grasslands, forests, wildland vegetation, and rural areas are uncontrolled fires and have been occurring for thousands of years. Wildfires can burn in and above the soil. Ground fires can smolder for a long time -even an entire season- until conditions are right for them to grow to surface or crown fire. Wildfires can start with natural occurrences- such as lightning strikes- or a human-made spark. Wind, high temperatures, and little rainfall can all leave trees, shrubs, fallen leaves, and limbs dried out and primed to fuel a fire. Topography plays a big part too: flames burn uphill faster than they burn downhill. Wildfires also help keep ecosystems healthy. They can kill insects and diseases that harm trees. By clearing scrub and underbrush, fires can make way for new grasses, herbs, and shrubs that provide food and habitat for animals and birds. At a low intensity, flames can clean up debris and underbrush on the forest floor, add nutrients to the soil, and open up space to let sunlight through to the ground. That sunlight can nourish smaller plants and give larger trees room to grow and flourish. 
Wildfires are essential to the continued survival of some plant species. For example, some tree cones need to be heated before they open and release their seeds; chaparral plants, which include manzanita, chamise (Adenostoma fasciculatum), and scrub oak (Quercus berberidifolia), require fire before seeds will germinate.  Plants such as these depend on wildfires in order to pass through a regular life cycle. Some plants require fire every few years, while others require fire just a few times a century for the species to continue.
</p>
                                                <div className="flex flex-wrap gap-2">
                                                        <span className="bg-blue-700 text-xs px-2 py-1 rounded">Climate Change</span>
                                                        <span className="bg-blue-700 text-xs px-2 py-1 rounded">Wildfires</span>
                                                        <span className="bg-blue-700 text-xs px-2 py-1 rounded">House Gases</span>
                                                </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 p-4">
                                                <Image height={600} width={1000} src="https://github.com/jsdhami/Vayu/raw/refs/heads/main/public/images/blog/211.webp" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        </div>
                                </div>
                                <div className="flex justify-between flex-wrap-reverse items-center min-h-full">
                                        <div className="w-full lg:w-1/2 p-4">
                                                <Image height={600} width={1000} src="https://github.com/jsdhami/Vayu/raw/refs/heads/main/public/images/blog/1000w_q95.webp" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        </div>
                                        <div className="w-full lg:w-1/2 p-4">
                                                <h1 className="text-2xl font-bold mb-4">Intro about the Superstorm Sandy</h1>
                                                <p className="text-gray-400 mb-4">Hurricane Sandy, a Category 3 storm at its peak, devastated the Caribbean and the eastern seaboard of the United States in late October 2012. It caused extensive damage, killing 254 people and causing nearly $70 billion in damage. Whether called hurricanes in the Atlantic Ocean, typhoons in the western Pacific Ocean, or cyclones in the Indian Ocean, strong tropical cyclones are an example of nature’s fiercest fury. becomes a tropical depression. As it gets stronger the system graduates to a tropical storm and then finally, when winds rise over 74 mph, it is termed a hurricane. The criteria that conspire to form tropical cyclones are rather simple. It all starts with a small atmospheric disturbance located in or near a tropical ocean. If water temperatures are warm enough, generally more than 80 degrees Fahrenheit, and atmospheric conditions are supportive of moisture and uniform winds, a tropical system can evolve. In the Atlantic, the system's first storm formed in the Caribbean Sea and gradually intensified as it moved northward. It landed in Jamaica, Cuba, and The Bahamas before hitting the northeastern United States as a post-tropical cyclone. Sandy caused severe damage in New Jersey and New York in the United States, with a storm surge flooding streets, tunnels, and subway lines. The storm affected 24 states and caused an estimated $65 billion in damage. Sandy also caused damage in Canada, killing two people in Ontario and causing an estimated $100 million in damage throughout Ontario and Quebec. Superstorm Sandy (2012) was a devastating hurricane that caused extensive damage along the eastern seaboard of the United States, particularly in New York and New Jersey. While it was a natural weather event, the influence of increasing greenhouse gas concentrations such as C02, CH4, NO2, and climate change likely intensified some aspects of the storm. Here's how elevated CO₂ levels, through their contribution to global warming, may have helped create the conditions that made Superstorm Sandy more catastrophic:</p>
                                        </div>
                                </div>

                                <div className="flex justify-between flex-wrap items-center min-h-full">
                                        <div className="w-full lg:w-1/2 p-4">
                                                <h1 className="text-2xl font-bold mb-4">The Role of Climate Change in Intensifying Superstorm Sandy</h1>
                                                <p className="text-gray-400 mb-4">
                                                        Rising CO₂ levels in the atmosphere are not only warming the oceans but also altering atmospheric circulation patterns, including the jet stream. These shifts in atmospheric patterns can impact the movement and trajectory of storms. In the case of Superstorm Sandy, these altered conditions may have contributed to its unusual westward turn, steering it into a highly populated area along the East Coast. Typically, storms in this region tend to curve out to sea, but Sandy’s path brought it directly into the New York and New Jersey areas, causing immense destruction. The warming of the Arctic due to climate change may have weakened the jet stream, creating a blocking pattern that prevented Sandy from following a more typical path. This atmospheric change, combined with other climatic factors, set the stage for Sandy’s devastating impact on densely populated urban centers.</p>
                                        </div>
                                        <div className="w-full lg:w-1/2 p-4">
                                                <Image height={1000} width={1000} src="https://github.com/jsdhami/Vayu/blob/main/public/images/blog/patrick-hendry-6xeDIZgoPaw-unsplash.jpg?raw=true" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        </div>
                                </div>

                                <div className="flex justify-between flex-wrap-reverse items-center min-h-full">
                                        <div className="w-full lg:w-1/2 p-4">
                                                <Image height={1000} width={1000} src="https://github.com/jsdhami/Vayu/blob/main/public/images/blog/newplot%20(2).png?raw=true" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        </div>
                                        <div className="w-full lg:w-1/2 p-4">
                                                {/* <h1 className="text-2xl font-bold mb-4">Intro about the Superstorm Sandy</h1> */}
                                                <p className="text-gray-400 mb-4">In addition to influencing the storm path, climate change likely increased the intensity and size of Sandy. Warmer ocean temperatures, driven by rising CO₂ levels, supplied the storm with more energy, making it more powerful. Sandy’s interaction with a cold front caused it to transform into a superstorm with an unusually large diameter, affecting a vast area and generating widespread damage. The storm’s intensity was further enhanced by increased precipitation, as warmer air holds more moisture. As a result, Sandy brought heavy rainfall across much of the northeastern U.S., leading to inland flooding and overwhelming already vulnerable infrastructure. While Sandy was a natural weather event, the influence of climate change on sea surface temperatures, atmospheric patterns, and precipitation likely intensified several aspects of the storm, ultimately resulting in more severe damage and greater human suffering.</p>
                                        </div>
                                </div>

                                <div className="flex justify-between flex-wrap items-center min-h-full">

                                        <div className="w-full lg:w-1/2 p-4">
                                                <h1 className="text-2xl font-bold mb-4">The Impact of Rising CO₂ on Ocean Conditions and Coastal Vulnerability     </h1>
                                                <p className="text-gray-400 mb-4">Rising CO₂ levels in the atmosphere trap more heat, which is absorbed by the world’s oceans, leading to warmer sea surface temperatures and melting polar ice caps and glaciers. These changes are interconnected: warmer ocean waters not only provide the energy that fuels more intense hurricanes but also raise global sea levels, increasing the risk of severe coastal flooding. In the case of Superstorm Sandy in 2012, the Atlantic Ocean was unusually warm, allowing the storm to strengthen and sustain its intensity as it traveled up the coast. Elevated sea levels, combined with tidal factors and Sandy’s sheer size, resulted in record-breaking storm surges. These surges, along with the storm’s extensive reach, led to widespread flooding of subway systems, significant erosion of coastlines, and severe damage to infrastructure in the region. As CO₂ levels continue to rise, such compounded effects are likely to become more frequent, posing greater risks to coastal communities worldwide. Generally speaking, the warmer the water temperatures, the more heat energy is available and the higher the potential for tropical cyclones to develop. So it’s reasonable to assume that as humans continue to release planet-warming greenhouse gases, the likelihood of tropical cyclone activity increases.</p>
                                        </div>
                                        <div className="w-full lg:w-1/2 p-4">
                                                <Image height={1000} width={1000} src="https://github.com/jsdhami/Vayu/blob/main/public/images/blog/newplot%20(6).png?raw=true" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        </div>
                                </div>
                        </div>
                                        
             
                        <NotebookViewer
                        nbviewerUrl="https://nbviewer.org/github/jsdhami/Vayu/blob/main/Troposphere_data.ipynb"
                        colabUrl="https://github.com/jsdhami/Vayu/blob/main/Troposphere_data.ipynb"
                        buttonText="Open in GitHub"
                        />
                        



                </>
        )
}

export default page