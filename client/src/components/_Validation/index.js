export const requiredField = input => {
    if(!input){
        return "Поле должно быть заполнено";
    }
    return null;
};

export const passwordEquals = (input, allInputs) =>
    input === allInputs.password 
        ? undefined 
        : 'Пароли не совпадают';