import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const handleGenerateClick = async () => {
    try {
      const response = await fetch('https://api.example.com/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blog_topic: 'Generative AI' })
      });
      const data = await response.json();
      console.log('Generated Blog:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center bg-blue-700 text-white w-full">
        <h2 className="text-5xl font-bold mb-4">Welcome to PromptlyAI</h2>
        <p className="text-xl mb-8 text-center max-w-md">
          Generate high-quality blogs instantly with AI-driven prompts.
        </p>
        <button
          onClick={handleGenerateClick}
          className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-400 transition-all duration-300 shadow-lg">
          Generate Blog
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
