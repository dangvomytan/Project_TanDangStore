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



INSERT INTO `tandangstore`.`tbl_brands` (`id`, `id_type`, `name`, `image`) VALUES ('1', '1', 'dji', 'https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg');


INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `name`, `createdAt`, `updatedAt`) VALUES ('1', '1', 'Flycam DJI Mini 3 Pro', '2023-07-13', '2023-07-13');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `name`, `createdAt`, `updatedAt`) VALUES ('2', '1', 'Flycam DJI Air 2S', '2023-07-13', '2023-07-13');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `name`, `createdAt`, `updatedAt`) VALUES ('3', '1', 'Flycam DJI Mini 2 SE', '2023-07-13', '2023-07-13');

INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('1', '1', 'co ban', '20', '200');
INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('2', '1', 'nang cao', '10', '500');
INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('3', '2', 'full combo', '5', '700');

INSERT INTO `tandangstore`.`tbl_specifications` (`id`, `id_version`, `ios`, `camera`, `gimble`, `flightPerformance`, `battery`, `connect`) VALUES ('1', '1', 'adroid', '20px', 'chong rung', 'khong biet bay', '200mah', 'wifi');
INSERT INTO `tandangstore`.`tbl_specifications` (`id`, `id_version`, `ios`, `camera`, `flightPerformance`, `battery`, `connect`, `sensor`) VALUES ('2', '2', 'ios', '30px', 'biet bay', '2000mah', 'wifi', 'chong va cham');
