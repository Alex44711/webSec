-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL COMMENT 'account',
  `password` varchar(255) DEFAULT NULL COMMENT 'password',
  `nickname` varchar(255) DEFAULT '' COMMENT 'nickname',
  `role` varchar(255) DEFAULT '' COMMENT 'role',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;