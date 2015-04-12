module Posts {
    export interface IPost {
        GetPreviw(id: number);
    }
    export class Post implements IPost
    {
        GetPreviw(id: number)
        {
            return "a";
        }
    }
}