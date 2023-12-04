<?php 

if(isset($_FILES) && count($_FILES) > 0){


	$files = glob(__DIR__ . '/uploads/' . '*.jpg'); 	// get all file names
	foreach($files as $file){						 	// iterate files
		if(is_file($file))
			unlink($file);							 	// delete file
	}
    
	//print_r($_FILES);
	
    $i = 1;
    foreach($_FILES as $key => $data){
	
	//print_r($data);
	
        if(file_exists(__DIR__ . '/uploads/' . $i . '.jpg'))
			{ 
				unlink(__DIR__ . '/uploads/' . $i . '.jpg');  
			}
		//if (move_uploaded_file($data['tmp_name'], __DIR__ . '/uploads/' . $i . '--' . $data['name'])) { 
        if (move_uploaded_file($data['tmp_name'], __DIR__ . '/uploads/' . $i . '.jpg')) { 
            //echo "success"; 
            //print_r($data['name']);
        } else {
            //echo "Error Uploading Files, Please Try Again.";
			print_r('Error Uploading Files, Please Try Again.');
        }
        
        $i++;
    }
	
} else {

	$files = glob(__DIR__ . '/uploads/' . '*.jpg'); // get all file names
	foreach($files as $file){ // iterate files
		if(is_file($file))
			unlink($file); // delete file
	}		

print_r('All Images Deleted');

}
