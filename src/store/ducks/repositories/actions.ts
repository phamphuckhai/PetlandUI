import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository, Vaccine, Wiki } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const loadPost = ()=> action(RepositoriesTypes.LOAD_POST);

export const loadPet =()=> action(RepositoriesTypes.LOAD_PET);

export const loadVaccine = ()=> action(RepositoriesTypes.LOAD_VACCINE);

export const loadVaccineSuccess= (vaccine: Vaccine[])=> action(RepositoriesTypes.LOAD_VACCINE_SUCCCES, {vaccine});

export const loadDelete = (id: String) => action(RepositoriesTypes.DELETE_VACCINE, {id});

export const loadwiki = ()=> action(RepositoriesTypes.LOAD_WIKI);

export const loadwikiSuccess= (wiki: Wiki[])=> action(RepositoriesTypes.LOAD_VACCINE_SUCCCES, {wiki});


