import React from "react";
import LibrarySong from "./LibrarySong.jsx";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@material-tailwind/react";

const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus,setLibraryStatus }) => {
	return (
		<LibraryContainer className="text-white bg-gray-700" libraryStatus={libraryStatus}>
			<H1 className="text-white" >Könyvtár</H1>
            <div className="flex w-full justify-center my-2">
                <Button className="text-white w-48" onClick={() => setLibraryStatus(!libraryStatus)}>
                    Vissza
                </Button>
            </div>
			<SongContainer className="text-white bg-gray-700">
				{songs.map((song) => (
					<LibrarySong className="text-white bg-gray-700"
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						setSongs={setSongs}
					/>
				))}
			</SongContainer>

		</LibraryContainer>
	);
};
const LibraryContainer = styled.div`
    color: white;
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    box-shadow: 2px 2px 50px rgb(77, 76, 76);
    user-select: none;
    overflow: scroll;
    transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
    transition: all 0.5s ease;
    opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    @media screen and (max-width: 760px) {
        width: 100%;
        z-index: 9;
    }
`;

const SongContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #595858;
    color: #d3d0d0;
`;

const H1 = styled.h2`
	padding: 2rem;
    color: white;
`;

export default Library;
