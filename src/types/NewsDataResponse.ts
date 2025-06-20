import { IArticle } from "./IArticle";

export interface NewsDataResponse{
    status: string,
    totalResult: number,
    results: IArticle[]


}