import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Blog {
  slug: string;
    image: string | { imageUrl: string };
    content: string;
    description: string;
    tags: string | string[];
    createdAt: string;
    publish: boolean;
    title: string;
    metaTitle: string;
    metaDescription :string;
  }
  
  interface BlogState {
    blogs: Blog[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: BlogState = {
    blogs: [],
    status: 'idle',
    error: null,
  };

const BlogSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {
    setAllblog(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    deleteblog(state, action: PayloadAction<string>) {
      state.blogs = state.blogs.filter((blog) => blog.slug !== action.payload);
    },
  },
});

export const { setAllblog, deleteblog } = BlogSlice.actions;
export default BlogSlice.reducer;
