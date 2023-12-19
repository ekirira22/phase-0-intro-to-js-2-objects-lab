const employee = {
    name : "Eric Maranga",
    streetAddress : "Fathers Hub, 6th Floor A02"
}

// Test 1. A function that non-destructively updates employee object. Receives 3 values. (Obj, Key, Value)
function updateEmployeeWithKeyAndValue(obj, key, value){
    const copyEmployee = {...obj}
    copyEmployee[key] = value
    return copyEmployee
}

//Test 2. A function that now destructively update the original employee object
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

//Test 3. A function that non-destructively deletes a key from the original object
function deleteFromEmployeeByKey(obj, key){
    const copyEmployee = {...obj}
    delete copyEmployee[key]
    return copyEmployee
}

//Test 4. A function that destructively deletes a key from the original object
function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key]
    return obj
}