export interface PostType {
    _id: string;
    body: string;
    image: string;
    user: UserType;
    comments: CommentsType[];
    createdAt: string;
}

export interface UserType {
    _id: string;
    name: string;
    photo: string;
}

export interface CommentsType {
    _id: string;
    content: string;
    commentCreator: UserType;
    post: string;
    createdAt: string;
}

export interface PostsState {
    allPosts: PostType[];
    singlePost: PostType | null;
    isFetchingPosts: boolean;
    fetchPostsError: boolean;
    isFetchingSinglePost: boolean;
    fetchPostError: boolean;
    isCreatingPost: boolean;
    createPostError: boolean;
}