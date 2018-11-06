function getCloneOfObjJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function getCloneOfObj(obj) {
    var newObj = {};

    for (var property in obj)
    {
        if(typeof obj[property] == "object")
        {
            newObj[property] = getCloneOfObj(obj[property]);
        }
        else
        {
            newObj[property] = obj[property];
        }
    }

    return newObj;
}

var theFirstObj = {
    name: "Михаил",
    surname: "Зубенко",
    nickname: "Мафиозник",
    traits: {
        luck: 2,
        eloquence: 4
    },
    sex: "Мужской",
    jacket: {
        type: "Пиджак",
        color: "Розовый"
    }
};

var theSecondObj = getCloneOfObj(theFirstObj);
var theThirdObj  = getCloneOfObjJSON(theFirstObj);

console.log(theSecondObj);
console.log(theThirdObj);