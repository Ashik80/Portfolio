export interface IProject {
    id: number,
    width: number,
    img: string,
    title: string,
    description: string,
    photos: IPhoto[],
    about: string
}

export interface IPhoto {
    id: number,
    title: string,
    width: number
}