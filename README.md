<!-- Begin README -->

<div align="center">
    <a href="https://github.com/scottgriv/php-image_carousel" target="_blank">
        <img src="./docs/images/icon.png" width="150" height="150"/>
    </a>
</div>
<p align="center">
    <a href="https://www.php.net/"><img src="https://img.shields.io/badge/PHP-8.2-777BB4?style=for-the-badge&logo=php" alt="PHP Badge" /></a>
    <a href="https://releases.jquery.com/jquery/"><img src="https://img.shields.io/badge/jQuery-2.1.3-0769AD?style=for-the-badge&logo=jquery" alt="jQuery Badge" /></a>
    <a href="https://www.apachefriends.org/blog/new_xampp_20220516.html"><img src="https://img.shields.io/badge/XAMPP-8.1.6-FB7A24?style=for-the-badge&logo=xampp" alt="XAMPP Badge" /></a>
    <br>
    <a href="https://github.com/scottgriv"><img src="https://img.shields.io/badge/github-follow_me-181717?style=for-the-badge&logo=github&color=181717" alt="GitHub Badge" /></a>
    <a href="mailto:scott.grivner@gmail.com"><img src="https://img.shields.io/badge/gmail-contact_me-EA4335?style=for-the-badge&logo=gmail" alt="Email Badge" /></a>
    <a href="https://www.buymeacoffee.com/scottgriv"><img src="https://img.shields.io/badge/buy_me_a_coffee-support_me-FFDD00?style=for-the-badge&logo=buymeacoffee&color=FFDD00" alt="BuyMeACoffee Badge" /></a>
    <br>
    <a href="https://prgoptimized.com" target="_blank"><img src="https://img.shields.io/badge/PRG-Bronze Project-CD7F32?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjYuMDAwMDAwcHQiIGhlaWdodD0iMzQuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNi4wMDAwMDAgMzQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNDRDdGMzIiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzMjggYy04IC04IC0xMiAtNTEgLTEyIC0xMzUgMCAtMTA5IDIgLTEyNSAxOSAtMTQwIDQyIC0zOCA0OAotNDIgNTkgLTMxIDcgNyAxNyA2IDMxIC0xIDEzIC03IDIxIC04IDIxIC0yIDAgNiAyOCAxMSA2MyAxMyBsNjIgMyAwIDE1MCAwCjE1MCAtMTE1IDMgYy04MSAyIC0xMTkgLTEgLTEyOCAtMTB6IG0xMDIgLTc0IGMtNiAtMzMgLTUgLTM2IDE3IC0zMiAxOCAyIDIzCjggMjEgMjUgLTMgMjQgMTUgNDAgMzAgMjUgMTQgLTE0IC0xNyAtNTkgLTQ4IC02NiAtMjAgLTUgLTIzIC0xMSAtMTggLTMyIDYKLTIxIDMgLTI1IC0xMSAtMjIgLTE2IDIgLTE4IDEzIC0xOCA2NiAxIDc3IDAgNzIgMTggNzIgMTMgMCAxNSAtNyA5IC0zNnoKbTExNiAtMTY5IGMwIC0yMyAtMyAtMjUgLTQ5IC0yNSAtNDAgMCAtNTAgMyAtNTQgMjAgLTMgMTQgLTE0IDIwIC0zMiAyMCAtMTgKMCAtMjkgLTYgLTMyIC0yMCAtNyAtMjUgLTIzIC0yNiAtMjMgLTIgMCAyOSA4IDMyIDEwMiAzMiA4NyAwIDg4IDAgODggLTI1eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="Bronze" /></a>
</p>

---------------

<h1 align="center">Image Carousel</h1>

Upload and Organize Images for Display: This application allows users to upload multiple images and arrange them in a preferred order. After the images are sorted, the application cycles through these organized images stored in a specific directory, presenting them in a sequential display for informational or decorative purposes.

<div align="center">
    <img src="./docs/images/demo_1.gif" width="40%" />
    <br>
    <i>Upload and sort images.</i>
</div>
<br>
<div align="center">
    <img src="./docs/images/demo_2.gif" width="40%" />
    <br>
    <i>View the images in a carousel on a display.</i>
</div>

---------------

## Table of Contents

- [Getting Started](#getting-started)
- [Resources](#resources)
- [License](#license)
- [Credits](#credits)

## Getting Started

1. Clone the repository to your local machine.
2. Move the repository to your web server's root directory (such as XAMPP's htdocs folder).
3. Start your web server and navigate to the upload image interface in your web browser.

    ``ex. http://localhost/php-image_carousel/upload.html``
4. Click the **Choose Files** button to select the images you want to upload.
5. Rearrange the images in the order you want them to be displayed.
6. Click **Save** to upload the images to the server.
7. Navigate to the full ``Display_Solution.php`` web server address in your web browser.

    ``ex. http://localhost/php-image_carousel/display.php``
8. The images will be displayed in the order you arranged them in the previous step.

> [!NOTE]
> This project is an extension of my [Display Solution](https://github.com/scottgriv/php-display_solution), which is a simple script that cycles through image files in a declared directory for informative displays. The [Image Carousel](https://github.com/scottgriv/php-image_carousel) project adds the ability to upload and organize images for display without having to manually edit the file names.

> [!WARNING]
> Currently, the ability to retieve previously uploaded images is not available. If you want to change the images being displayed, you will need to upload new images and arrange them in the order you want them to be displayed.
> I will work on adding this feature in the future. Feel free to submit a pull request if you would like to contribute to this project and add this feature.

## Resources

- [PHP](https://www.php.net/)
- [jQuery](https://jquery.com/)
- [XAMPP](https://www.apachefriends.org/index.html)

## License

This project is released under the terms of **The Unlicense**, which allows you to use, modify, and distribute the code as you see fit. 
- [The Unlicense](https://choosealicense.com/licenses/unlicense/) removes traditional copyright restrictions, giving you the freedom to use the code in any way you choose.
- For more details, see the [LICENSE](LICENSE) file in this repository.

## Credits

**Author:** [Scott Grivner](https://github.com/scottgriv) <br>
**Email:** [scott.grivner@gmail.com](mailto:scott.grivner@gmail.com) <br>
**Website:** [scottgrivner.dev](https://www.scottgrivner.dev) <br>
**Reference:** [Main Branch](https://github.com/scottgriv/php-image_carousel) <br>

---------------

<div align="center">
    <a href="https://github.com/scottgriv" target="_blank">
        <img src="./docs/images/footer.png" width="100" height="100"/>
    </a>
</div>

<!-- End README -->
