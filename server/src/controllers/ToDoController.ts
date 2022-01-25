// ---- Models
import ToDoModel from '../models/to_do.model';

// ---- Interfaces
import IToDo from '../interfaces/to_doInterface';


export default class ToDoController {
    public async publicToDo({
        idUser,
        title,
        subtitle,
        text,
        color,
    }: {
        idUser: number;
        title: string;
        subtitle: string;
        text: string;
        color: string;
    }): Promise<IToDo> {
        const verifyDatasToDo = new VerifyDataToDo();
        if (
            verifyDatasToDo.verifyDatas({
                idUser,
                color,
                subtitle,
                text,
                title,
            })
        ) {
            const toDoInserted = await ToDoModel.insertMany({
                idUser,
                color,
                title,
                subtitle,
                text,
            });
            return Object.values(toDoInserted)[0];
        }
        return {
            _id: '0',
            color: '',
            idUser: 0,
            title: '',
            subtitle: '',
            text: '',
        };
    }
    public async getToDo(
        idToDo: string,
        idUser: number
    ): Promise<IToDo | null> {
        try {
            const toDoResponse: IToDo = await ToDoModel.findById(idToDo);
            if (toDoResponse.idUser == idUser) return toDoResponse;
            else return null;
        } catch (e) {
            return null;
        }
    }
    public async updateToDo(
        idToDo: string,
        idUser: number,
        title: string, subtitle: string, text: string, color: string
    ): Promise<boolean> {
        try {
            const toDoResponse = await ToDoModel.updateOne(
                { _id: idToDo },
                {
                    $set: {
                        title: title,
                        subtitle: subtitle,
                        color: color,
                        text: text,
                    },
                }
            );
            return true;
        } catch (e) {
            return false
        }
    }
    public async deleteToDo(idToDo: string, idUser: number): Promise<boolean>{
        try {
            const toDoResponse = await ToDoModel.deleteOne(
                { _id: idToDo, idUser }
            );
            return true;
        } catch (e) {
            return false
        }
    }
}

class VerifyDataToDo {
    private verifyTitle(t: string): boolean {
        return true;
    }
    private verifySubtitle(t: string): boolean {
        return true;
    }
    private verifyText(t: string): boolean {
        return true;
    }
    private verifyIdUser(t: number): boolean {
        return true;
    }
    private verifyColor(t: string): boolean {
        return true;
    }

    public verifyDatas({
        title,
        subtitle,
        text,
        idUser,
        color,
    }: {
        title: string;
        subtitle: string;
        text: string;
        idUser: number;
        color: string;
    }): boolean {
        const titleIsOk = this.verifyTitle(title),
            subtitleIsOk = this.verifySubtitle(subtitle),
            textIsOk = this.verifyText(text),
            idUserIsOk = this.verifyIdUser(idUser),
            colorIsOk = this.verifyColor(color);

        if (titleIsOk && subtitleIsOk && textIsOk && idUserIsOk && colorIsOk)
            return true;
        return false;
    }
}
