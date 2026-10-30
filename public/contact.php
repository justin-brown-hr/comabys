<?php
/**
 * Optional same-origin handler for Network Solutions (if PHP mail is enabled).
 * Optional Network Solutions fallback. Preferred path is Next.js /api/contact on Vercel.
 */

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('Location: /contact/');
  exit;
}

$firstName = trim((string)($_POST['firstName'] ?? ''));
$lastName = trim((string)($_POST['lastName'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$organization = trim((string)($_POST['organization'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$name = trim($firstName . ' ' . $lastName);

if ($email === '' || $message === '' || $name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header('Location: /contact/?error=1');
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
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

header('Location: /contact/?sent=' . ($sent ? '1' : '0'));
exit;
