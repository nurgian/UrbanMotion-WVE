const multer = require('multer');
const ErrFileTooLarge = "File size is too large. Maximum allowed size is 5 MB.";
const ErrInvalidFile = "Invalid file type. Only JPEG, PNG, and GIF are allowed.";

const middlewareError = (err, req, res, next) => {
    if (err) {
        console.error(err); // Log the full error for debugging
        
        // Handle Multer-specific errors
        if (err instanceof multer.MulterError) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(400).json({ message: ErrFileTooLarge });
            }
            return res.status(400).json({ message: "Multer error occurred." });
        }

        // Handle custom errors
        if (err.message === ErrInvalidFile) {
            return res.status(400).json({ message: err.message });
        }

        // Fallback for unhandled errors
        return res.status(500).json({ message: "An unexpected error occurred." });
    }

    next();
};

module.exports = middlewareError;


