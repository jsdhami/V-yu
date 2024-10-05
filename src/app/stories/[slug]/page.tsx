"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { stories } from '../data'; // Make sure to move your stories data to a separate file
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

// Helper function to create URL-friendly slug
const createSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

// Define the props type for the page component
interface PageProps {
  params: {
    slug: string;
  };
}

const StoryPage = ({ params }: PageProps) => {
  // Find the story based on the slug
  const story = stories.find(s => createSlug(s.title) === params.slug);

  if (!story) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-16">
        <div className="w-full max-w-md">
          <Alert variant="destructive" className="mb-8 border-red-400/30 bg-red-400/10">
            <AlertTitle className="text-lg font-semibold text-red-400">
              Story Not Found
            </AlertTitle>
            <AlertDescription className="mt-2 text-gray-300">
              The story you are looking for might have been removed or is temporarily unavailable.
            </AlertDescription>
          </Alert>
          
          <div className="text-center">
            <Link 
              href="/stories" 
              className="inline-flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Stories</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 bg-opacity-25 text-white py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 mt-6"
      >
        <Link 
          href="/stories"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to stories</span>
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="relative h-96">
            <Image
              src={story.image}
              alt={story.title}
              height={384}
              width={768}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
            
            <div className="flex items-center space-x-4 mb-6 text-gray-400">
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <div className="flex gap-2">
                  {story.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-600 transition-colors duration-300 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                {story.description}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Background</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Key Findings</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Finding 1: Lorem ipsum dolor sit amet</li>
                <li>Finding 2: Consectetur adipiscing elit</li>
                <li>Finding 3: Sed do eiusmod tempor incididunt</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Impact</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StoryPage