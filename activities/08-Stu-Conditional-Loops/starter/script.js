// Write your code here
let myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i =0;i<myFarm.length;i++) {
    console.log(myFarm[i])

    if(myFarm[i]==="chickens" || myFarm[i]==="ostriches") {
        alert("This is a bird")
    }
}