const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  error: "",
  posts: [],
};

//  create async thunk

const fetchPosts = createAsyncThunk("postSlice/fetchPosts", async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
});

const postsSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.posts = [];
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });
  },
});

module.exports = postsSlice.reducer;
module.exports.fetchPosts = fetchPosts;
