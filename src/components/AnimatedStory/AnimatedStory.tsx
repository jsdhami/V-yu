"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import GlobeComponent from "../GlobeComponent/GlobeComponent"; // Ensure this component exists
import Forest from "./assets/tree_image.png";
import Pollution from "./assets/pollution.jpg";
import Handover from "./assets/handover_globe.jpg";
import { motion } from "framer-motion";
import Engine from "./assets/engine.png";
import Newcomen from "./assets/newcomen.jpg";
import Fourier from "./assets/Fourier.jpg";
import GlobalWarming from "./assets/global_warming.png";
import GHG from "./assets/ghg.png";
import Arrhenius from "./assets/Arrhenius.png";
import GHGDataVisualize from "./assets/ghg_data_visualize.png";
import Puzzle from "./assets/puzzle.jpg";
import Respire from "./assets/respire.jpg";
import Industry from "./assets/industry.jpg";
import Volcano from "./assets/volcano.jpg";
import Data1 from "./assets/data1.png";
import Data2 from "./assets/data2.png";
import Data3 from "./assets/data3.png";
import Data4 from "./assets/data4.png";
import ParisAgreement from "./assets/paris_agreement.png";
import Data5 from "./assets/data5.jpg";
import Image from "next/image";

const SteamEngine: string = './assets/steam_engine.mp4';

interface Options {
  loop?: boolean;
  delay?: number;
  pauseFor?: number; // Add this line if pauseFor should exist
}



