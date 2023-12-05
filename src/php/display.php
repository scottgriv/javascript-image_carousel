<html>
<link rel="icon" 
		type="image/png" 
		href="../images/favicon.ico">
<?php

	// $ini = parse_ini_file('./config/config.ini'); 					    // Optional config file for settings, adjust the paths below to use this
	$directory = '../uploads';				// image folder directory from config file			
	$countDirect = '../uploads'; 				// image folder directory from config file		
	$extension = '.jpg';  						    						// extension format from config file
	$seconds = '5';		 									    			// seconds to switch between images from config file
    $file_count = count(glob("$countDirect/*$extension"));					// file count for the number of images in the image directory

?>
<head>
<title>Image Carousel</title>
</head>
<body>
    
<!-- Default Logo -->
<img src="../images/logo.png" width="100%" height="100%" id="rotator"/>

<script type="text/javascript">
(function() {
    var rotator = document.getElementById('rotator'), 			// get the element
        dir = '<?php echo $directory . '/' ?>';     			// images folder
        delayInSeconds = <?php echo $seconds ?>,                // delay in seconds
        num = 0o1,                                     			// start number
        len = <?php echo $file_count ?>;             			// limit by counting the number of files in the directory
    setInterval(function(){                           			// interval changer
        rotator.src = dir + num + '<?php echo $extension ?>';   // change image
        num = (num === len + 1) ? location.reload() : ++num;    // reset if last image reached
    }, delayInSeconds * 1000);						 
}());
</script>
</body>
</html>


