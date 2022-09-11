export type Blog = {
    id: string;
    content: string;
    title: string;
    tags: Tag[];
    eyecatch:eyecatch;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
  
export type Tag = {
    id: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };

export type eyecatch = {
    url:string;
    height:number;
    width:number;
  } 

