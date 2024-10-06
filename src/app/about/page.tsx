import { Card, CardContent } from '@/components/ui/card';
import { Globe2, Users, Rocket, Database, TreePine, ChartBar } from 'lucide-react';
import Navbar from "@/components/navbar/navbar";

export default function AboutPage() {
  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 mt-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Climate Data Storytelling Challenge
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Transforming complex climate data into compelling narratives that inspire action
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are participating in the 2024 NASA Space Apps Challenge to bridge the gap between complex climate data and public understanding. Our goal is to create compelling visualizations and narratives that make climate change data accessible and actionable for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700 bg-opacity-70">
            <CardContent className="pt-6">
              <Database className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven</h3>
              <p className="text-gray-400">
                Utilizing comprehensive datasets from the U.S. Greenhouse Gas Center to ensure accuracy and reliability.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 bg-opacity-70">
            <CardContent className="pt-6">
              <ChartBar className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Interactive Visualizations</h3>
              <p className="text-gray-400">
                Creating engaging and intuitive visualizations that help users understand complex climate patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 bg-opacity-70">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Public Education</h3>
              <p className="text-gray-400">
                Making climate science accessible to everyone through compelling storytelling and clear explanations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Challenge Details */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16 bg-opacity-70">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="h-8 w-8 text-purple-400" />
            <h2 className="text-3xl font-semibold">The Challenge</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Our team is tackling the challenge of transforming decades of climate data into meaningful stories that educate and inspire action. We are focusing on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Developing interactive data visualizations</li>
              <li>Creating user-friendly dashboards</li>
              <li>Combining climate data with socioeconomic insights</li>
              <li>Building accessible narrative tools</li>
            </ul>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TreePine className="h-8 w-8 text-green-400" />
            <h2 className="text-3xl font-semibold">Environmental Impact</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            By making climate data more accessible and understandable, we aim to inspire informed decision-making and collective action towards a sustainable future. Our project helps bridge the gap between scientific understanding and public awareness of climate change.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}