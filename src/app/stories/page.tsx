"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { stories } from './data';
import Image from "next/image";

const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

interface Story {
  title: string;
  image: string;
  description: string;
  tags: string[];
}

const StoryCard = ({ story, index }: { story: Story; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/stories/${createSlug(story.title)}`}>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group h-full flex flex-col justify-between">
          <div className="relative overflow-hidden h-48">
            <Image
              src={story.image}
              alt={story.title}
              height={1920}
              width={1080}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              {story.title}
            </h2>
            <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
              {story.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {/* Don't change this (tag, tagIndex) */}
              {story.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="bg-blue-700 text-xs px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="bg-gray-800 bg-opacity-25 text-white py-16 min-h-screen">
      <main className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-2xl mx-auto mt-2"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search stories..."
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.length > 0 ? (
            filteredStories.map((story, index) => (
              <StoryCard key={index} story={story} index={index} />
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center col-span-full text-lg text-gray-400"
            >
              No stories found.
            </motion.p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Stories;