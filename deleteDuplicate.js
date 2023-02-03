function duplicateDelete(name) {
    let newName = [];
    for (let i = 0; i < name.length; i++) {
        if (newName.includes(name[i]) === false) {
            newName.push(name[i]);
        }
    }
    return newName;
}
let name = ['abul', 'babul', 'tabul', 'kabul', 'babul', 'dabul', 'chabul', 'abul', 'babul', 'abul', 'kabul'];
newName = duplicateDelete(name);
console.log(newName);