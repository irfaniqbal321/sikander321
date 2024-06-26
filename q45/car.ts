function car(manufacturer,model,...option){
    let used_car={
        manufactur:manufacturer,latest_model:model,
    };
    option.forEach(option=>{
        let [Key,value]=option.split(":");
        used_car[Key.trim()]=value.trim();
});
return used_car;

}
let new_edition=car("toyota","corolla","color:grey");
console.log(new_edition);

