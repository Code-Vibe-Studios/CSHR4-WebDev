const marks = 95;

let branch;

switch(true){
    case marks >= 90:
        branch = "CSE";
        break;
    case marks >= 80:
        branch = "Mech";
        break;
    case marks >= 70:
        branch = "Chemical"
        break;
    case marks >= 60:
        branch = "ECE"
        break;
    case marks >= 50:
        branch = "Civil"
        break;
    default:
        branch = "Bio Tech";
        break;
}

console.log(`Student selected to branch: ${branch}`);