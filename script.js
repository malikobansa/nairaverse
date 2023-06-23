document.getElementById('logBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'block';
    console.log("clicked")
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
  });
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Perform form submission or validation here
    // You can use AJAX to send the form data to a server
  
    // Display a success message
    alert('Form submitted successfully!');
    document.getElementById('popupForm').style.display = 'none';
  });
  