<?php

$conn = new mysqli("localhost","root","","music-web");


if (!empty($_GET["name"])) {
    // print_r($_GET["name"]);
    $sql = "SELECT * FROM music";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $datas = [];
        while($data = $result->fetch_assoc()){
            $datas[] = $data;
          }
          exit(json_encode($datas));
        // print_r($datas)
    }
}
// window.loaction="api.php?filename=ugguguug.png";
if (!empty($_GET["filename"])) {
    //    print_r($_GET["filename"]);
    //    die();
    // images/
      $name = $_GET["filename"];
      $dir = "music/";
       if (file_exists($dir.$name)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/force-download');
        header('Content-Disposition: attachment;filename='.$name);
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($dir.$name));
        header('Content-Type: application/octet-stream');
        ob_clean();
        flush();
        readfile($dir.$name);
        exit("gotten");
       }else{
           die("ufifififuif");
       }
    }
    
?>

