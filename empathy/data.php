<?php
  if(isset($_POST['textdata'])) {
      $data = $_POST['textdata'];
      $eol = PHP_EOL;
      $fp = fopen('data_in.txt', 'a');
      fwrite($fp, $data);
      fwrite($fp, $eol);
      fclose($fp);

      $url = 'http://empathy.d3mark0.ru/empathy.php';
      $fields = array(
         'textdata' => $data
      );
      $postvars = http_build_query($fields);
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_POST, count($fields));
      curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
      $result = curl_exec($ch);
      curl_close($ch);
    }
?>
