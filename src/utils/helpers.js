/**
 * Created by greg on 05/08/17.
 */
export function capitalize(str = '') {
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase() + str.slice(1)
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export function guuid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}