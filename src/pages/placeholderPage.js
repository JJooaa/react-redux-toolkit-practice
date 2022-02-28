import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import { changePage } from "../features/page/pageSlice";

const PlaceholderPage = () => {
    const dispatch = useDispatch();

    const fetchStatus = useSelector((state) => state.posts.status);

    const errorStatus = useSelector((state) => state.posts.error);
    useEffect(() => {
        if (fetchStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, fetchStatus]);

    let element;

    if (fetchStatus === "loading") {
        element = <p>Loading...</p>;
    } else if (fetchStatus === "succeeded") {
        element = <div>Successul</div>;
    } else if (fetchStatus === "failed") {
        element = <div>{errorStatus}</div>;
    }

    return (
        <section>
            <button onClick={() => dispatch(changePage("counter-page"))}>
                go to counter page
            </button>
            <p>placeholder-page</p>
            {element}
        </section>
    );
};

export default PlaceholderPage;
