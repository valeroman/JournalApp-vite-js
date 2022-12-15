
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredencials, login, logout } from '../../../src/store/auth';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks() );

    test('debe de invocar el checkingCredentials', async() => {
        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredencials() );
        // const valor = checkingCredencials();
        // console.log(valor)
    });

    test('debe de llamar checkingCredentials y login en startGoogleSignIn - Exito ', async() => {

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredencials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('debe de llamar checkingCredentials y logout en startGoogleSignIn - Error ', async() => {

        const loginData = { ok: false, errorMessage: 'Un error en google' };
        await signInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredencials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );

    });

    test('debe de llamar el checkingCredentials y login en startLoginWithEmailPassword - Exito', async() => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword( formData )(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredencials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('debe de llamar al  logoutFirebase clearNotesLogout y logout startLogout', async() => {

        await startLogout()( dispatch );
        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );
    });

    test('debe de llamar el checkingCredencials y login en startCreatingUserWithEmailPassword - Exito', () => {

    });

    test('debe de llamar el checkingCredencials y logout en startCreatingUserWithEmailPassword - Error', () => {

    });
})