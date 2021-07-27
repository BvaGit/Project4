import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from 'tests/testHelper';
import Auth from '../Auth';

jest.mock('react-i18next', () => ({
        useTranslation: jest.fn().mockImplementation(() => ({
            t: jest.fn(),
        })),
    }),
);

const mockStore = configureStore();
const store = mockStore({
auth: {
    fields: {
        login: "",
        password: "",
    },
    errors: {
        login: "",
        password: "",
    },
    isSuccess: false
}});
describe('Auth', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Auth/>, store);
        expect(component.html()).toMatchSnapshot();
    });
    
});
