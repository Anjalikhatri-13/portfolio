<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "anjalikhatri131@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    echo "Thank you for your message! We will get back to you shortly.";
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method not allowed.";
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Additional processing, validation, or sending email code can be added here
    
    // For this example, we'll just print the data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
} else {
    // Handle invalid request method
    echo "Invalid request method";
}
?>

