declare namespace Blog {
  type Project = {
    id: string;
    title: string;
    synopsis?: string;
    body: string;
    url: string;
    skills?: Skill[];
    images: Image[];
    status: Status;
    createdAt: Date;
    updatedAt: Date;
  }

  type Status = 'draft' | 'published' | 'archived' | 'deleted' | 'scheduled' | 'hidden';

  type Skill = {
    id: number;
    name: string;
    icon: string;
  }

  type Image = {
    id: string;
    url: string;
    alt: string;
  }
}