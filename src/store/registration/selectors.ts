import { createSelector } from 'reselect';

export const getRegStore = (state: any) => state.registration;
export const getRegFieldsStore = createSelector(
    getRegStore,
    (registration)=> registration.fields
) 
export const regValues = createSelector(
    getRegFieldsStore,
    ({ login, password }) => ({ login, password }),
);
export const getRegFieldByIdStore = createSelector(
    getRegFieldsStore,
    (_state: any, props: any) => props.id,
    (fields, id) => fields[id]
)
export const getRegErrorsStore = createSelector(
    getRegStore,
    (registration)=> registration.errors
) 
export const getRegErrorByIdStore = createSelector(
    getRegErrorsStore,
    (_state: any, props: any) => props.id,
    (errors, id) => errors[id]
)

export const getIsValidRegFields = createSelector(
    getRegFieldsStore,
    getRegErrorsStore,
    (fields, errors) => {
        if (Object.values(fields).every(field => !!field)) {
            return Object.values(errors).every(item => !item)
        }
        return false;
    },
) 
