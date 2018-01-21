
const createElement = (elementType, queryArguments) => {
    if (queryArguments.hasOwnProperty('firstName') &&
        queryArguments.hasOwnProperty('lastName') &&
        queryArguments.hasOwnProperty('phoneNumber') &&
        queryArguments.hasOwnProperty('email') &&
        queryArguments.hasOwnProperty('street') &&
        queryArguments.hasOwnProperty('number') &&
        queryArguments.hasOwnProperty('postalCode') &&
        queryArguments.hasOwnProperty('city') &&
        queryArguments.hasOwnProperty('group') && elementType === 'friends') {
            return {
                'firstName': queryArguments.firstName,
                'lastName':  queryArguments.lastName,
                'phoneNumber':  queryArguments.phoneNumber,
                'email':  queryArguments.email,
                'street':  queryArguments.street,
                'number':  queryArguments.number,
                'postalCode':  queryArguments.postalCode,
                'city':  queryArguments.city,
                'group':  queryArguments.group,
            };
        } else {
            return false;
        }
  };

const getIndexById = (id, elementList) => {
    return elementList.findIndex((element) => {
        return element.id === Number(id);
    });
};


module.exports = {
    createElement: createElement,
    getIndexById : getIndexById
};