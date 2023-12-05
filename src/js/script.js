jQuery(document).ready(function () {

    /*
        // Retrieve Files from Folder - TO FIX/FINISH
        var folder = "src/uploads/";

        $.ajax({
          url: folder,
          success: function (data) {
            $(data)
              .find("a")
              .attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                  //pulledFiles.push(new Image(data));
                  //pulledFiles.push(data);

                  console.log(val);

                  $(".cvf_uploaded_files").append(
                    "<li file = '" +
                      folder +
                      val +
                      "'>" +
                      "<img class = 'img-thumb' src = '" +
                      folder +
                      val +
                      "' />" +
                      "<a href = '#' class = 'cvf_delete_image' title = 'Cancel'><img class = 'delete-btn' src = 'src/images/delete_button.png' /></a>" +
                      "</li>"
                  );
                  $(".col-md-6 h5").text("Current displayed images:");
                  console.log("Files Retrieved");
                } else {
                  $(".col-md-6 h5").text("No uploaded images.");
                  console.log("No Files to Retrieve");
                }
              });

            $(".cvf_uploaded_files li").each(function (n) {
              $(this).attr("item", n);
              //var order = $('.cvf_uploaded_files').sortable('toArray', {attribute: 'item'});
              //$('.cvf_hidden_field').n + '.jpg'(order);
              //console.log('Order Added: ' + $(order)[n] + ' Order: ' + order);
              console.log("Order: " + [n]);

              var test = $(this).attr("item", n).children("img").attr("src");
              var test2 = $(this).attr("item", n).children("img");

              getDataUri(test, function (dataUri) {
                //test3 = dataUri;
                if (dataUri.indexOf("data") >= 0) {
                  console.log("dataUri 1: " + dataUri);

                  var image = new File([dataUri], [n] + ".png", {
                    //name: val,
                    type: "image/png",
                  });

                  storedFiles.push(image);
                }
              });

              //var file = dataURLtoFile(dataUri, val);

              //var image = new File([test3], [n] + '.png', {
              //name: val,
              //	type: 'image/png',
              //});

              //console.log('dataUri 2: ' + test4);
              //storedFiles.push(test3);
              //});
            });
          },
        });

        function getDataUri(url, callback) {
          var image = new Image();

          image.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

            canvas.getContext("2d").drawImage(this, 0, 0);

            // Get raw image data
            callback(
              canvas
                .toDataURL("image/png")
                .replace(/^data:image\/(png|jpg);base64,/, "")
            );

            // ... or get as Data URI
            callback(canvas.toDataURL("image/png"));
          };

          image.src = url;
        }

        */
       
        var test3;
        var pulledFiles = [];

        var storedFiles = [];
        $(".cvf_order").hide();

        // Apply sort function
        function cvf_reload_order() {
          var order = $(".cvf_uploaded_files").sortable("toArray", {
            attribute: "item",
          });
          $(".cvf_hidden_field").val(order);

          console.log("Order Reloaded" + $(".cvf_hidden_field"));
          $(".col-md-6 h5").text("Images re-ordered!");
        }

        function cvf_add_order() {
          $(".cvf_uploaded_files li").each(function (n) {
            $(this).attr("item", n);
            var order = $(".cvf_uploaded_files").sortable("toArray", {
              attribute: "item",
            });
            $(".cvf_hidden_field").val(order);
            console.log("Order Added: " + $(order)[n] + " Order: " + order);
          });

          $(".col-md-6 h5").text("Image added!");
          hideLoadingImage();
        }

        $(".cvf_uploaded_files").on("mouseover", "li", function (e) {
          var order = $(this).attr("item");
          console.log("Mouseover:" + order);

          $(".col-md-6 h5").text("Display Order: " + order);
        });

        $(".cvf_uploaded_files").on("mouseout", "li", function (e) {
          $(".col-md-6 h5").text("Drag to re-order the images below.");
        });

        function showLoadingImage() {
          $('<div id="overlay"/>')
            .css({
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: $(window).height() + "px",
              opacity: 0.4,
              background: "lightgray url(src/images/loading.gif) no-repeat center",
            })
            .hide()
            .appendTo("body");

          $("#overlay").show();
          $(".col-md-6 h5").text("Loading...");
        }

        function hideLoadingImage() {
          $("#overlay").hide();
        }

        $(function () {
          $(".cvf_uploaded_files").sortable({
            cursor: "move",
            placeholder: "highlight",
            start: function (event, ui) {
              ui.item.toggleClass("highlight");
              console.log("File Drag Start!");
            },
            stop: function (event, ui) {
              ui.item.toggleClass("highlight");
              cvf_reload_order();
              console.log("File Drag Stop!");
            },
            update: function () {
              console.log("File Drag Update!");
            },
            create: function () {
              var list = this;
              resize = function () {
                $(list).css("height", "auto");
                $(list).height($(list).height());
              };
              $(list).height($(list).height());
              $(list).find("img").load(resize).error(resize);
            },
          });
          $(".cvf_uploaded_files").disableSelection();
        });

        $("body").on("change", ".user_picked_files", function () {
          console.log("Picked File!");

          showLoadingImage();

          var files = this.files;
          var i = 0;

          for (i = 0; i < files.length; i++) {
            var readImg = new FileReader();
            var file = files[i];

            if (file.type.match("image.*")) {
              storedFiles.push(file);
              readImg.onload = (function (file) {
                return function (e) {
                  $(".cvf_uploaded_files").append(
                    "<li file = '" +
                      file.name +
                      "'>" +
                      "<img class = 'img-thumb' src = '" +
                      e.target.result +
                      "' />" +
                      "<a href = '#' class = 'cvf_delete_image' title = 'Cancel'><img class = 'delete-btn' src = 'src/images/delete_button.png' /></a>" +
                      "</li>"
                  );
                };
              })(file);
              readImg.readAsDataURL(file);

              setTimeout(function () {
                cvf_add_order();
              }, 1000);
            } else {
              alert("the file " + file.name + " is not an image<br/>");
            }

            if (files.length === i + 1) {
              setTimeout(function () {
                cvf_add_order();
              }, 1000);
            }
          }
        });

        // Delete Image from Queue
        $("body").on("click", "a.cvf_delete_image", function (e) {
          e.preventDefault();
          $(this).parent().remove("");

          var file = $(this).parent().attr("item");
          for (var i = 0; i < storedFiles.length; i++) {
            if (storedFiles[i].name == file) {
              storedFiles.splice(i, 1);
              break;
            }
          }

          cvf_reload_order();
          $(".col-md-6 h5").text("Image deleted!");
        });

        //AJAX Upload
        $("body").on("click", ".cvf_upload_btn", function (e) {
          e.preventDefault();

          $(".col-md-6 h5").text("Images updated!");

          $("#overlay").show();
          var data = new FormData();

          var items_array = $(".cvf_hidden_field").val();
          var items = items_array.split(",");

          console.log("item array:" + items_array);

          for (var i in items) {
            var item_number = items[i];
            console.log("item number:" + [i]);
            data.append("files" + i, storedFiles[item_number]);
          }

          console.log("Array Populated!" + data);

          $.ajax({
            url: "src/php/upload.php",
            type: "POST",
            contentType: false,
            data: data,
            processData: false,
            cache: false,
            success: function (response, textStatus, jqXHR) {
              $("#overlay").hide();
              //alert(jqXHR.responseText);
              alert("Images Uploaded!");
              location.reload();
            },
          });
        });
      });