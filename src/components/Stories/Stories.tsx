"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Image from 'next/image';
import { stories } from '../../app/stories/data';

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter stories based on search term
  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section id="team" className="bg-gray-800 bg-opacity-25 text-white py-16">
      <main className="container mx-auto p-4">
        <div className="mb-8 max-w-2xl mx-auto mt-2">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.length > 0 ? (
            filteredStories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{story.title}</h2>
                  <p className="text-gray-400 mb-4">{story.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No stories found.</p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Stories;