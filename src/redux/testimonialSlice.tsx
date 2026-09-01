import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Testimonial {
  _id: string;
  clientName: string;
  review: string;
  rating: number;
  websiteLink: string;
  profilePicture?: string;
  reviewScreenshot?: string; 
  createdAt: Date;
  updatedAt: Date;
}

interface TestimonialState {
  testimonials: Testimonial[];
}

const initialState: TestimonialState = {
  testimonials: [],
};

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setAllTestimonials(state, action: PayloadAction<Testimonial[]>) {
      state.testimonials = action.payload;
    },
    addTestimonial(state, action: PayloadAction<Testimonial>) {
      state.testimonials.push(action.payload);
    },
    deleteTestimonial(state, action: PayloadAction<string>) {
      state.testimonials = state.testimonials.filter(
        (testimonial) => testimonial._id !== action.payload
      );
    },
    updateTestimonial(state, action: PayloadAction<Testimonial>) {
      const index = state.testimonials.findIndex(
        (testimonial) => testimonial._id === action.payload._id
      );
      if (index !== -1) {
        state.testimonials[index] = action.payload;
      }
    },
  },
});

export const {
  setAllTestimonials,
  addTestimonial,
  deleteTestimonial,
  updateTestimonial,
} = testimonialSlice.actions;

export default testimonialSlice.reducer;
