json.extract! song, :id, :user_id, :title, :genre, :description
json.songUrl url_for(song.song) if song.song.attached?
json.songPhoto url_for(song.photo) if song.photo.attached?
