let current_User=["MOBEEN","SHAN","ZEESHAN","FARHAN","SUBHAN"];
let new_User=["saleem","yasir","shan","rehan","owais"];

new_User.forEach(time_user=>{
let my_Condition=current_User.some(same_user=>same_user.toLocaleLowerCase()===time_user.toLocaleLowerCase());

    if (my_Condition){
        console.log(`sorry ${time_user} has already been used. `);
        
    }
else{console.log(`user name ${time_user} is available`)
}
})