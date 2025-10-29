export interface _Todo {
    id: number;
    title: string;
    description?: string;
    status: 'open' | 'complete';
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt?: string;
    task?: string[];
}