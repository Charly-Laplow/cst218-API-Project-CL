/*

Logger for all requests to the server

*/

// Request logger middleware
function logger(req, res, next) {
  let logMessage = `A ${req.method} received for: ${req.url}`;

  // Extension for queries to the server
  if (Object.keys(req.query).length > 0) {
    logMessage += " | Query: " + JSON.stringify(req.query);
  }

  // Log message sent to console
  console.log(logMessage);

  // Moves to the next middleware
  next();
}

// Exports the logger
module.exports = logger;