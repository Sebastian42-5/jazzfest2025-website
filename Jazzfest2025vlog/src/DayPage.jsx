const videoData = {
  1: {
    videos: [{src:"/src/65807-515379587_small.mp4", description:"Very cool concert with my friend"}, 
    {src:"./nas.mp4", description:"Jazz masters"}],
    text: "Day 1 was packed with soul and fusion performances that kicked off the festival in style.",
  },
  2:  {
    videos: [{src:"./nas.mp4", description:"Very cool concert with my friend"}, 
    {src:"./nas.mp4", description:"Jazz masters"}],
    text: "Day 1 was packed with soul and fusion performances that kicked off the festival in style.",
  },

  3: { 
    videos: [{src:"./nas.mp4", description:"Very cool concert with my friend"}, 
    {src:"./nas.mp4", description:"Jazz masters"}],
    text: "Day 1 was packed with soul and fusion performances that kicked off the festival in style.",
  },

//   },

//   4: {

//   },

//   5: {

//   },

//   6: {

//   },

//   7: {

//   },

//   8: {

//   },

//   9: {

//   },

//   10: {

//   },

};

export default function DayPage({ day }) {
  const { videos, text } = videoData[day] || { videos: [], text: "No content yet." };

  return (
    <div className="daypage">
      <h2 className="day-title">Day {day} Highlights</h2>
      <p className="day-text">{text}</p>
      <div className="videos">
        {videos.map((video, i) => (
          <div key = {i} className="video-grid">
            <video className="video" src={video.src} controls/>
            <div className="overlay">
              <span className="description">{video.description}</span>
              <div className="loading"></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}