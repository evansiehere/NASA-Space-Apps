$(document).ready(function(){
  // Search functionality
  $('#search-menu').on("keyup", function() {
    var value = $(this).val().toLowerCase();

    // Check if the search bar is empty
    if (value === '') {
      // Show all main menu items and collapse sub-menus
      $('.menu .item').show(); // Show all main items
      $('.menu .sub-menu').hide(); // Hide all sub-menus
      $('.menu .sub-item').show(); // Show all sub-items
    } else {
      // Loop through each main menu item when there's input
      $('.menu .item').each(function() {
        var showMainItem = false;  // Flag to control whether to show the main menu item
        var mainItem = $(this);

        // Check if the search value matches the main menu item (section)
        var mainItemText = mainItem.children('a').text().toLowerCase().trim();
        var isMainSearch = mainItemText.indexOf(value) > -1;

        // If the main section is searched, show the section and all sub-sections
        if (isMainSearch) {
          mainItem.show(); // Show the main item
          mainItem.find('.sub-menu').show(); // Show all sub-sections under this main section
          showMainItem = true;  // Set flag to true to keep the main section visible
        } else {
          // If searching for sub-sections, hide the whole sub-menu initially
          mainItem.find('.sub-menu').hide();
        }

        // Search through the sub-menu items only if not searching for a main section
        if (!isMainSearch) {
          // Loop through sub-menu items
          mainItem.find('.sub-menu .sub-item').each(function() {
            var subItemText = $(this).text().toLowerCase();

            // Check if sub-menu item matches the search value
            if (subItemText.indexOf(value) > -1) {
              $(this).show(); // Show matching sub-menu item
              showMainItem = true; // Keep the main section visible if a sub-item matches
              mainItem.find('.sub-menu').show(); // Show the sub-menu if any sub-item matches
            } else {
              $(this).hide(); // Hide non-matching sub-menu items
            }
          });
        }

        // Show or hide the main menu item based on whether there are matching sub-items
        if (showMainItem) {
          mainItem.show();  // Keep the main item visible if any sub-item matches
        } else {
          mainItem.hide();  // Hide the main item if no sub-items match the search
        }
      });
    }
  });

  //jquery for toggle sub menus
  $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  //jquery for expand and collapse the sidebar
  $('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "hidden");
  });

  $('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });
});