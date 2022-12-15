import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dddudqtmm',
    api_key: '274455614771256',
    api_secret: 'gGUB0g6AsXALvuYO2VS3v9Yikqw',
    secure: true,
})

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML-W3k_O_Fp6pOgn7wFMWkaYBDqn9MkXSgw&usqp=CAU';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);

        expect( typeof url ).toBe('string');
        // console.log(url)
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });

        // console.log({cloudResp})

    });

    test('debe de retornal null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect( url ).toBe(null);
    })
})