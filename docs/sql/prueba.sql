CREATE DATABASE  IF NOT EXISTS `yourplacedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `yourplacedb`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: yourplacedb-mysql.services.clever-cloud.com    Database: yourplacedb
-- ------------------------------------------------------
-- Server version	8.0.22-13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-1310693';

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `publication`
--

LOCK TABLES `publication` WRITE;
/*!40000 ALTER TABLE `publication` DISABLE KEYS */;
INSERT INTO `publication` VALUES ('23396244-e41a-4e42-be23-cd5e944157f3',120,2,3,1,0,1,0,0,0,1,1,0,'GAS','HOUSE',1200,300,'2021-03-10','2021-03-09 16:58:44.804913',0,'95c0601e-079a-4df0-9f79-cc23a7fa6c61','90162685-0627-40cc-827e-cf973875c831'),('735d2dd2-2e25-4c9a-b232-c2abbaf89a74',230,4,5,1,1,1,0,1,1,0,1,1,'GAS','HOUSE',900,545,'2021-03-28','2021-03-09 17:24:00.504319',0,'95c0601e-079a-4df0-9f79-cc23a7fa6c61','faca659f-ec2b-4f67-8b2b-eaad23495c30'),('88afb0d1-9899-41bc-931d-192247fe7599',120,3,3,0,1,0,0,1,1,0,1,0,'GAS','FLAT',1230,213,'2021-03-11','2021-03-09 17:18:54.818614',0,'95c0601e-079a-4df0-9f79-cc23a7fa6c61','8b4ec9e0-c947-44a0-b93c-284d2c9a744c'),('af84c067-3962-4300-8547-dedd9fe47f62',120,2,3,1,0,1,0,0,0,1,1,0,'GAS','HOUSE',1229,300,'2021-03-10','2021-03-09 16:41:00.675309',0,'95c0601e-079a-4df0-9f79-cc23a7fa6c61','58d32f83-8133-4e53-89cc-22978fac7c4d');
/*!40000 ALTER TABLE `publication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `publication_addresses`
--

