<?php
// Allow requests from localhost:3000 (you can specify the actual domain in production)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Respond with 200 status for preflight requests
    http_response_code(200);
    exit();
}

// Handle the POST request
$conn = mysqli_connect('localhost', 'root', '', 'contact_db') or die('Connection failed');

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->email) && isset($data->number) && isset($data->date)) {
    $name = mysqli_real_escape_string($conn, $data->name);
    $email = mysqli_real_escape_string($conn, $data->email);
    $number = mysqli_real_escape_string($conn, $data->number);
    $date = mysqli_real_escape_string($conn, $data->date);

    $insert = mysqli_query($conn, "INSERT INTO `contact_form`(name, email, number, date) VALUES ('$name', '$email', '$number', '$date')");

    if ($insert) {
        echo json_encode(["message" => "Appointment made successfully!"]);
    } else {
        echo json_encode(["message" => "Appointment failed."]);
    }
} else {
    echo json_encode(["message" => "Invalid input."]);
}
?>
