export const requiredField = input => {
    if(!input){
        return "Поле должно быть заполнено";
    }
    return null;
};

export const matchInput = (input, allInputs) =>
    input === allInputs.password 
        ? undefined 
        : 'Пароли не совпадают';