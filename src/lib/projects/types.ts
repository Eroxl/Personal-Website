export interface githubAccessToken {
  type: string,
  name: string,
  key: string,
  contrib: boolean,
}

export interface projectType {
  id: string,
  fork: boolean,
  name: string,
  description: string,
  // eslint-disable-next-line camelcase
  html_url: string,
  homepage: string,
}

export interface formattedProjectTypes {
  name: string,
  description: string,
  homepage: string,
  imageURLs: string[],
  contrib: boolean,
}
