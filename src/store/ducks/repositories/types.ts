
/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  LOAD_POST = '@repositories/LOAD_POST',
  LOAD_PET = '@repositories/LOAD_PET',
  LOAD_VACCINE = '@repositories/LOAD_VACCINE',
  LOAD_VACCINE_SUCCCES= '@repositories/LOAD_VACCINE_SUCCCES',
  DELETE_VACCINE= '@repositories/DELETE_VACCINE',
  LOAD_WIKI = '@repositories/LOAD_WIKI',
  LOAD_WIKI_SUCCCES='repositories@LOAD_WIKI_SUCCCES',
}

/**
 * Data types
 */
export interface Repository {
  id?: string
  content?: string
}
export interface Vaccine {
  id: string
  name: string
  raceType: string
  createdAt: string
  updatedAt: string
}
export interface Wiki{
  id: string
  title: string
  image: string
  typeOfWikiId: string
  createdAt: string
  updatedAt: string
}

// export type VaccineRecord = Vaccine & { key: number | string }



/**
 * State type
 */
export interface RepositoriesState {
  readonly wiki: Wiki[]
  readonly vaccine: Vaccine[]
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
  readonly idDelete: string
}

