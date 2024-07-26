-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2024 at 10:00 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bioseptic`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `excerpt` text NOT NULL,
  `post_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `title`, `image`, `excerpt`, `post_date`) VALUES
(1, 'How to handle any intricate custom design', 'images/industrial_blog_1.jpg', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', '2018-02-26'),
(2, 'How to handle any intricate custom design', 'images/industrial_blog_2.jpg', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', '2018-02-26'),
(3, 'How to handle any intricate custom design', 'images/industrial_blog_3.jpg', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.', '2018-02-26');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image_path`, `description`) VALUES
(1, 'Wind Sensor', 'images/sensors/wind_sensor.png', 'A sensor for measuring wind speed and direction.'),
(2, 'Rain Gauge', 'images/sensors/rain_gauge.png', 'A device to measure the amount of rainfall.'),
(3, 'Radiation Sensor', 'images/sensors/radiation_sensor.png', 'Sensor to detect radiation levels in the environment.'),
(4, 'Ambient Sensor', 'images/sensors/ambient_sensor.png', 'Sensor for measuring various environmental parameters.'),
(5, 'Soil Sensor', 'images/sensors/soil_sensor.png', 'Sensor to monitor soil moisture and other properties.'),
(6, 'Weather Station', 'images/sensors/weather_station.png', 'A comprehensive system for weather data collection.'),
(7, 'Radiation Shield', 'images/sensors/radiation_shield.png', 'Shield to protect radiation sensors from environmental interference.'),
(8, 'Water Sensor', 'images/sensors/water_sensor.png', 'Sensor to monitor water levels and quality.'),
(9, 'Level Sensor', 'images/sensors/level_sensor.png', 'Sensor to measure the level of various substances.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
