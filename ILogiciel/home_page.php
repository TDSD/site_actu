<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Site d'actualité MGLSI</title>
    <link rel="stylesheet" href="home_page.css" type="text/css" media="screen" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script type="text/javascript" src="home_page.js"></script>
  </head>
  <body>
    <h2 class="display-5">Site d'actualité MGLSI</h2>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">CATEGORIES</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="tout()">Tout</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="sport()">Sport</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="sante()">Santé</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="education()">Education </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onclick="politique()">Politique</a>
              </li>
            </ul>
          </div>
        </div>
      </nav></br>

        <?php
            $con=mysqli_connect("localhost","root","","mglsi_news");
            $req="select * from Article";
            $result=mysqli_query($con,$req);

            $chaine = "<div class = 'list-group'>";
            while($ligne=mysqli_fetch_assoc($result))
            {
              $lib = $ligne['categorie'];
              $reqdx = "select libelle from categorie where id = $lib ";
              $resultdx =mysqli_query($con,$reqdx);
              $row = mysqli_fetch_assoc($resultdx);
              $chaine  =$chaine."<div class='list-group-item " . $row['libelle'] ."'><a class = 'list-group-item-heading'>" .$ligne['titre'] . "</a><p class = 'list-group-item-text'>" .$ligne['contenu'] . "</p></div>";
            }
            $chaine =$chaine."</div>";
            echo $chaine;
        ?>
        
</html>
