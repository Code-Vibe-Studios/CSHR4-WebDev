// In a array there are ages of some candidates, filter the arrays only with the people who can vote.

function canVote(age){
    return age >= 18;
}

// const canVote = age => age >= 18;

function func(){
    let filtered = [24,44,28,13,9,15,18].filter(canVote);
    console.log(filtered);
}

func();