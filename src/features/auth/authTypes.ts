export interface LoginPayload {
    email: string;
    password: string;
}

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    dateOfBirth: string;
    gender: "male" | "female" | null;
}

export interface AuthState {
    userToken: string | null;
    userData: string | null;
    isLoading: boolean;
    isError: boolean;
}

export interface ApiError {
    message: string;
}