function createMedia(mediaItem) {
  return {
    id: new Date().getTime(),
    title: mediaItem.title,
    type: mediaItem.type,
    genre: mediaItem.genre,
    releaseYear: mediaItem.releaseYear,
    rating: mediaItem.rating,
    dateCreated: new Date().getTime(),
  };
}

module.exports = createMedia;
