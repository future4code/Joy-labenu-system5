import { Request, Response } from 'express';
import updateClass from '../data/updateClass';
import connection from '../data/connection';

export default async function changeClass(
    req: Request,
    res: Response
) {
    try {
        let module: number = req.body.module;
        const id: string = req.params.id;

        if (!module || !id) {
            throw new Error("Um ou mais parâmentros ausentes!");
        };

        const existsId = await connection('class').where('id', id);
        if (existsId.length === 0) {
            throw new Error("Turma não encontrada!");
        };


        if (typeof module !== "number") {
            throw new Error("Tipo do módulo inválido!");
        };

        if (module > 6) {
            throw new Error("O módulo deve ser maior ou igual a 6!");
        };

        const existsModule = await connection('class')
            .select('module')
            .where('id', id);

        if (module <= existsModule[0].module) {
            throw new Error(`O módulo precisa ser maior que ${module}!`);
        };

        if (module !== existsModule[0].module++) {
            throw new Error("Não é possível avançar mais de um módulo de uma vez!");
        };

        await updateClass(
            id,
            module
        );

        res
            .status(200)
            .send({
                message: "Campo alterado com sucesso!"
            });
    } catch (error: any) {
        res
            .status(400)
            .send({
                message: error.message || error.sqlMessage
            });
    };
};


