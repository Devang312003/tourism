document.getElementById("contactForm").onsubmit = async function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Capture values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("textarea").value;

  console.log({ name, email, message }); // Log to verify data

  // Ensure data is being sent
  try {
      const response = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert(data.message || 'Message sent successfully!');
      document.getElementById("contactForm").reset();
  } catch (error) {
      console.error('Error:', error);
      alert('There was a problem sending your message.');
  }
  app.post('/contact', (req, res) => {
    console.log('Request received at /contact:', req.body);
    res.json({ message: 'Message received successfully!' });
  });
// Function to open the modal and position it near the clicked image
function openModal(event, imagePath) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    
    // Set the modal image source
    modalImage.src = imagePath;
  
    // Get the position of the clicked element
    const rect = event.target.getBoundingClientRect();
  
    // Position the modal near the clicked image
    modal.style.top = `${rect.top + window.scrollY + 20}px`; // Adjust position below the image
    modal.style.left = `${rect.left + window.scrollX + 20}px`; // Adjust position to the right of the image
    
    // Show the modal
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
    
};
