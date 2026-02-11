// const userName = 'Surendra kumar pasi';
// const userAge = 19;

// if(userAge >= 18 && userAge <=60)
// {
//     console.log(`${userName},You are eligible to vote`);
// }
// else{
//     console.log(`${userName},You are not eligible to vote`);
// }

console.log("hello");
debugger;


const userName = prompt('Enter your name');
const userAge = parseInt(prompt('Enter your age'));

if(userAge >= 18 && userAge <=60)
{
    console.log(`${userName},You are eligible to vote`);
}
else if(userAge < 18)
{
    console.log(`${userName},You are not eligible to vote, you are underage`);
}
else if(userAge > 60)
{
    console.log(`${userName},You are not eligible to vote, you are overage`);
}
else{
    console.log(`${userName},Invalid age entered`);
}