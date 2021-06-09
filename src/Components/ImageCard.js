import React from "react";

const ImageCard = (props) => {
  const { webformatURL, user, views, downloads, likes, tags } = props.image;
  const cardTags = tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={webformatURL} alt="Image" className="w-full h-50" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong> {""}
            {views}
          </li>
          <li>
            <strong>Downloads:</strong> {""}
            {downloads}
          </li>
          <li>
            <strong>Likes:</strong> {""}
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {cardTags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
