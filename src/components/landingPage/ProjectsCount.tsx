import ProjectsCountClient from "./ProjectsCountClient"; 


const getStats = async () => {
  return [
    {
      value: 90,
      label: "Happy Clients",
      description: "Trusted by businesses worldwide",
      delay: 0.2,
    },
    {
      value: 70,
      label: "Countries Reached",
      description: "Global presence and impact",
      delay: 0.4,
    },
    {
      value: 35,
      label: "Products Launched",
      description: "Innovative solutions delivered",
      delay: 0.6,
    },
  ];
};

const ProjectsCount = async () => {
  const stats = await getStats(); 

  return <ProjectsCountClient stats={stats} />;
};

export default ProjectsCount;