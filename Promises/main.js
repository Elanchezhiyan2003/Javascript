
// Promises State
// 1.Pending
// 2.Fulfiled
// 3.Failed

let developer = true;

let promise = new Promise((solve, reject)=>{
    if(developer){
        solve('The project is successfully completed');
    }
    else{
        reject('The project is not completed');
    }
});


promise.then((successMSG)=>{
    console.log(successMSG);
}).catch((failedMSG)=>{
    console.log(failedMSG);
}).finally(()=>{
    console.log("The program is ended")
});

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data retrieved');
    }, 3000);
});

fetchData.then(data => {
    console.log(data); // "Data retrieved"
}).catch(error => {
    console.error(error);
});

