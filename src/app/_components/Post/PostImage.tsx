import CardMedia from "@mui/material/CardMedia";

export default function PostImage({ image }: { image: string }) {
    return (
        <>
            {!!image && <CardMedia
                component="img"
                image={image}
                alt="Post Image"
                sx={{
                    borderRadius: 2,
                    maxHeight: 500,
                    width: "100%",
                    objectFit: "cover",
                }}
            />}
        </>
    );
}
