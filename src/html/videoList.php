<html>

<body>

    <script>
        $dir = "../video/1";
        $dh = opendir($dir);
        while (false !== ($filename = readdir($dh))) {
            $files[] = $filename;
        }

        sort($files);
        rsort($files);
        print_r($files);

        $files = array();
        if ($handle = opendir('.')) {
            while (false !== ($file = readdir($handle))) {
                if ($file != "." && $file != "..") {
                    $files[filemtime($file)] = $file;
                }
            }
            closedir($handle);

            ksort($files);
  
            // encontrar último modificado
            $reallyLastModified = end($files);

            foreach($files as $file) {
                $lastModified = date('F d Y, H:i:s', filemtime($file));
                if (strlen($file) - strpos($file, ".webm") == 4) {
                    if ($file == $reallyLastModified) {
                        // do stuff for the real last modified file
                    }
                    
                }
            }
        }
    </script>


</body>

</html>