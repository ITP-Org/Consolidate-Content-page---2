import Player from "../Components/Fullscreen_video_player";
import Data from "../Dataset/Sampletext2.json";
import Video_info from "../Components/Video_info";
import Lesson_material_card from "../Components/Lesson_material_card";
import { useLocation } from "react-router-dom";

function Video_page() {
  const location = useLocation();
  const { materials } = location.state || [];
  console.log(materials);
  return (
    <div className="video_page">
      <div className="fullscreen-grid1">
        <h1 className="fullscreen-header">Fullscreen - Video Player</h1>

        <div className="fullscreen-grid1-light-box">
          <div className="fullscreen-video-player">
            <Player />
          </div>
          <Video_info />
        </div>
      </div>

      <div className="fullscreen-grid2">
        <div className="Vidoe-material-content">
          <h1>Lecture Materials</h1>
          {Data.map((item, index) => {
            return (
              <>
                <Lesson_material_card key={index} item={item} />
              </>
            );
          })}
          <button
            className="download-btn"
            onClick={() => {
              alert("download");
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
export default Video_page;
