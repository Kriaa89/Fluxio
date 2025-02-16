function handleError(error) {
  console.error("Error:", error.message);
  // Optionally log error details or stack trace
  process.exit(1);
}

module.exports = { handleError };
