let myobj={
    name:"eswar",
    age:20,
    display:function(){
        console.log(this);
        setTimeout(function(){
            console.log(this);
        })
    }
}
myobj.display();