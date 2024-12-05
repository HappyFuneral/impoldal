import React from 'react';

const SpotifyEmbed = () => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/artist/5m6wCyfWgPgseHNTqIQT6X?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="mb-20"
    ></iframe>
  );
};

export default SpotifyEmbed;
