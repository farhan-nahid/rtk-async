const { configureStore } = require("@reduxjs/toolkit");
const postsReducer = require("../features/posts/postsSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

module.exports = store;
