export interface UserData {
    data: Data;
}

export interface Data {
    name: string;
    email: string;
    photo: string;
    phone: null;
    address: string;
    bio: string;
    social_links: SocialLinks;
    projects: Project[];
    experiences: Experience[];
}

export interface SocialLinks {
    github_url: string | null;
    x_url: string | null;
    linkedin_url: string | null;
}

export interface Experience {
    id: number;
    position: string;
    company: string;
    company_url: null | string;
    start_date: Date;
    end_date: Date | null;
    is_freelance: boolean;
    description: string;
    technologies: string;
    location: null;
}

export interface Project {
    id: number;
    is_active: number;
    title: string;
    description: string;
    url: string;
    technologies: string[];
}
