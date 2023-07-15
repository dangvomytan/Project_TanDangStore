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

-- product
INSERT INTO `tandangstore`.`tbl_products` (`id_type`, `product_name`, `createdAt`, `updatedAt`) VALUES 
('1', 'Flycam DJI Mini SE', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Air 2', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Mini 2', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Mavic 2 Zoom', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Air 3 Pro', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Mini 3 Pro', '2023-07-14', '2023-07-14'),
('1', 'Flycam DJI Mavic 3', '2023-07-14', '2023-07-14'),
('2', 'Flycam DJI Mavic 2 Enterprise', '2023-07-14', '2023-07-14'),
('2', 'Flycam DJI Matrice', '2023-07-14', '2023-07-14'),
('3', 'Flycam DJI MG-1', '2023-07-14', '2023-07-14');






-- version
INSERT INTO `tandangstore`.`tbl_versions` ( `id_product`, `version_name`, `quantity`, `price`) VALUES
('10', 'Basic', 10, 7900000),
('10', 'Fly More Combo', 10, 11000000),
('11', 'Basic', 10, '15000000'),
('11', 'Fly More Combo', 10, 24000000),
('11', 'Smart Controller Combo', 10, 22000000),
('12', 'Basic', 10, 11500000),
('12', 'Fly More Combo', 10, 18000000),
('13', 'Basic', 10, 25000000),
('13', ' Smart Controller', 10, 30000000),
('14', 'Basic', 10, 17000000),
('14', 'No RC', 10, 19000000),
('14', 'DJI RC', 10, 23000000),
('15', 'Basic', 10, 48000000),
('15', 'Fly More Combo', 10, 54000000),
('15', 'Cine Premium Combo', 10, 63000000),
('16', 'Basic', 10, 46000000),
('16', 'Fly More Combo', 10, 55000000),
('16', 'Cine Premium Combo', 10, 119000000),
('17', 'Advanced', 10, '9000000'),
('17', '300 RTK', 10, 148000000),
('18', '200 RTK V2', 10, 111000000),
('18', '210 RTK', 10, 112000000),
('19', 'Basic', 10, 511000000),
('19', 'Fly More Combo', 10, 60000000);

