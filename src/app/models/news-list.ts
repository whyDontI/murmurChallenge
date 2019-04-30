import { article } from './article';

export interface news extends article {
    status: string;
    totalResults: number;
    articles: article[];
}
