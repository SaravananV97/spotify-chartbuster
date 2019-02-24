CREATE TABLE `heroku_82741746b247fba`.`songs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `song_name` VARCHAR(100) NOT NULL,
  `artist_name` VARCHAR(45) NULL DEFAULT NULL,
  `dance_ability` FLOAT(5,5) NULL DEFAULT NULL,
  `energy` FLOAT(5,5) NULL DEFAULT NULL,
  `key` INT(11) NULL DEFAULT NULL,
  `Loudness` FLOAT(5,5) NULL DEFAULT NULL,
  `Mode` INT(11) NULL DEFAULT NULL,
  `speechiness` FLOAT(5,5) NULL DEFAULT NULL,
  `acousticness` DOUBLE NULL DEFAULT NULL,
  `instrumentness` DOUBLE NULL DEFAULT NULL,
  `valence` DOUBLE NULL DEFAULT NULL,
  `tempo` DOUBLE NULL DEFAULT NULL,
  `duration_ms` BIGINT(10) NULL DEFAULT NULL,
  `time_sign` INT(11) NULL DEFAULT NULL,
  `Rank` INT(11) NULL DEFAULT NULL
  PRIMARY KEY (`id`));



INSERT INTO `heroku_82741746b247fba`.`songs`
(
`song_name`,
`artist_name`,
`dance_ability`,
`energy`,
`key`,
`Loudness`,
`Mode`,
`speechiness`,
`acousticness`,
`instrumentness`,`liveness`,
`valence`,
`tempo`,
`duration_ms`,
`time_sign`,
`Rank`)
VALUES
(
'God''s Plan',	'Drake', 0.754,	
0.449,	7,	-9.211,	1,	0.109,	0.0332,	8.29E-05,	0.552,	0.357,	77.169,	198973,	4,	1);


SELECT `songs`.`id`,
    `songs`.`song_name`,
    `songs`.`artist_name`,
    `songs`.`dance_ability`,
    `songs`.`energy`,
    `songs`.`key`,
    `songs`.`Loudness`,
    `songs`.`Mode`,
    `songs`.`speechiness`,
    `songs`.`acousticness`,
    `songs`.`instrumentness`,
    `songs`.`valence`,
    `songs`.`tempo`,
    `songs`.`duration_ms`,
    `songs`.`time_sign`,
    `songs`.`Rank`
FROM `heroku_82741746b247fba`.`songs`;








