CREATE DATABASE TanDangStore;
use TanDangStore;

-- category

INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('1', 'drone');
INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('2', 'osimo/gimble');
INSERT INTO `tandangstore`.`tbl_categories` (`id`, `name`) VALUES ('3', 'phụ kiện');

-- type
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('1', '1', 'Drone dân dụng');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('2', '1', 'Drone công nghiệp');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('3', '1', 'Drone nông nghiệp');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('4', '2', 'osimo');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('5', '2', 'gimble');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('6', '3', 'drone');
INSERT INTO `tandangstore`.`tbl_types` (`id`, `id_category`, `name`) VALUES ('7', '3', 'gimble');



INSERT INTO `tandangstore`.`tbl_brands` (`id`, `id_type`, `name`, `image`) VALUES ('1', '1', 'dji', 'https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg');
-- product

INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('1', '1', 'Flycam DJI Mini 2');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('2', '1', 'Flycam DJI Mini 2 SE');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('3', '1', 'Flycam Mavic Air 2');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('4', '1', 'Flycam DJI Mavic 2 Zoom');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('5', '1', 'Flycam DJI Mavic 2 Pro');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('6', '1', 'Flycam DJI Mini 3');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('7', '1', 'Flycam DJI Mini 3 Pro');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('8', '1', 'Flycam DJI Mavic 3 Classic');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('9', '2', 'DJI Matrice 350 RTK');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('10', '2', 'DJI Matrice 200 V2');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('11', '2', 'DJI Matrice 600');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('12', '2', 'DJI Matrice 200');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('13', '2', 'DJI Matrice 210 V2');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('14', '3', 'DJI MG-1');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('15', '3', 'DJI Agras T16');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('16', '3', 'DJI Agras T20');
INSERT INTO `tandangstore`.`tbl_products` (`id`, `id_type`, `product_name`) VALUES ('17', '3', 'DJI MG-1S');


INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('1', '1', 'co ban', '20', '200');
INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('2', '1', 'nang cao', '10', '500');
INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `name`, `quantity`, `price`) VALUES ('3', '2', 'full combo', '5', '700');

INSERT INTO `tandangstore`.`tbl_specifications` (`id`, `id_version`, `ios`, `camera`, `gimble`, `flightPerformance`, `battery`, `connect`) VALUES ('1', '1', 'adroid', '20px', 'chong rung', 'khong biet bay', '200mah', 'wifi');
INSERT INTO `tandangstore`.`tbl_specifications` (`id`, `id_version`, `ios`, `camera`, `flightPerformance`, `battery`, `connect`, `sensor`) VALUES ('2', '2', 'ios', '30px', 'biet bay', '2000mah', 'wifi', 'chong va cham');

INSERT INTO `tandangstore`.`tbl_versions` (`id`, `id_product`, `version_name`, `quantity`, `price`, `description`) VALUES ('1', '1', 'Basic', '20', '18900000', 'Là phiên bản nâng cấp của Mavic Air 2, DJI Air 2S được cải tiến mạnh mẽ với nhiều đặc điểm nổi bật như sở hữu cảm biến 1inch cho chất lượng hình ảnh tuyệt vời');