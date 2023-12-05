<?php 

$uploadDir = __DIR__ . '/../uploads/';  // Adjusted path

echo "Upload directory: $uploadDir<br>";

if(isset($_FILES) && count($_FILES) > 0) {
    // Clear the uploads directory
    $files = glob($uploadDir . '*.jpg');
    foreach($files as $file) {
        if(is_file($file)) {
            unlink($file);
        }
    }

    $i = 1;
    foreach($_FILES as $key => $fileData) {
        $targetFile = $uploadDir . $i . '.jpg';
        if (move_uploaded_file($fileData['tmp_name'], $targetFile)) {
            echo "File $i uploaded successfully.<br>";
        } else {
            echo "Error uploading file $i.<br>";
        }
        $i++;
    }
} else {
    echo "No files to upload.<br>";
}
?>
