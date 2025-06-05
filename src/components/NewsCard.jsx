import React from 'react';
import { FaEye, FaStar, FaShareAlt } from 'react-icons/fa';
import { NavLink } from 'react-router';

const NewsCard = ({ news }) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Author & Share */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{news.author?.name || 'Unknown Author'}</h3>
            <p className="text-sm text-gray-500">{news.author?.published_date?.split(' ')[0]}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        {news.title}
      </h2>

      {/* Image */}
      <img
        src={news.image_url}
        alt="News"
        className="w-full h-auto rounded mb-4"
      />

      {/* Description */}
      <p className="text-gray-700 text-sm mb-3">
        {news.details.slice(0, 200)}...
        <NavLink to={`newsDetails/${news?._id}`}><span className="text-orange-500 font-semibold cursor-pointer"> Read More</span></NavLink>
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 font-semibold ml-2">{news.rating?.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
