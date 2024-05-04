export enum PageConstants {
    Login =  "Login",
    Register = "Register",
    LogOut = "Logout",
    Home = "Home"
}

export enum LogInPage {
    SignIntoContinue = "Sign In to Continue",
    SigningIn = "Signing in...",
    SignIn = "Sign in",
    Password = "password",
    Email = "email",
}

export enum Register {
    NoAccount = "Dont have an Accout?",
    RegisterHeading = "Register",
    Name = "name",
    Email = "email",
    Password = "password",
    Registering = "Registering...",
}

export enum ValidationSchema {
    InvalidEmail = "Invalid email address",
    EmailRequired = "Email is required",
    PasswordRequired = "Password is required",
    PasswordLength = "Password must be at least 8 characters",
    PasswordError = "Password must contain at least 1 letter, 1 number, and 1 special character",
    NameRequired = "Name is Required"
}