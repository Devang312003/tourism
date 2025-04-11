<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = ""; // Default is empty for XAMPP
$dbname = "travel_booking";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$departure_city = $_POST['from'];
$destination = $_POST['destination'];
$departure_date = $_POST['departure-date'];
$return_date = $_POST['return-date'];
$accommodation_type = $_POST['accommodation'];
$guests = $_POST['guests'];
$special_requests = $_POST['requests'];

// Insert data into the bookings table
$sql = "INSERT INTO bookings (departure_city, destination, departure_date, return_date, accommodation_type, guests, special_requests)
        VALUES ('$departure_city', '$destination', '$departure_date', '$return_date', '$accommodation_type', '$guests', '$special_requests')";

if ($conn->query($sql) === TRUE) {
    echo "Booking successfully saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
