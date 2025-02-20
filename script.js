document.getElementById('contact-form').addEventListener('submit',function(e){
  e.preventDefault(); // Prevent the form from submitting the traditional way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (optional)
  if (!name || !email || !message){
    alert("Please fill out all fields!");
    return;
  }

  // Example of how you might handle sending this data to a server (you'd need an actual backend of use an API service
  // like fromspree
  console.log("Form submitted",{name,email,message});

  // Clear form 
  document.getElementById('contact-form').reset();
  alert("Thank you for your message!");

});
