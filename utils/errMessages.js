const errMessages = {
    AUTH_INVALID_CREDENTIALS:
        'The username or password you entered is incorrect.',

    USERNAME_LENGTH:
        'Username must be between 4 and 15 characters long.',
    USERNAME_FORMAT:
        'Username must start with a letter and may contain underscores (_).',
    USERNAME_RULE:
        'Username cannot start or end with an underscore, and cannot contain consecutive underscores.',

    PASSWORD_LENGTH:
        'Password must be at least 8 characters long.',
    PASSWORD_FORMAT:
        'Password must contain at least one letter, one number, or one special character.',
    PASSWORD_MISMATCH:
        'Passwords do not match.',

    EMAIL_INVALID:
        'Please enter a valid email address (e.g. name@example.com).',
}

export default errMessages
