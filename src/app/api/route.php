<?php

// Verify the token
function verifyToken($token) {
  // Replace "your-secret-token" with your actual secret token
  $secretToken = 'your-secret-token';
  
  return $token === $secretToken;
}

// Check if the request is authenticated
function isAuthenticated() {
  if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
    return false;
  }
  
  $token = $_SERVER['HTTP_AUTHORIZATION'];
  
  return verifyToken($token);
}

// Check if the request is authenticated or return a 401 Unauthorized status
function authenticate() {
  if (!isAuthenticated()) {
    header('HTTP/1.1 401 Unauthorized');
    exit();
  }
}

// Use this function to fetch data from the SpaceX API
function fetchData($url) {
  // Set up a cURL session
  $ch = curl_init($url);
  
  // Set necessary options
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  
  // Execute the request and get the response
  $response = curl_exec($ch);
  
  // Close the cURL session
  curl_close($ch);
  
  return $response;
}

// Authorize the request
authenticate();

// Fetch data from the SpaceX API here
$response = fetchData('https://api.spacexdata.com/v3/rockets');

// Set the appropriate headers and echo the response
header('Content-Type: application/json');
echo $response;

?>