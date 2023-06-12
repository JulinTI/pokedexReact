export const typesHandler = (types) => {
    if (types[1]) {
        return types[0].type.name + " | " + types[1].type.name
    }
    else if (types[2]) {
        return types[0].type.name + " | " + types[1].type.name + " | " + types[2].type.name
    }
    else {
        return types[0].type.name;
    }
}
