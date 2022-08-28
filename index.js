const store = require("./rtk/app/store");
const { fetchPosts } = require("./rtk/features/posts/postsSlice");

store.dispatch(fetchPosts());
