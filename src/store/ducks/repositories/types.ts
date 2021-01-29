import userEvent from "@testing-library/user-event";

/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  LOAD_USER = '@repositories/LOAD_USER',
}

/**
 * Data types
 */
export interface Repository {
  id?: string
  content?: string
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}

