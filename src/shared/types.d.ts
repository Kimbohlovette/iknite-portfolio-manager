export interface Qualification {
    institution: string
    degree: string
    remark?: string
    startDate: string
    endDate: string
}

export interface Contacts {
    emails: string[],
    phones: string[],
    addresses: string[],
}

export interface MediaLinks {
    facebook?: string
    github?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    tiktok?: string
}

export interface MemberType {
    id: number
    name: string
    level: string
    dept: string
    profileImage: string
    coverImage: string
    mediaLinks: MediaLinks
    contacts: Contacts
    contributions: number[]
    education: Qualification[]
}


export interface ProjectType {
    id: number
    title: string
    desc: string
    status: string
    demoImages: string[]
    contributors: number[]
    startDate: string
    endDate: string
    percentageComplete: number
    liveLink?: string
    projectRepo?: string
}

export interface Data {
    members: MemberType[]
    projects: ProjectType[]
    events?: any[]
    aboutIknite: any

}