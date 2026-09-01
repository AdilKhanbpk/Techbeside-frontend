import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Applicant {
  _id: string; 
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  stateOrProvince: string;
  postalOrZipCode: string;
  gender: string;
  applyingForPosition: string;
  experience: string;
  professionalUrl: string;
  resume: string;
  originalMotivationLetterName:string;
  originalResumeName:string;
  motivationLetter: string;
  date: string;
  createdAt:string;
  
}

interface ApplicantState {
  applicants: Applicant[];
}

const initialState: ApplicantState = {
  applicants: [],
};

const applicantSlice = createSlice({
  name: 'applicants',
  initialState,
  reducers: {
    setAllApplicants: (state, action: PayloadAction<Applicant[]>) => {
      state.applicants = action.payload;
    },
    deleteApplicant: (state, action: PayloadAction<string>) => {
      state.applicants = state.applicants.filter(
        (applicant) => applicant._id !== action.payload
      );
    },
  },
});

export const { setAllApplicants, deleteApplicant } = applicantSlice.actions;
export default applicantSlice.reducer;
