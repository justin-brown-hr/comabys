<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  // Support classic form posts as well
  $data = $_POST;
}

$firstName = trim((string)($data['firstName'] ?? ''));
$lastName = trim((string)($data['lastName'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$organization = trim((string)($data['organization'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$name = trim((string)($data['name'] ?? ($firstName . ' ' . $lastName)));

if ($email === '' || $message === '' || $name === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
  exit;
}

$to = 'info@comabys.com';
$subject = 'Comabys website inquiry from ' . $name;
$body = "New consultation request from the Comabys website\n\n"
  . "Name: {$name}\n"
  . "Email: {$email}\n"
  . "Organization: " . ($organization !== '' ? $organization : '(not provided)') . "\n\n"
  . "Message:\n{$message}\n";

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'From: Comabys Website <noreply@comabys.com>',
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Server could not send email']);
  exit;
}

echo json_encode(['ok' => true]);
