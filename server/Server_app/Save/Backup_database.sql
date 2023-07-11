CREATE DATABASE TanDangStore;
use TanDangStore;

CREATE TABLE `tandangstore`.`tbl_customer` (
  `idlCustomer` INT NOT NULL AUTO_INCREMENT,
  `nameCustomer` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `status` INT NOT NULL,
  PRIMARY KEY (`idlCustomer`),
  UNIQUE INDEX `emailCustomer_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;

INSERT INTO `tandangstore`.`tbl_customer` (`nameCustomer`, `email`, `password`, `status`) VALUES ('phuc', 'phuc@gmail.com', '123456', '1');

