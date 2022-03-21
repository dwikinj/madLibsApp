let originalStory = `One day there was a mother cooking in the kitchen. Then she called her son 
who was watching TV in the living room. “Budi buy me a packet of salt in Mrs. Inah's shop!” Her
mother begged. “Take this money but remember that the shop is across the street. You have to be
careful. Do not cross the street before the car passes first, “her mother warned.”Alright mom” 
replied Budi.

Budi immediately went to the shop. After waiting for a long time, his mother was worried because
Budi did not come after nearly a half an hour. Soon afterward, she left her house to see Budi. 
She was worried that Budi was in danger.

After arriving near the shop, she was surprised to see the Budi stood motionless on the roadside.
“Why are you so long?” asked her mother. “I cannot cross this street mom” she was wonder and asked
“why does it so? The street was very quiet, right? “”That is right, I want to cross the street but 
there is no car which passing by” Budi replied. “How can be like that?” her mother getting 
surprised. “You told me that don't cross the street before the car pass first and now I am waiting
for the car to pass first. Therefore I cannot cross this street “replied Budi. His mother could
only be silent`;

let userInputs =[];

/*
* For Validating
*/
// userInputs =[
//     "mother",
//     "Hell",
//     "see",
//     "Tv",
//     "Budi",
//     "Car",
//     "Kitchen"
// ];

let questions = [
    "Please enter a familly member (e.g. mother, father, brother,etc):",
    "Please enter a place (e.g. kithcen, hell, mountain,etc)",
    "Please enter a verb (e.g. watch, see, etc)",
    "Please enter a noun (e.g. TV, Car, etc)",
    "Please enter a random name (e.g. sasha, Michael, etc)",
    "Please enter a vechile (e.g train, plane, car, etc)",
    "Please enter a place (e.g. hell, paradise, isekai, etc)"

];

for (let i = 0; i < questions.length; i++){
    let fillInput = prompt(`${questions[i]} ...(${i+1}/7)`);  
    if (fillInput === "") {
        alert("Please fill !");
        i--;
    } else {
        userInputs.push(fillInput);
    }

}


let commentedOut = `<h2>One day there was a ${userInputs[0]} cooking in the ${userInputs[1]}. Then ${userInputs[0]} called her  
who was ${userInputs[2]}ing ${userInputs[3]} in the ${userInputs[1]}. “${userInputs[4]} buy me a packet of salt in Mrs. Inah's shop!” her/him
${userInputs[0]} begged. “Take this money but remember that the ${userInputs[6]} is across the street. You have to be
careful. Do not cross the street before the ${userInputs[5]} passes first, “her/him ${userInputs[0]} warned.”Alright ${userInputs[0]}" 
replied ${userInputs[4]}.

${userInputs[4]} immediately went to the ${userInputs[6]}. After waiting for a long time, his ${userInputs[0]} was worried because
${userInputs[4]} did not come after nearly a half an hour. Soon afterward, ${userInputs[0]} left her/him house to see ${userInputs[4]}. 
${userInputs[0]} was worried that ${userInputs[4]} was in danger.

After arriving near the ${userInputs[6]}, ${userInputs[0]} was surprised to see the ${userInputs[4]} stood motionless on the roadside.
“Why are you so long?” asked her/him ${userInputs[0]}. “I cannot cross this street ${userInputs[0]}" ${userInputs[0]} was wonder and asked
“why does it so? The street was very quiet, right? “”That is right, I want to cross the street but 
there is no ${userInputs[5]} which passing by” ${userInputs[4]} replied. “How can be like that?” her/him ${userInputs[0]} getting 
surprised. “You told me that don't cross the street before the ${userInputs[5]} pass first and now I am waiting
for the ${userInputs[5]} to pass first. Therefore I cannot cross this street “replied ${userInputs[4]}. His ${userInputs[0]} could
only be silent</h2>`;

let elementShow = document.getElementById("show");
elementShow.innerHTML = commentedOut;

