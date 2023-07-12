CREATE DATABASE TanDangStore;
use TanDangStore;

INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('1', 'drone');
INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('2', 'osimo/gimble');
INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('3', 'phụ kiện');

INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('1', '1', 'Drone dân dụng');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('2', '1', 'Drone công nghiệp');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('3', '1', 'Drone nông nghiệp');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('4', '2', 'osimo');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('5', '2', 'gimble');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('6', '3', 'drone');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('7', '3', 'gimble');
