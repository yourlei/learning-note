create table course {
	'id' int(10),
	'cousreID' char(10),
	'cousreName' char(10),
	PRIMARY KEY ('id')
}
CREATE TABLE `cousre` (
  `id` int(10) NOT NULL,
  `name` varchar(20),
  `sex` varchar(5),
  `age` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `score` {
  `id` int(10) NOT NULL,
  `name` char(8),
  `score` float(2),
  PRIMARY KEY (`id`)
};