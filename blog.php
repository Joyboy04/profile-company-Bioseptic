<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PT Bioseptic Waterindo Abadi</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Oxygen:400,700" rel="stylesheet">

    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">

    <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css">

    <!-- Theme Style -->
    <link rel="stylesheet" href="css/style.css">

    <link rel="icon" type="image/png" href="./images/logo_bio_baru(1).png">

  </head>
  <body>
    
    <header role="banner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.php">
            <img src="./images/logo_bio_baru(1).png" alt="Bio Logo" class="logo">
            <div class="brand-text">
              <strong class="brand-title">WEATHER SENSORS & ENVIRONMENTAL SENSORS</strong><br>
              <span class="brand-subtitle">BIOSEPTIC WATERINDO ABADI</span>
            </div>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav pl-md-5 ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.php">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.php">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="projects.php">Projects</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="services.html">Architectural Design</a>
                  <a class="dropdown-item" href="services.html">Interior</a>
                  <a class="dropdown-item" href="services.html">Building</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="blog.php">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>           
          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <div class="top-shadow"></div>
    
    <div class="inner-page">
      <div class="slider-item" style="background-image: url('images/background_blog.jpg');">
        <div class="container">
          <div class="row slider-text align-items-center justify-content-center">
            <div class="col-md-8 text-center col-sm-12 element-animate pt-5">
              <h1 class="pt-5"><span>Blog</span></h1>
              <p class="mb-5 w-75">Welcome to the Bio Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END slider -->

    <section class="section blog">
      <div class="container">
        <div class="row justify-content-center mb-5 element-animate">
          <div class="col-md-8 text-center">
            <h2 class="heading mb-4">Blog Posts</h2>
        </div>

        <div class="row">
          <?php
          include 'db/db_connect.php';

          $sql = "SELECT id, title, image, excerpt, post_date FROM blog_posts ORDER BY post_date DESC";
          $result = $conn->query($sql);

          if ($result->num_rows > 0) {
              while ($row = $result->fetch_assoc()) {
                  echo '<div class="col-md-4 mb-4">';
                  echo '<div class="card">';
                  echo '<img src="' . $row["image"] . '" class="card-img-top" alt="' . $row["title"] . '">';
                  echo '<div class="card-body">';
                  echo '<h5 class="card-title">' . $row["title"] . '</h5>';
                  echo '<p class="card-text">' . $row["excerpt"] . '</p>';
                  echo '<a href="blog-single.php?id=' . $row["id"] . '" class="btn btn-danger">Read More</a>';
                  echo '</div>';
                  echo '<div class="card-footer text-muted">';
                  echo date("F jS, Y", strtotime($row["post_date"]));
                  echo '</div>';
                  echo '</div>';
                  echo '</div>';
              }
          } else {
              echo '<p>No blog posts available.</p>';
          }

          $conn->close();
          ?>
        </div>
      </div>
    </section>
    <!-- END section -->

    <footer class="site-footer bg-fixed" role="contentinfo">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4 mb-5">
            <h3>About The Bioseptic Waterindo Abadi</h3>
            <p class="mb-5">PT Bioseptic Waterindo Abadi (Bio) menyediakan layanan EPC, O&M, peralatan pengolahan air dan limbah, serta pelatihan untuk supervisor dan operator. Kami mematuhi standar ISO 9001, ISO 14001, dan ISO 18001, didukung teknologi dari Nordic Water Swedia, dan juga menawarkan sensor cuaca serta sensor lingkungan.</p>
            <ul class="list-unstyled footer-link d-flex footer-social">
              <li><a href="#" class="p-2"><span class="fa fa-twitter text-danger"></span></a></li>
              <li><a href="#" class="p-2"><span class="fa fa-facebook text-danger"></span></a></li>
              <li><a href="https://id.linkedin.com/company/bioseptic-waterindo-abadi" class="p-2" target="_blank"><span class="fa fa-linkedin text-danger"></span></a></li>
              <li><a href="https://www.instagram.com/bioseptic.co.id/" class="p-2" target="_blank"><span class="fa fa-instagram text-danger"></span></a></li>
            </ul>
          </div>
          <div class="col-md-5 mb-5 pl-md-5">
            <h3>Contact Info</h3>
            <ul class="list-unstyled footer-link">
              <li class="d-block">
                <span class="d-block">Production Office Location:</span>
                <div class="address-group">
                  <span>Ruko Batavia Blok LC9/29, Kelapa Gading, Jakarta Utara</span>
                  <br>
                  <span class="d-block address-separator">Main Office Location:</span>
                  <span>Jl. Gading Kirana Utara No.8 Blok F10, RT.11/RW.8, West Kelapa Gading, Kelapa Gading, North Jakarta City, Jakarta 14240</span>
                </div>
              </li>
              <li class="d-block">
                <span class="d-block">Telephone:</span>
                <span>+62 </span>
              </li>
              <li class="d-block">
                <span class="d-block">Email:</span>
                <span>info@gmail.com</span>
              </li>
            </ul>
          </div>
          <div class="col-md-3 mb-5">
            <h3>Quick Links</h3>
            <ul class="list-unstyled footer-link">
              <li><a href="#">About</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Disclaimers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              &copy; <?php echo date("Y"); ?> PT Bioseptic Waterindo Abadi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- END footer -->
    
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
