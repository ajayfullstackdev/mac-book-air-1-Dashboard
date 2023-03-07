import { IconType } from "react-icons/lib/esm/iconBase";

export interface navComponent{
    title: string;
    icon:React.ReactElement;
}

export interface profile{
    image:string;
    name:string;
    email:string;
    past:number;
    upcoming:number;
    files:string[];
}