LOCK TABLES `publication_addresses` WRITE;
/*!40000 ALTER TABLE `publication_addresses` DISABLE KEYS */;
INSERT INTO `publication_addresses` VALUES ('58d32f83-8133-4e53-89cc-22978fac7c4d','Calle Caballeros N°25 1° Derecha','A','4','A Coruña','Spain',15009,43.3531,-8.40563),('8b4ec9e0-c947-44a0-b93c-284d2c9a744c','Avenida Monelos','left','4','A Coruña','Spain',15009,43.3396,-8.39402),('90162685-0627-40cc-827e-cf973875c831','Calle Juan Florez 120','A','3','A Coruña','Spain',15009,43.3602,-8.4064),('faca659f-ec2b-4f67-8b2b-eaad23495c30','Los Rosales 3','F','5','A Coruña','Spain',15011,43.3738,-8.43707);
/*!40000 ALTER TABLE `publication_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `publication_pictures`
--

LOCK TABLES `publication_pictures` WRITE;
/*!40000 ALTER TABLE `publication_pictures` DISABLE KEYS */;
INSERT INTO `publication_pictures` VALUES ('1a50ad60-9ff1-4993-8643-928c5bef77c6','http://res.cloudinary.com/yourplace/image/upload/v1615310332/YourPlace_IMG/pkpjsyuzbfah61bsr9op.jpg','88afb0d1-9899-41bc-931d-192247fe7599'),('3469c7aa-da3d-4c63-887b-c92688647dcb','http://res.cloudinary.com/yourplace/image/upload/v1615310637/YourPlace_IMG/yzjxfluxq8mchegolyqu.jpg','735d2dd2-2e25-4c9a-b232-c2abbaf89a74'),('44f49ae3-1a85-459f-a5f6-fb237141ba36','http://res.cloudinary.com/yourplace/image/upload/v1615310637/YourPlace_IMG/knr3uro5ttl95gltomzz.jpg','735d2dd2-2e25-4c9a-b232-c2abbaf89a74'),('7b97ae15-14aa-4e97-96ea-fd4332dd65e5','http://res.cloudinary.com/yourplace/image/upload/v1615310332/YourPlace_IMG/l0v1385zixvyccqsrgdc.jpg','88afb0d1-9899-41bc-931d-192247fe7599'),('7ca034a0-f498-453c-b40f-7d2b3dc733e6','http://res.cloudinary.com/yourplace/image/upload/v1615310332/YourPlace_IMG/l0lgcxfwlizidlenrmmc.jpg','88afb0d1-9899-41bc-931d-192247fe7599'),('887070f2-a6b8-43f4-8b19-6ee33278a0be','http://res.cloudinary.com/yourplace/image/upload/v1615310637/YourPlace_IMG/kakpqkatuuyhbcf2dmkn.jpg','735d2dd2-2e25-4c9a-b232-c2abbaf89a74'),('966eab98-7916-4e3a-927f-b7e560cd5922','http://res.cloudinary.com/yourplace/image/upload/v1615308057/YourPlace_IMG/mthbhzm4tzh785der3yf.jpg','af84c067-3962-4300-8547-dedd9fe47f62'),('a8c7f493-e5f3-4c6d-8abc-d001d97f124a','http://res.cloudinary.com/yourplace/image/upload/v1615309121/YourPlace_IMG/p5xtzjergugvmqnbjqu0.jpg','23396244-e41a-4e42-be23-cd5e944157f3'),('cbc6c414-2aa4-44c9-b310-d85830746bf2','http://res.cloudinary.com/yourplace/image/upload/v1615308056/YourPlace_IMG/ukejbkotuscntcbrk0ek.jpg','af84c067-3962-4300-8547-dedd9fe47f62'),('dc6413fa-e9fa-4bb5-8f00-464fa250acfc','http://res.cloudinary.com/yourplace/image/upload/v1615310637/YourPlace_IMG/r3kp2mqyylz0yvxrswmr.jpg','735d2dd2-2e25-4c9a-b232-c2abbaf89a74'),('fb742bed-5575-4be8-89c8-12abc6c300ac','http://res.cloudinary.com/yourplace/image/upload/v1615308056/YourPlace_IMG/efrytzzx5pcqxh5he5ro.jpg','af84c067-3962-4300-8547-dedd9fe47f62');
/*!40000 ALTER TABLE `publication_pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `publication_ratings`
--

LOCK TABLES `publication_ratings` WRITE;
/*!40000 ALTER TABLE `publication_ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `publication_ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_addresses`
--

LOCK TABLES `user_addresses` WRITE;
/*!40000 ALTER TABLE `user_addresses` DISABLE KEYS */;
INSERT INTO `user_addresses` VALUES ('06d79d6e-3d91-4eb1-a6ba-9124bc582b34','','','',0,'95c0601e-079a-4df0-9f79-cc23a7fa6c61');
/*!40000 ALTER TABLE `user_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_billing_addresses`
--

LOCK TABLES `user_billing_addresses` WRITE;
/*!40000 ALTER TABLE `user_billing_addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_billing_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_publication_favorites`
--

LOCK TABLES `user_publication_favorites` WRITE;
/*!40000 ALTER TABLE `user_publication_favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_publication_favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_rating`
--

LOCK TABLES `user_rating` WRITE;
/*!40000 ALTER TABLE `user_rating` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_verification`
--

LOCK TABLES `user_verification` WRITE;
/*!40000 ALTER TABLE `user_verification` DISABLE KEYS */;
INSERT INTO `user_verification` VALUES ('95c0601e-079a-4df0-9f79-cc23a7fa6c61','3edc2fbf131126e9d8ce8d922ca70ec27221612b3f8c2291c2eae77f73485839','2021-03-09 14:52:22','2021-03-09 15:59:07.496000');
/*!40000 ALTER TABLE `user_verification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('95c0601e-079a-4df0-9f79-cc23a7fa6c61',NULL,NULL,NULL,'$2a$15$.u9/6b8FwtKmK1YSDcLSZu8yqro0QTf7nGjHtNOxgD6YyuPlqd2fq','Hamelshmc@gmail.com',1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `visit`
--

LOCK TABLES `visit` WRITE;
/*!40000 ALTER TABLE `visit` DISABLE KEYS */;
/*!40000 ALTER TABLE `visit` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:15:27
