import ourProjects from "@/utils/data/our_projectsData";

export const getSingleProject =  (id: string) => {
    const item = ourProjects.find((project) => project.id === id);
    return item;
};