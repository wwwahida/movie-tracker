DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating DECIMAL(3, 1),
  image_url VARCHAR(255),
  summary TEXT,
  genres TEXT[],
  premiered DATE
);

INSERT INTO shows (name, rating, image_url, summary, genres, premiered)
VALUES
    ('Breaking Bad', 9.5, 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg', 'A high school chemistry teacher turned methamphetamine producer.', ARRAY['Crime', 'Drama', 'Thriller'], '2008-01-20'),
    ('Game of Thrones', 9.3, 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg', 'Nine noble families fight for control over the lands of Westeros.', ARRAY['Action', 'Adventure', 'Drama'], '2011-04-17'),
    ('Stranger Things', 8.7, 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', 'A group of kids uncover supernatural mysteries in their small town.', ARRAY['Drama', 'Fantasy', 'Horror'], '2016-07-15'),
    ('The Mandalorian', 8.8, 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg', 'A lone bounty hunter in the outer reaches of the galaxy.', ARRAY['Action', 'Adventure', 'Sci-Fi'], '2019-11-12'),
    ('The Crown', 8.7, 'https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg', 'The political rivalries and romance of Queen Elizabeth II''s reign.', ARRAY['Biography', 'Drama', 'History'], '2016-11-04'),
    ('The Witcher', 8.2, 'https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg', 'A monster hunter struggles to find his place in a world where people often prove more wicked than beasts.', ARRAY['Action', 'Adventure', 'Drama'], '2019-12-20'),
    ('The Office', 8.9, 'https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg', 'A mockumentary on a group of typical office workers.', ARRAY['Comedy'], '2005-03-24'),
    ('Friends', 8.9, 'https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg', 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', ARRAY['Comedy', 'Romance'], '1994-09-22'),
    ('The Simpsons', 8.7, 'https://image.tmdb.org/t/p/w500/vHqeLzYl3dEAtYqTO2RuayjavaT.jpg', 'The satirical adventures of a working-class family in the misfit city of Springfield.', ARRAY['Animation', 'Comedy'], '1989-12-17'),
    ('Westworld', 8.6, 'https://image.tmdb.org/t/p/w500/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg', 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.', ARRAY['Drama', 'Mystery', 'Sci-Fi'], '2016-10-02'),
    ('The Boys', 8.7, 'https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg', 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.', ARRAY['Action', 'Comedy', 'Crime'], '2019-07-26'),
    ('The Umbrella Academy', 8.0, 'https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg', 'A dysfunctional family of adopted sibling superheroes reunite to solve the mystery of their father''s death and the threat of an impending apocalypse.', ARRAY['Action', 'Adventure', 'Comedy'], '2019-02-15'),
    ('The Handmaid''s Tale', 8.4, 'https://image.tmdb.org/t/p/w500/oIkxqt6ug5zT5ZSUUyc1Iqopf02.jpg', 'Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.', ARRAY['Drama', 'Sci-Fi', 'Thriller'], '2017-04-26'),
    ('The Expanse', 8.5, 'https://image.tmdb.org/t/p/w500/8gcn4VJUW76C725086475890215.jpg', 'A thriller set two hundred years in the future, after mankind has colonized the solar system.', ARRAY['Drama', 'Mystery', 'Sci-Fi'], '2015-12-14'),
    ('The Marvelous Mrs. Maisel', 8.7, 'https://image.tmdb.org/t/p/w500/zS7fQiOZiKCVH2vlYSiIsFWW8hh.jpg', 'A housewife in the 1950s discovers she has a knack for stand-up comedy.', ARRAY['Comedy', 'Drama'], '2017-03-17'),
    ('The Queen''s Gambit', 8.6, 'https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg', 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.', ARRAY['Drama'], '2020-10-23'),
    ('The Last Dance', 9.1, 'https://image.tmdb.org/t/p/w500/oVRQ66571284890215789012345.jpg', 'Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the greatest basketball players of all time.', ARRAY['Documentary', 'Sport'], '2020-04-19'),
    ('Velma', 1.6, 'https://image.tmdb.org/t/p/w500/673752348901234567890123456.jpg', 'An adult animated comedy telling the origin story of Velma Dinkley from Mystery Inc.', ARRAY['Animation', 'Comedy', 'Mystery'], '2023-01-12'),
    ('Batwoman', 3.6, 'https://image.tmdb.org/t/p/w500/jnaim9012345678901234567890.jpg', 'Kate Kane seeks justice for Gotham City as Batwoman after Batman disappears.', ARRAY['Action', 'Adventure', 'Crime'], '2019-10-06'),
    ('The Idol', 4.3, 'https://image.tmdb.org/t/p/w500/g90123456789012345678901234.jpg', 'A self-help guru and modern-day cult leader enters a complicated relationship with a rising pop idol.', ARRAY['Drama', 'Music'], '2023-06-04'),
    ('Inhumans', 4.9, 'https://image.tmdb.org/t/p/w500/z23456789012345678901234567.jpg', 'An isolated community of superhumans fights to protect themselves after a military coup.', ARRAY['Action', 'Adventure', 'Sci-Fi'], '2017-09-29');