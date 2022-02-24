import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./features/posts/postsSlice";

const PlaceholderPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts.posts);

    const status = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, status]);

    return (
        <section
            id="placehold"
            style={{
                width: "100%",
                height: "100vh",
                background: "grey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div style={{ width: 500, height: 500, background: "white" }}></div>
        </section>
    );
};

export default PlaceholderPage;