const AnimatedStory = () => {
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [show, setShow] = useState(true);
  // Texts to display in sequence
  const texts = {
    "0": "A pale blue dot, home to many of us, and what not resides here beyond human’s comprehension. Here we are diving into the life of us, everyone, that has transitioned toward the peril of our sweet home.",
    "1": "The idea of life is simply the most beautiful and complicated. Since the prehistoric era, the earth has been sustaining the complex beauties into it. The harmony of life and the nature is endless. The elements: Air, Water, Soil, and Fire and their synergy bridges the life and death in our humane land.",
    "2": {
      "0": "We stand on the brink of a defining moment. Our planet, our home, has always changed, but never as profoundly as it is now, intertwined with human activity. The air around us is not empty; it’s a delicately balanced mixture of gases that sustain life, regulate temperature, and protect the Earth from the cold void of space. But this balance has been disrupted, mainly by the rise of greenhouse gases.",
      "1": "This is climate change—the defining challenge not just for our generation but all future generations. It’s not just about rising temperatures or melting ice caps; it’s about the legacy we leave behind.",
    },
    "3": "Year: 1712 AD",
    "4": "[World Population reaches 500 million]",
    "5": "Harnessing the gift of nature, energy, has been crucial to our survival. An ironmonger by trade and a baptist lay preacher by calling, Thomas Newcomen’s idea of atmospheric engine was the cornerstone laid for the monument of industrial revolution.",
    "6": "He didn’t even know that his simple invention was capable of bringing down the powerful people into a place to think for earth.",
    "7": "His engine was designed to pump water out of coal mines, addressing the problem of mine flooding. It used steam to push a piston, and atmospheric pressure to pull it back down after the steam was condensed, powering a pump that drained the water.",
    "8": "Newcomen’s engine was the first widely-used steam-powered machine, operating at low pressure and employing a beam engine design. The Newcomen engine was quickly adopted by coal mines throughout Britain and beyond. By the mid-18th century, over 100 engines were operating in England, France, Belgium, and other countries. It dramatically boosted coal production and paved the way for James Watt’s later improvements, which made steam engines more efficient and applicable to factories, transportation, and more. The ability to efficiently drain deep mines allowed for greater extraction of coal, which became a vital fuel during the early stages of the Industrial Revolution.",
    "9": "[World population reaches 1 billion]",
    "10": "'The temperature of the Earth can be augmented by the interposition of the atmosphere, because heat in the state of light finds less resistance in penetrating the air, than in re-passing into the air when converted into non-luminous heat.'  - Joseph Fourier",
    "11": "He explained how the Earth’s atmosphere acts like a blanket, trapping heat: sunlight easily penetrates the atmosphere, but heat radiating from the Earth struggles to escape, causing warming. Fourier’s work introduced a critical mechanism that governs the planet’s climate.",
    "12": "He showed the water vapour and certain other gases create the greenhouse effect",
    "13": "“This aqueous vapour is a blanket more necessary to the vegetable life of England than clothing it to the man”",
    "14": "Swedish chemist Svante Arrhenius concludes that industrial age coal burning will enhance the natural greenhouse effect",
    "15": "Arrhenius predicted that doubling atmospheric CO₂ levels could raise Earth's temperature by a few degrees Celsius, a prediction that aligns with modern climate models. At the time, he even suggested this warming might benefit future generations by making colder regions more habitable.",
    "16": "Together, these milestones—from Fourier’s discovery of the greenhouse effect to Arrhenius’s early warnings about fossil fuels—lay the foundation for our understanding of anthropogenic climate change, highlighting how human progress and industrialization have long-term consequences for the planet's climate.",
    "17": "[World population reaches 1.65 billion.]",
    "18": "As we piece together our atmosphere’s puzzle, we turn to data—clear evidence of the changes unfolding. Radiative forcing measures how greenhouse gases trap energy in the atmosphere, disrupting the balance of heat. Since the Industrial Revolution, we’ve been altering this balance at an unprecedented rate.",
    "19": "CO2, the most well-known greenhouse gas, occurs naturally through respiration and volcanic activity. However, since the Industrial Revolution, human activities—especially burning fossil fuels—have driven CO2 levels to dangerous highs. This surge has amplified the natural greenhouse effect, causing temperatures to rise.",
    "20": "Let’s look at the numbers. Since 1979, CO2 levels have risen by 1.9 parts per million (ppm) annually. By the last decade (2014-2023), the rate accelerated to 2.5 ppm per year. The rise in 2023 alone was 2.83 ± 0.08 ppm. These figures aren’t just statistics; they reveal a planet under increasing stress, struggling to balance human progress with environmental sustainability.",
    "21": "In 1979, CO2 alone contributed 1.05 watts per square meter to radiative forcing. By 2023, this had more than doubled to 2.29 W/m². Methane’s contribution increased from 0.43 W/m² to 0.57 W/m², while nitrous oxide rose from 0.11 W/m² to 0.22 W/m².",
    "22": "Since 1990, the total radiative forcing from all greenhouse gases has risen by 51%, with CO2 responsible for the largest share. Today, the total concentration of CO2-equivalent gases is 534 ppm, compared to just 389 ppm in 1979. These numbers reveal the cumulative impact of emissions, driving unprecedented warming and extreme weather.",
    "23": "Though the challenges we face are immense, we have the tools, knowledge, and power to change course. Renewable energy, carbon sequestration, and reforestation offer ways to mitigate greenhouse gases. Global agreements like the Paris Climate Accord show that international collaboration can work.",
    "24": "The time for action is now. Our choices will determine the future of our planet and the world we leave for generations to come.",
    "25": "TRANSITION TO DATA EXPLORER",
    "26": "As we stand at the crossroads of history, the atmosphere—our lifeblood—whispers a warning. The gases we emit weave into the fabric of our future, reflecting our choices and responsibilities.",
    "27": "From the Industrial Revolution to today, we’ve shaped this planet. For centuries, nature absorbed the impact, but now the balance has tipped. Greenhouse gases—carbon dioxide, methane, nitrous oxide—have surged to alarming levels. These are more than numbers; they signal a future reshaped by extreme weather, rising seas, and disrupted ecosystems.",
    "28": "In 2023, CO2 levels hit a record high. Methane is rising faster than ever. The Annual Greenhouse Gas Index has surged by 51% since 1990. These indicators warn of a future we cannot ignore.",
    "29": "Yet, the fact we can track and measure these changes gives us hope. Science offers us foresight and the power to act. Technologies like renewables and carbon capture are reshaping our world, while global efforts like the Paris Accord guide collective action.",
    "30": "In every corner of the world, people are rising to the challenge—from youth-led movements to community-driven initiatives in reforestation, sustainable farming, and clean energy.",
    "31": "But lasting change requires more than policy; it demands a shift in perspective. This is not just a scientific or political issue—it’s a moral one. Our actions today ripple outward, shaping the world for future generations.",
    "32": "As we fight climate change, we fight for justice. The most vulnerable bear the greatest burdens, though they contribute the least. Our decisions now must ensure a future where all can thrive.",
    "33": "The story of climate change is still being written. Each of us is an author, and we hold the power to shape its outcome. This is our chance to redefine our relationship with the planet and honor the balance that sustains us.",
    "34": "Every choice matters—whether it’s embracing renewable energy, reducing waste, or supporting sustainable policies. Together, our actions can create the change we need.",
    "35": "The science is clear, the tools are here, and the time is now. Our collective will can pull us back from the brink. Let’s breathe life into a future where humanity and nature flourish in harmony.",
    "36": "The Earth is resilient, and so are we. The breath of change is in the air. Let’s seize this moment, for all living beings and generations to come.",
    "37": "The story continues, and the pen is in our hands.",
  };

  // Define the timing configuration for each message with explicit IDs
  const messageConfig = [
    { id: 0, show: 0, hide: 10000, backgroundColor: true },
    { id: 1, show: 10005, hide: 20000 },
    { id: 2, show: 20005, hide: 40000, hasInnerText: true },
    { id: 3, show: 40005, hide: 50000 },
    { id: 4, show: 50005, hide: 60000 },
    { id: 5, show: 60005, hide: 70000 },
    { id: 6, show: 70005, hide: 80000 },
    { id: 7, show: 80005, hide: 90000 },
    { id: 8, show: 90005, hide: 100000 },
    { id: 9, show: 100005, hide: 110000 },
    { id: 10, show: 110005, hide: 120000 },
    { id: 11, show: 120005, hide: 130000 },
    { id: 12, show: 130005, hide: 140000 },
    { id: 13, show: 140005, hide: 150000 },
    { id: 14, show: 150005, hide: 160000 },
    { id: 15, show: 160005, hide: 170000 },
    { id: 16, show: 170005, hide: 180000 },
    { id: 17, show: 180005, hide: 190000 },
    { id: 18, show: 190005, hide: 200000 },
    { id: 19, show: 200005, hide: 210000 },
    { id: 20, show: 210005, hide: 220000 },
    { id: 21, show: 220005, hide: 230000 },
    { id: 22, show: 230005, hide: 240000 },
    { id: 23, show: 240005, hide: 250000 },
    { id: 24, show: 250000, hide: 260000 },
    { id: 25, show: 260005, hide: 270000 },
    { id: 26, show: 270005, hide: 280000 },
    { id: 27, show: 280005, hide: 290000 },
    { id: 28, show: 290005, hide: 300000 },
    { id: 29, show: 300005, hide: 310000 },
    { id: 30, show: 310005, hide: 320000 },
    { id: 31, show: 320005, hide: 330000 },
    { id: 32, show: 330005, hide: 340000 },
    { id: 33, show: 340005, hide: 350000 },
    { id: 34, show: 350005, hide: 360000 },
    { id: 35, show: 360005, hide: 370000 },
    { id: 36, show: 370005, hide: 380000 },
    { id: 37, show: 380005, hide: 390000 },
  ];

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    messageConfig.forEach((config) => {
      // Show message
      const showTimeout = setTimeout(() => {
        const element = document.getElementById(`message-${config.id}`);
        if (element) {
          if (config.backgroundColor) {
            element.style.backgroundColor = "none";
          }
          element.style.display = "block";
          setShowText(true);

          // Handle special case for message-2's inner text
          if (config.hasInnerText) {
            const innerTextTimeout = setTimeout(() => {
              setShowText1(true);
            }, 8000);
            timeouts.push(innerTextTimeout);
          }
        }
      }, config.show);

      // Hide message
      const hideTimeout = setTimeout(() => {
        const element = document.getElementById(`message-${config.id}`);
        if (element) {
          element.style.display = "none";
          if (config.backgroundColor) {
            element.style.backgroundColor = "black";
            setShow(false);
          }
          setShowText(false);
        }
      }, config.hide);

      timeouts.push(showTimeout, hideTimeout);
    });

    // Cleanup function
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="z-100">
      {show && <GlobeComponent />}

      {/* First Message */}
      <div
        id="message-0"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0"
        style={{ display: "none" }} // Initially hidden
      >
        <div
          style={{
            position: "absolute",
            fontFamily: "Courier New, Courier, monospace",
            fontSize: "2rem",
            top: "27vh",
            width: "25vw",
            right: "7vw",
          }}
        >
          {showText && (
            <Typewriter
              options={{
                strings: [texts["0"]],
                autoStart: true,
                loop: false,
                delay: 10,
                pauseFor: 10000000,
              }}
            />
          )}
        </div>
      </div>

      {/* Second Message */}
      <div
        id="message-1"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex justify-center items-center h-screen">
          <div>
            <Image
              width={1000}
              height={1000}
              src={Forest}
              alt="Logo"
              className="w-[75vw] h-[75vh] mt-[-15vh]"
            />
          </div>
          <div
            style={{
              position: "absolute",
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              bottom: "10vh", // Adjusted for subtitle positioning
              width: "90%", // Full width for subtitle effect
              textAlign: "center", // Centered text
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["1"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Third Message */}
      <div
        id="message-2"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[50vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["2"]["0"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
          <div className="w-[50vw] h-full flex items-center justify-center overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={Pollution}
              alt="Logo"
              className="w-[48rem]"
            />
          </div>
        </div>
        <div className="flex w-[100vw] h-[50vh] justify-center items-center">
          <div className="w-[50vw] h-full flex items-center justify-center overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={Handover}
              alt="Logo"
              className="w-[48rem]"
            />
          </div>
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            {showText1 && (
              <Typewriter
                options={{
                  strings: [texts["2"]["1"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Fourth Message */}
      <div
        id="message-3"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["3"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Fifth Message */}
      <div
        id="message-4"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["4"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sixth Message */}
      <div
        id="message-5"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[100vw] h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            <div>
              <video loop autoPlay>
                <source src={SteamEngine} type="video/mp4" />
              </video>
            </div>

            <div
              className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
              style={{
                fontFamily: "Courier New, Courier, monospace",
                fontSize: "1.6rem",
                padding: "4rem",
              }}
            >
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["5"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Message */}
      <div
        id="message-6"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["6"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Eigth Message */}
      <div
        id="message-7"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-1000 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <Image width={1000} height={1000} src={Engine} alt="Engine" />
            <div className="h-[40vh] pt-[3vh]">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["7"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 10000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ninth Message */}
      <div
        id="message-8"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[80vw] gap-12 h-full flex flex-row items-center justify-between overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <div className="w-[25vw]">
              <Image width={1000} height={1000} src={Newcomen} alt="Engine" />
            </div>
            <div className="w-[60vw]">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["8"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 10000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tenth Message */}
      <div
        id="message-9"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[75vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["9"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 200,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Eleventh Message */}
      <div
        id="message-10"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[90vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <div className="w-[30vw] rounded-full">
              <Image
                width={1000}
                height={1000}
                src={Fourier}
                alt="Fourier"
                className="rounded-full"
              />
            </div>
            <div className="w-[40vw] p-9 pl-32">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["10"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Twelveth Message */}
      <div
        id="message-11"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[90vw] h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <Image width={1000} height={1000} alt="alt" src={GlobalWarming} />
            <div className="mt-12 w-[80vw] h-[13vh]">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["11"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Thirteenth Message */}
      <div
        id="message-12"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[90vw] h-full flex flex-col items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <Image width={1000} height={1000} alt="alt" src={GHG} />
            <div className="mt-12 w-[80vw] h-[13vh]">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["12"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fourteenth Message */}
      <div
        id="message-13"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["13"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Fifteenth Message */}
      <div
        id="message-14"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-row w-[100vw] h-[100vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["14"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
          <Image
            width={1000}
            height={1000}
            alt="alt"
            src={Arrhenius}
            className="w-108 rounded-full"
          />
        </div>
      </div>

      {/* Sixteenth Message */}
      <div
        id="message-15"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[95vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <Image
              width={1000}
              height={1000}
              alt="alt"
              src={GHGDataVisualize}
              className="w-[50vw]"
            />
            <div className="w-[50vw] px-6">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["15"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                    deleteSpeed: 100,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Seventeenth Message */}
      <div
        id="message-16"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[95vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            <Image
              width={1000}
              height={1000}
              alt="alt"
              src={GHGDataVisualize}
              className="w-[50vw]"
            />
            <div className="w-[50vw] px-6">
              {showText && (
                <Typewriter
                  options={{
                    strings: [texts["16"]],
                    autoStart: true,
                    loop: false,
                    delay: 10,
                    pauseFor: 100000000,
                    deleteSpeed: 100,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Eigthteenth Message */}
      <div
        id="message-17"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "3rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["17"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Nineteeth Message */}
      <div
        id="message-18"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col w-[100vw] h-[95vh] justify-center items-center">
          <Image
            width={1000}
            height={1000}
            alt="alt"
            src={Puzzle}
            className="w-[60%]"
          />
          <div
            className="w-[70vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["18"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Twentith Message */}
      <div
        id="message-19"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col w-[100vw] h-[95vh] justify-center items-center">
          <div className="flex mt-32 gap-6">
            <Image width={1000} height={1000} alt="image" src={Respire} />
            <Image width={1000} height={1000} alt="image" src={Industry} />
            <Image width={1000} height={1000} alt="image" src={Volcano} />
          </div>
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["19"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyOne */}
      <div
        id="message-20"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col w-[100vw] h-[95vh] justify-center items-center">
          <div className="flex mt-32 gap-6 w-[60%]">
            <Image width={1000} height={1000} src={Data1} className="w-[50%]" />
            <Image width={1000} height={1000} src={Data2} className="w-[50%]" />
          </div>
          <div
            className="w-[70vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "1.5rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["20"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 100000000,
                  deleteSpeed: 100,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyTwo */}
      <div
        id="message-21"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex justify-center items-center">
            <Image width={1000} height={1000} src={Data3} className="w-[70%]" />
          </div>
          <div
            className="w-[90vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["21"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyThree */}
      <div
        id="message-22"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex justify-center items-center">
            <Image width={1000} height={1000} src={Data4} className="w-[70%]" />
          </div>
          <div
            className="w-[90vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["22"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyFour */}
      <div
        id="message-23"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src={ParisAgreement}
              className="w-[40%]"
            />
          </div>
          <div
            className="w-[90vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["23"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyFive */}
      <div
        id="message-24"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["24"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentySix */}
      <div
        id="message-25"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["25"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentySeven */}
      <div
        id="message-26"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["26"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyEight */}
      <div
        id="message-27"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["27"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* TwentyNine */}
      <div
        id="message-28"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src={Data5}
              className="w-[100%]"
            />
          </div>
          <div
            className="w-[90vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["28"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Thirty */}
      <div
        id="message-29"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["29"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyOne */}
      <div
        id="message-30"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["30"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyTwo */}
      <div
        id="message-31"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["31"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyThree */}
      <div
        id="message-32"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["32"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyFour */}
      <div
        id="message-33"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["33"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyFive */}
      <div
        id="message-34"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["34"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtySix */}
      <div
        id="message-35"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["35"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtySeven */}
      <div
        id="message-36"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["36"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* ThirtyEight */}
      <div
        id="message-37"
        className="absolute w-[100vw] h-[100vh] text-center text-white z-10 top-0 left-0 bg-black"
        style={{ display: "none" }} // Initially hidden
      >
        <div className="flex w-[100vw] h-[95vh] justify-center items-center">
          <div
            className="w-[50vw] h-full flex items-center justify-center overflow-hidden"
            style={{
              fontFamily: "Courier New, Courier, monospace",
              fontSize: "2rem",
              padding: "4rem",
            }}
          >
            {showText && (
              <Typewriter
                options={{
                  strings: [texts["37"]],
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  pauseFor: 10000000,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStory;
