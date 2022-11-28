function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun("bathe my dog");


const mondayWork = function (workActivity = "go to the office") {
    return `This Monday, I will ${workActivity}.`
}

function wrapAdjective (wrap = "*") {
    return function (adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
}