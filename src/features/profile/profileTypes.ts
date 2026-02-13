import { PostType } from "../posts/postTypes";

export interface UserType {
    _id: string;
    name: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    photo: string;
    createdAt: string
}

export interface ProfileState {
    user: UserType | null;
    userPosts: PostType[];
    isProfileLoading: boolean;
    isPostsLoading: boolean;
    hasFetchedPosts: boolean;
    isPhotoLoading: boolean;
    isProfileError: boolean;
    isPostsError: boolean;
    isPhotoError: boolean;
}