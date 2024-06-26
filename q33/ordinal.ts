let ordinal_number= [1,2,3,4,5,6,7,8,9];
for (let simple_number of ordinal_number){
    let ordinal_string:string;
    if (simple_number===1){
        ordinal_string="st"
    }
    else if (simple_number ===2){
        ordinal_string="nd"
    }
    else if (simple_number ===3){
        ordinal_string="rd"
    }
    else {ordinal_string="th"}
    console.log(`${simple_number}${ordinal_string}`);
    
}