import React from 'react';
import SearchBar from '../components/SearchBar';
import FeedCard from '../components/FeedCard';

const mockFeeds = [
  { title: 'Tech News', image: 'https://via.placeholder.com/150' },
  { title: 'Trending AI Tools', image: 'https://via.placeholder.com/150' },
  { title: 'New Gadgets 2025', image: 'https://via.placeholder.com/150' },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Google Logo" className="w-36 mt-8" />
      <div className="mt-6 w-full">
        <SearchBar />
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockFeeds.map((feed, idx) => (
          <FeedCard key={idx} title={feed.title} image={feed.image} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;