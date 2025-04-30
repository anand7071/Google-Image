import React from 'react';

interface FeedCardProps {
  title: string;
  image: string;
}

const FeedCard: React.FC<FeedCardProps> = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-64">
      <img src={image} alt={title} className="rounded-lg w-full h-36 object-cover" />
      <p className="mt-2 text-sm font-semibold text-gray-700">{title}</p>
    </div>
  );
};

export default FeedCard;