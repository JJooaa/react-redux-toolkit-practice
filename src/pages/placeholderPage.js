import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const PlaceholderPage = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts.posts);

    const fetchStatus = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (fetchStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, fetchStatus]);

    let element;

    if (fetchStatus.loading) {
        element = <p>Loading...</p>;
    }

    return <section>placeholderpage</section>;
};

export default PlaceholderPage;
