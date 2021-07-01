export type Settings = {
  [key: string]: any,
  darkMode: boolean,
  section: number
}

export type RepoType = {
  owner: string,
  repo: string,
  link: string,
  language: string,
  description: string
}

export type PhotoType = {
  link: string,
  description: string
}
