import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { cognitoConfig } from "./cognitoConfig";

const userPool = new CognitoUserPool(
    {
        UserPoolId: cognitoConfig.UserPoolId,
        ClientId: cognitoConfig.ClientId,
    }
)

export function signUp(email, phone, password) {
    return new Promise((resolve, reject) => {
        userPool.signUp(
            email,
            password,
            [
                { Name: "email", Value: email },
                { Name: "phone_number", Value: phone }
            ],
            null,
            (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.user);
            }
        );
    });
}

export function confirmSignUp(email, code) {
    // Confirm sign-up implementation
    return new Promise((resolve, reject) => {
        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        });

        cognitoUser.confirmRegistration(code, true, (error, result) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}


export function signIn(email, password) {
    // Sign in implementation
    return new Promise((resolve, reject) => {
        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        const cognitoUser = new CognitoUser({
            Username: email,
            Pool: userPool,
        })

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                resolve(result)
            },
            onFailure: (error) => {
                reject(error)
            },
        })
    })
}

export function forgotPassword(email) {
    // Forgot password implementation
}

export function confirmPassword(email, code, newPassword) {
    // Confirm password implementation
}

export function signOut() {
    // Sign out implementation
}

export function getCurrentUser() {
    // Get current user implementation
}

export function getSession() {
    // Get session implementation
}