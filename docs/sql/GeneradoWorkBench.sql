-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema yourplacedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `yourplacedb` ;

-- -----------------------------------------------------
-- Schema yourplacedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yourplacedb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `yourplacedb` ;

-- -----------------------------------------------------
-- Table `yourplacedb`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`users` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`users` (
  `id` VARCHAR(36) NOT NULL,
  `fullname` VARCHAR(200) NULL DEFAULT NULL,
  `dni` VARCHAR(9) NULL DEFAULT NULL,
  `borndate` DATE NULL DEFAULT NULL,
  `password` VARCHAR(250) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `verified` TINYINT(1) NOT NULL DEFAULT '0',
  `picture` VARCHAR(250) NULL DEFAULT NULL,
  `background` VARCHAR(250) NULL DEFAULT NULL,
  `bio` VARCHAR(180) NULL DEFAULT NULL,
  `telephone` VARCHAR(12) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `telephone` (`telephone` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`publication_addresses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`publication_addresses` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`publication_addresses` (
  `id` VARCHAR(36) NOT NULL,
  `street` VARCHAR(200) NOT NULL,
  `door` VARCHAR(5) NOT NULL,
  `floor` VARCHAR(5) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  `zipcode` INT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `longitude` FLOAT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`publication`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`publication` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`publication` (
  `id` VARCHAR(36) NOT NULL,
  `area` INT NOT NULL,
  `rooms` INT NOT NULL,
  `bathrooms` INT NOT NULL,
  `garage` TINYINT(1) NULL DEFAULT '0',
  `elevator` TINYINT(1) NULL DEFAULT '0',
  `furnished` TINYINT(1) NULL DEFAULT '0',
  `pets` TINYINT(1) NULL DEFAULT '0',
  `parking` TINYINT(1) NULL DEFAULT '0',
  `garden` TINYINT(1) NULL DEFAULT '0',
  `pool` TINYINT(1) NULL DEFAULT '0',
  `terrace` TINYINT(1) NULL DEFAULT '0',
  `storage_room` TINYINT(1) NULL DEFAULT '0',
  `heating` ENUM('GAS', 'ELECTRICAL') NULL DEFAULT 'ELECTRICAL',
  `publication_type` ENUM('FLAT', 'HOUSE') NOT NULL,
  `deposit` FLOAT NULL DEFAULT '0',
  `price` FLOAT NOT NULL,
  `availability_date` DATE NOT NULL,
  `timestamp` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `disabled` TINYINT(1) NOT NULL DEFAULT '0',
  `id_user` VARCHAR(50) NOT NULL,
  `id_publication_address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user` (`id_user` ASC) VISIBLE,
  INDEX `id_publication_address` (`id_publication_address` ASC) VISIBLE,
  CONSTRAINT `publication_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`),
  CONSTRAINT `publication_ibfk_2`
    FOREIGN KEY (`id_publication_address`)
    REFERENCES `yourplacedb`.`publication_addresses` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`booking`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`booking` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`booking` (
  `id` VARCHAR(36) NOT NULL,
  `timestamp` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `start_date` DATE NOT NULL,
  `end_date` DATE NULL DEFAULT NULL,
  `acepted` TINYINT(1) NOT NULL DEFAULT '0',
  `id_user_payer` VARCHAR(50) NOT NULL,
  `id_publication` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user_payer` (`id_user_payer` ASC) VISIBLE,
  INDEX `id_publication` (`id_publication` ASC) VISIBLE,
  CONSTRAINT `booking_ibfk_1`
    FOREIGN KEY (`id_user_payer`)
    REFERENCES `yourplacedb`.`users` (`id`),
  CONSTRAINT `booking_ibfk_2`
    FOREIGN KEY (`id_publication`)
    REFERENCES `yourplacedb`.`publication` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`messages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`messages` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`messages` (
  `id` VARCHAR(36) NOT NULL,
  `timestamp` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `message` VARCHAR(200) NOT NULL,
  `id_user_sender` VARCHAR(50) NOT NULL,
  `id_user_receiver` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user_sender` (`id_user_sender` ASC) VISIBLE,
  INDEX `id_user_receiver` (`id_user_receiver` ASC) VISIBLE,
  CONSTRAINT `messages_ibfk_1`
    FOREIGN KEY (`id_user_sender`)
    REFERENCES `yourplacedb`.`users` (`id`),
  CONSTRAINT `messages_ibfk_2`
    FOREIGN KEY (`id_user_receiver`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`notifications`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`notifications` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`notifications` (
  `id` VARCHAR(36) NOT NULL,
  `timestamp` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `notification_type` ENUM('MESSAGE', 'VISIT', 'BOOKING', 'PAYMENT', 'RATING') NOT NULL,
  `seen` TINYINT(1) NOT NULL DEFAULT '0',
  `id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user` (`id_user` ASC) VISIBLE,
  CONSTRAINT `notifications_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`publication_pictures`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`publication_pictures` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`publication_pictures` (
  `id` VARCHAR(36) NOT NULL,
  `url` VARCHAR(200) NOT NULL,
  `id_publication` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_publication` (`id_publication` ASC) VISIBLE,
  CONSTRAINT `publication_pictures_ibfk_1`
    FOREIGN KEY (`id_publication`)
    REFERENCES `yourplacedb`.`publication` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`publication_ratings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`publication_ratings` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`publication_ratings` (
  `rating` INT NOT NULL,
  `timestamp` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `comment` VARCHAR(180) NOT NULL,
  `id_publication` VARCHAR(50) NOT NULL,
  `id_user_voter` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_publication`, `id_user_voter`),
  INDEX `id_user_voter` (`id_user_voter` ASC) VISIBLE,
  CONSTRAINT `publication_ratings_ibfk_1`
    FOREIGN KEY (`id_publication`)
    REFERENCES `yourplacedb`.`publication` (`id`),
  CONSTRAINT `publication_ratings_ibfk_2`
    FOREIGN KEY (`id_user_voter`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`transactions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`transactions` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`transactions` (
  `id` VARCHAR(36) NOT NULL,
  `timestamp` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `amount` INT NOT NULL,
  `success` TINYINT(1) NOT NULL,
  `id_booking` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_booking` (`id_booking` ASC) VISIBLE,
  CONSTRAINT `transactions_ibfk_1`
    FOREIGN KEY (`id_booking`)
    REFERENCES `yourplacedb`.`booking` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`user_addresses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`user_addresses` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`user_addresses` (
  `id` VARCHAR(36) NOT NULL,
  `street` VARCHAR(250) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  `zipcode` INT NOT NULL,
  `id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_user` (`id_user` ASC) VISIBLE,
  CONSTRAINT `user_addresses_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`user_billing_addresses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`user_billing_addresses` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`user_billing_addresses` (
  `id` VARCHAR(36) NOT NULL,
  `card_number` INT NOT NULL,
  `card_expiry` DATE NOT NULL,
  `id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_user` (`id_user` ASC) VISIBLE,
  CONSTRAINT `user_billing_addresses_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`user_publication_favorites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`user_publication_favorites` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`user_publication_favorites` (
  `id_user` VARCHAR(50) NOT NULL,
  `id_publication` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_user`, `id_publication`),
  INDEX `id_publication` (`id_publication` ASC) VISIBLE,
  CONSTRAINT `user_publication_favorites_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`),
  CONSTRAINT `user_publication_favorites_ibfk_2`
    FOREIGN KEY (`id_publication`)
    REFERENCES `yourplacedb`.`publication` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`user_rating`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`user_rating` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`user_rating` (
  `rating` INT NOT NULL,
  `timestamp` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `comment` VARCHAR(200) NOT NULL,
  `id_user_voter` VARCHAR(50) NOT NULL,
  `id_user_voted` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_user_voter`, `id_user_voted`),
  INDEX `id_user_voted` (`id_user_voted` ASC) VISIBLE,
  CONSTRAINT `user_rating_ibfk_1`
    FOREIGN KEY (`id_user_voter`)
    REFERENCES `yourplacedb`.`users` (`id`),
  CONSTRAINT `user_rating_ibfk_2`
    FOREIGN KEY (`id_user_voted`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`user_verification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`user_verification` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`user_verification` (
  `id_user` VARCHAR(36) NOT NULL,
  `verification_code` CHAR(64) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `verified_at` TIMESTAMP(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  CONSTRAINT `user_verification_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `yourplacedb`.`visit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `yourplacedb`.`visit` ;

CREATE TABLE IF NOT EXISTS `yourplacedb`.`visit` (
  `id` VARCHAR(36) NOT NULL,
  `visit_date` DATE NOT NULL,
  `visit_hour` TIME NOT NULL,
  `acepted` TINYINT(1) NOT NULL DEFAULT '0',
  `id_publication` VARCHAR(50) NOT NULL,
  `id_user_visitant` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_publication` (`id_publication` ASC) VISIBLE,
  INDEX `id_user_visitant` (`id_user_visitant` ASC) VISIBLE,
  CONSTRAINT `visit_ibfk_1`
    FOREIGN KEY (`id_publication`)
    REFERENCES `yourplacedb`.`publication` (`id`),
  CONSTRAINT `visit_ibfk_2`
    FOREIGN KEY (`id_user_visitant`)
    REFERENCES `yourplacedb`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
