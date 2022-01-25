import axios from 'axios';

let idToDo = '';

const originalTitle = 'Teste titulo'
const originalSubtitle = 'Teste subtitulo'
const originalText = 'Teste text'
const originalColor = 'FFFFFF'

const newTitle = 'Teste s'
const newSubtitle = 'Teste ad'
const newText = 'Teste ads'
const newColor = 'b3ab3a'

describe('To-Do', () => {
    it('create to-do', async () => {

        const response = await axios.post('http://node:3000/to-do/', {
            title: originalTitle,
            subtitle: originalSubtitle,
            text: originalText,
            idUser: 1,
            color: originalColor,
        });

        const responseData = await response.data;

        idToDo = await responseData._id;
        
        expect(responseData._id).not.toBe('');
        expect(responseData.idUser).toBe(1);
        // console.log('_id: ', idToDo)
    });

    it('get to-do', async () => {
        const response = await (
            await axios.get('http://node:3000/to-do/' + idToDo + '/?idUser=1')
        ).data;
        expect(response.title).toBe(originalTitle);
        expect(response.subtitle).toBe(originalSubtitle);
        expect(response.text).toBe(originalText);
        expect(response.color).toBe(originalColor);
    });

    it('update to-do', async () => {
        const response = await axios.put(
            'http://node:3000/to-do/' + idToDo + '/?idUser=1',
            {
                title: newTitle,
                subtitle: newSubtitle,
                text: newText,
                color: newColor,
            }
        );
        const responseData = await response.data

        expect(await responseData.status).toBe('success')
        expect(await responseData.message._id).toBe(idToDo)
    });

    it('get to-do updated', async () => {
        const response = await (
            await axios.get('http://node:3000/to-do/' + idToDo + '/?idUser=1')
        ).data;

        expect(response.title).toBe(newTitle);
        expect(response.subtitle).toBe(newSubtitle);
        expect(response.text).toBe(newText);
        expect(response.color).toBe(newColor);
    });

    it('get to-do not this user', async () => {
        await axios
            .get('http://node:3000/to-do/' + idToDo + '/?idUser=2')
            .catch(async (e) => {
                const message = Object(await e).response.data.message;
                const statusCode = Object(await e).response.status;

                expect(message).toBe('user not can read this post');
                expect(statusCode).toBe(401);
            });
    });

    it('delete to-do', async () => {
        await axios
            .delete('http://node:3000/to-do/' + idToDo + '/?idUser=1')
            .then(async (r) => {
                const message = await r.data.message;
                const status =  await r.data.status;
                const statusCode = r.status;

                expect(message).toBe('');
                expect(status).toBe('success');
                expect(statusCode).toBe(200);
            });
    })

    it('delete to-do not this user', async () => {
        await axios
            .delete('http://node:3000/to-do/' + idToDo + '/?idUser=2')
            .catch(async (e) => {
                const message = Object(await e).response.data.message;
                const status =  Object(await e).response.data.status;
                const statusCode = Object(await e).response.status;

                expect(message).toBe('user can\'t delete this post');
                expect(status).toBe('error');
                expect(statusCode).toBe(401);
            });
    })
});
