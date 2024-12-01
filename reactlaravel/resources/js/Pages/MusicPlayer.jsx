import styled from "styled-components";

// Import components
import Player from "@/Components/Player.jsx";
import Song from "@/Components/Song.jsx";
import Library from "@/Components/Library.jsx";
import Nav from "@/Components/Nav.jsx";
import Credit from "@/Components/Credit.jsx";
// Import data
import data from "./data";
import {useRef, useState} from "react";

const MusicPlayer = () => {
    // Ref
    const audioRef = useRef(null);

    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [libraryStatus, setLibraryStatus] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    // Functions
    const updateTimeHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime, duration });
    };

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        let nextSong = songs[(currentIndex + 1) % songs.length];
        await setCurrentSong(nextSong);

        const newSongs = songs.map((song) => {
            if (song.id === nextSong.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);

        if (isPlaying) {
            audioRef.current.play();
        }
    };

    return (
        <AppContainer libraryStatus={libraryStatus}>
            <h1 className="text-white text-xl text-center">Lemez neve</h1>
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setSongs={setSongs}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Credit />
            <audio
                onLoadedMetadata={updateTimeHandler}
                onTimeUpdate={updateTimeHandler}
                onEnded={songEndHandler}
                ref={audioRef}
                src={currentSong.audio}
            />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    transition: all 0.5s ease;
    margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
    background-color: rgba(0, 0, 0, 0.70);
    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export default MusicPlayer;
