const today = [{name:0,num:0},{name:1,num:1},{name:2,num:2}];
const add=[]
for(let i=0;i<today.length;i++){
    if(today[i].name==1){
        today[i]=today[i+1];
        today.length--;


    }
}
console.log(today);
