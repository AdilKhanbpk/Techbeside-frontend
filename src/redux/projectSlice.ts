import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  _id: string;
  title: string;
  description?: string;
  figmaLink?: string;
  websiteLink?: string;
  githubLink?: string;
  industry: string[];
  category: string[];
  projectScreenshot?: string;
  originalScreenshotName?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setAllProjects(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
    deleteProject(state, action: PayloadAction<string>) {
      state.projects = state.projects.filter(project => project._id !== action.payload);
    },
  },
});

export const { setAllProjects, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
