let counter = 0;

const func=()=>{
    counter++;
    console.log(counter);
    setTimeout(() => { func() }, 1000);
}
func();