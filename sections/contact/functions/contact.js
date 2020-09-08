// The callback returns the status code
exports.handler = (event, _context, callback) => {
	console.log({ event });

	// First argument is an error
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ boop: true })
	})
}