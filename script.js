window.onload = function() {
    // Get the submit link and the login box
    var submitLink = document.getElementById('submit');
    var loginBox = document.getElementById('loginBox');

    // Add a click event listener to the submit link
    submitLink.addEventListener('click', function(event) {
        // Prevent the default action (which is to navigate to the link)
        event.preventDefault();

        // Replace the content of the login box with the new embedded video and the button
        loginBox.innerHTML = '<div style="width: 100%; height: 0; position: relative; padding-top: 56.25%;"><iframe src="https://app.visla.us/embed/1128931364557602816" frameborder="0" allow="fullscreen" style="border: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div><a href= "https://derbyshirecountycouncil.sharepoint.com/sites/O365LP" class="submit signup" id="signup">Sign Up to Learn More</a>';
    });
}