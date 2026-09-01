// src/types/project.ts
export interface Project {
  _id: string;
  title: string;
  description?: string;
  figmaLink?: string;
  websiteLink?: string;
  githubLink?: string;
  projectScreenshot?: string;
  originalScreenshotName?: string;
  createdAt: Date;
  updatedAt: Date;
}
