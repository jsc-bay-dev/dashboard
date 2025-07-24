import React from 'react'

const SoundCloud = () => {
  return (
    <div className="soundcloud_container">
      <iframe 
        width="100%" 
        height="300" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1175646880&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: 100
      }}>
        <a 
          href="https://soundcloud.com/boxofcatsmusic" 
          title="Box Of Cats" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Box Of Cats
        </a> · <a 
          href="https://soundcloud.com/boxofcatsmusic/bluri-daaayyy-boc130" 
          title="Bluri - Daaayyy (BOC130)" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Bluri - Daaayyy (BOC130)
        </a>
      </div>
    </div>
  )
}

export default SoundCloud