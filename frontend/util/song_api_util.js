export const fetchSongs = () => {
    return $.ajax ({
        url: '/api/songs',
        method: 'GET'
    })
};

export const fetchSong = (songId) => {
    return $.ajax ({
        url: `/api/songs/${songId}`,
        method: "GET"
    })
};

export const createSong = (songData) => {
    return $.ajax ({
        url: '/api/songs',
        method: 'POST',
        data: {songData}
    })
};

export const updateSong = (songData, songId) => {
    return $.ajax ({
        url: `/api/songs/${songId}`,
        method: 'PATCH',
        data: {songData}
    })
};

export const deleteSong = (songId) => {
    return $.ajax({
        url: `/api/songs/${songId}`,
        method: 'DELETE'
    })
}