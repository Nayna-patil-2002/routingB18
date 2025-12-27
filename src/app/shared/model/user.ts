export interface Iuser{
    id: string;
    name: string;
    email: string;
    role: "Admin"|"User"|"SuperAdmin";
    image:string
}