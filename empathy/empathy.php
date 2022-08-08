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
  <div id="title">наверняка кто-то чувствовал себя</div>
  <div id="answer">
    <?php
      echo $_POST['textdata'];
    ?>
  </div>
  <a href="http://empathy.d3mark0.ru/" id="button" style="bottom: 10%;">не хочешь убедиться?</a>
</body>
</html>
