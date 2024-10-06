'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/navbar/navbar';

const Page = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Using relative path from public directory
  const audioUrl = "/The Climate Change Audiobook.mp3";

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleError = () => {
      setError("Error loading audio file. Please try again later.");
      setIsLoading(false);
    };

    // Add event listeners
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Cleanup function
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          setError("Error playing audio. Please try again.");
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = x / width;
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + seconds;
      audioRef.current.currentTime = Math.max(0, Math.min(newTime, duration));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="mt-20">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Climate Change
                <span className="text-emerald-400"> Audiobook</span>
              </h1>
              <p className="text-xl text-gray-400">
                Explore the latest insights on climate change and sustainability through our curated collection of audiobooks.
              </p>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Now Playing</span>
                  {isPlaying && !isLoading && (
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {error ? (
                  <div className="text-red-400 text-center py-4">{error}</div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">The Climate Change Audiobook</span>
                      <span className="text-sm text-emerald-400">Chapter 1</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div 
                        className="relative h-2 bg-slate-700 rounded cursor-pointer group"
                        onClick={handleProgressClick}
                      >
                        <div 
                          className="absolute h-full bg-emerald-400 rounded transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                        <div className="absolute h-4 w-4 bg-white rounded-full -top-1 -mt-px opacity-0 group-hover:opacity-100 transition-opacity"
                             style={{ left: `${progress}%`, transform: 'translateX(-50%)' }} />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={toggleMute}
                          className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                        >
                          {isMuted ? (
                            <VolumeX className="w-6 h-6 text-gray-400" />
                          ) : (
                            <Volume2 className="w-6 h-6 text-gray-400" />
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={handleVolumeChange}
                          className="w-24 accent-emerald-400"
                        />
                      </div>

                      <div className="flex items-center space-x-4">
                        <button 
                          className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                          onClick={() => skipTime(-10)}
                        >
                          <SkipBack className="w-6 h-6 text-gray-400" />
                        </button>
                        
                        <button
                          onClick={togglePlay}
                          disabled={isLoading}
                          className="p-4 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-1" />
                          )}
                        </button>

                        <button 
                          className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                          onClick={() => skipTime(10)}
                        >
                          <SkipForward className="w-6 h-6 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;