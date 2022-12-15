import { authSlice, checkingCredencials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedlState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en el authSlice', () => {

    test('debe de regresar el estadio inicial y llamarse "auth"', () => {
        // console.log(authSlice);
        const state = authSlice.reducer( initialState, {} );
        // console.log(state);
        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');
    });

    test('debe de realizar la autenticación', () => {
        
        // console.log(login( demoUser ));  
        const state = authSlice.reducer( initialState, login( demoUser ));
        // console.log(state);
        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        })
    });

    test('debe de realizar el logout sin argumentos', () => {
        // console.log(logout())
        const state = authSlice.reducer( authenticatedlState, logout() );
        // console.log(state)
        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    });

    test('debe de realizar el logout y mostrar un mensaje de error', () => {

        const errorMessage = 'Credenciales no son correctas';
        const state = authSlice.reducer( authenticatedlState, logout({ errorMessage }) );
        // console.log(state);
        // expect( state.errorMessage ).toEqual(errorMessage);
        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        })
    });

    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer( authenticatedlState, checkingCredencials );
        // console.log(state);
        expect( state.status ).toBe('checking');
        // expect( state ).toEqual({
        //     status: 'checking',
        //     uid: '123ABC',
        //     email: 'demo@google.com',
        //     displayName: 'Demo User',
        //     photoURL: 'https://demo.jpg',
        //     errorMessage: null
        // })
    });

})