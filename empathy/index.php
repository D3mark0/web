<!DOCTYPE html>
<html>
<title>сегодня я чувствую себя</title>
<script type="text/javascript" src="script.js"></script>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif">
</head>

<body>
  <script>
    var theme = document.getElementsByTagName('link')[0];
    if (screen.width > screen.height) {
        theme.setAttribute('href', 'styles.css');
    } else {
        theme.setAttribute('href', 'styles-mobile.css');
    }
  </script>
  <div id="title">сегодня я чувствую себя</div>
  <div id="answer">
    <?php
      $f_contents = file("data_out.txt");
      $line = $f_contents[rand(0, count($f_contents) - 1)];
      echo $line;
    ?>
  </div>
  <div id="question">а как чувствуешь себя ты?</div>
  <form action="data.php" method="post">
    <input type="text" id="input" name="textdata" value="">
    <input type="submit" id="button" value="вот так">
  </form>
  <?php
    include "data.php";
  ?>
</body>
</html>
