interface source { 
	id: string;
	name: string;
}

export interface article extends source {
			source: source;
			author: string;
			title: string;
			description: string;
			url: string;
			urlToImage: string;
			publishedAt: string;
			content: string;
}