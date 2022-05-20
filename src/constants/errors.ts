export const errors: {[key: string]: {errorCode: number, message: string}} = {
    UNPROCESSABLE_ENTITY: {errorCode: 422, message: "Um ou mais parâmentros ausentes!"},
    CLASS_NOT_FOUND:{errorCode: 404, message: "Turma não encontrada!"},
    INVALID_TYPE_MODULE: {errorCode: 400, message: "Tipo do módulo é inválido, esperava-se um dado do tipo 'number'!"},
    INVALID_MODULE: {errorCode: 400, message: "O módulo deve ser menor ou igual a 6!"},
    OUTDATED_MODULE: {errorCode: 400, message: "O módulo precisa ser maior que módulo atual!"},
    UNAUTHORIZED_MODULE_UPDATE: {errorCode: 400, message: "Não é possível avançar mais de um módulo de uma vez!"}
};