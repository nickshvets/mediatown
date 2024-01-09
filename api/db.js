module.exports = () => {
  const MediaType = {
    Movie: 'Movie',
    Game: 'Game',
    TVShow: 'TV Show',
  };

  const media = [
    {
      id: 1698759507701,
      title: 'Gladiator',
      type: MediaType.Movie,
      genre: 'Action',
      releaseYear: 2000,
      rating: 8.5,
      dateCreated: 1698759507701,
      image:
        'https://image.film.at/images/cfs_landscape_1864w_1049h/6433854/gladiator-crowe.jpg',
    },
    {
      id: 1698759507703,
      title: 'The Evil Within',
      type: MediaType.Game,
      genre: 'Horror',
      releaseYear: 2014,
      rating: 7.9,
      dateCreated: 1698759507703,
      image:
        'https://free4kwallpapers.com/uploads/originals/2015/12/16/the-evil-within-2014-game-wallpaper.jpg',
    },
    {
      id: 1698759507705,
      title: 'Better Call Saul',
      type: MediaType.TVShow,
      genre: 'Crime',
      releaseYear: 2015,
      rating: 10,
      dateCreated: 1698759507705,
      image: 'https://i.ytimg.com/vi/OO1sBtc2mx4/maxresdefault.jpg',
    },
    {
      id: 1698759507707,
      title: 'The Shawshank Redemption',
      type: MediaType.Movie,
      genre: 'Drama',
      releaseYear: 1994,
      rating: 9.3,
      dateCreated: 1698759507707,
      image:
        'https://sm.ign.com/t/ign_ap/photo/default/shawshank-1627481906266_9j5s.1080.jpg',
    },
    {
      id: 1698759507709,
      title: 'The Last of Us',
      type: MediaType.Game,
      genre: 'Action-Adventure',
      releaseYear: 2013,
      rating: 9.5,
      dateCreated: 1698759507709,
      image: 'https://i.ytimg.com/vi/CCGDDSOY0dQ/maxresdefault.jpg',
    },
    {
      id: 1698759507711,
      title: 'Breaking Bad',
      type: MediaType.TVShow,
      genre: 'Crime',
      releaseYear: 2008,
      rating: 9.5,
      dateCreated: 1698759507711,
      image: 'https://thescl.com/wp-content/uploads/2013/06/Breaking-Bad.jpg',
    },
    {
      id: 1698759507713,
      title: 'Inception',
      type: MediaType.Movie,
      genre: 'Science Fiction',
      releaseYear: 2010,
      rating: 8.8,
      dateCreated: 1698759507713,
      image:
        'https://wallpapermemory.com/uploads/518/inception-background-hd-1600x1024-149071.jpg',
    },
    {
      id: 1698759507715,
      title: 'The Witcher 3: Wild Hunt',
      type: MediaType.Game,
      genre: 'Role-Playing',
      releaseYear: 2015,
      rating: 9.8,
      dateCreated: 1698759507715,
      image:
        'https://i.artfile.me/wallpaper/05-09-2016/1280x960/the-witcher-3--wild-hunt-video-igry-pers-1074413.jpg',
    },
    {
      id: 1698759507717,
      title: 'Stranger Things',
      type: MediaType.TVShow,
      genre: 'Science Fiction',
      releaseYear: 2016,
      rating: 8.7,
      dateCreated: 1698759507717,
      image:
        'https://www.techniknews.net/wp-content/uploads/2022/02/stranger-things-4-1020x689.jpeg',
    },
    {
      id: 1698759507719,
      title: 'Interstellar',
      type: MediaType.Movie,
      genre: 'Science Fiction',
      releaseYear: 2014,
      rating: 8.6,
      dateCreated: 1698759507719,
      image:
        'https://blog.starzplay.com/wp-content/uploads/2020/04/Interstellar.jpg',
    },
    {
      id: 1698759507721,
      title: 'Red Dead Redemption 2',
      type: MediaType.Game,
      genre: 'Action-Adventure',
      releaseYear: 2018,
      rating: 9.7,
      dateCreated: 1698759507721,
      image: 'https://i.ytimg.com/vi/tkC9p1UtSfw/maxresdefault.jpg',
    },
    {
      id: 1698759507723,
      title: 'Game of Thrones',
      type: MediaType.TVShow,
      genre: 'Fantasy',
      releaseYear: 2011,
      rating: 9.3,
      dateCreated: 1698759507723,
      image:
        'https://static.nexilia.it/mangaforever/2016/04/dXBsb2FkRmlsZV8zXzE0NTQzMzM1MzA1MDU.jpg',
    },
    {
      id: 1698759507725,
      title: 'Pulp Fiction',
      type: MediaType.Movie,
      genre: 'Crime',
      releaseYear: 1994,
      rating: 8.9,
      dateCreated: 1698759507725,
      image:
        'https://i.ytimg.com/vi/TaT9eQexGjM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTygxMA8=&amp;rs=AOn4CLAbP4UMAw_9GXgmjan0ajebqdRzLA',
    },
    {
      id: 1698759507727,
      title: 'Cyberpunk 2077',
      type: MediaType.Game,
      genre: 'Role-Playing',
      releaseYear: 2020,
      rating: 7.2,
      dateCreated: 1698759507727,
      image:
        'https://www.thesun.co.uk/wp-content/uploads/2021/03/COMP-CFP-CUBERPUNK.jpg?strip=all&quality=100&w=1200&h=800&crop=1',
    },
    {
      id: 1698759507729,
      title: 'Friends',
      type: MediaType.TVShow,
      genre: 'Comedy',
      releaseYear: 1994,
      rating: 8.5,
      dateCreated: 1698759507729,
      image:
        'https://foodandmood.com.ua/i/10/82/87/7/1082877/image_main/3ded566587fc7c3acd54bd7117f3a889-resize_crop_1Xquality_100Xallow_enlarge_0Xw_1200Xh_630.jpg',
    },
    {
      id: 1698759507731,
      title: 'The Matrix',
      type: MediaType.Movie,
      genre: 'Science Fiction',
      releaseYear: 1999,
      rating: 8.7,
      dateCreated: 1698759507731,
      image:
        'https://www.desktopbackground.org/p/2014/05/13/761900_wallpapers-monster-energy-logo-movie-the-matrix-in-resolution_1024x768_h.jpg',
    },
    {
      id: 1698759507733,
      title: "Assassin's Creed Valhalla",
      type: MediaType.Game,
      genre: 'Action-Adventure',
      releaseYear: 2020,
      rating: 8.0,
      dateCreated: 1698759507733,
      image:
        'https://www.epicdope.com/wp-content/uploads/2020/08/A-CREED-VALHalla.jpg',
    },
    {
      id: 1698759507737,
      title: 'Avatar',
      type: MediaType.Movie,
      genre: 'Science Fiction',
      releaseYear: 2009,
      rating: 7.8,
      dateCreated: 1698759507737,
      image:
        'https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/452401/846ffe1966a900eb76d96d02e75cd289-Avatar_202.jpeg',
    },
    {
      id: 1698759507739,
      title: 'The Legend of Zelda: Breath of the Wild',
      type: MediaType.Game,
      genre: 'Action-Adventure',
      releaseYear: 2017,
      rating: 9.5,
      dateCreated: 1698759507739,
      image:
        'https://sysadmin-note.ru/media/d/2009213c1d912409a152f7b16d4db95a.webp',
    },
  ];

  const data = { media };

  return data;
};
