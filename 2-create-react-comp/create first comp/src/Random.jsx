function Random(){
    let random=Math.random()*100;
    return <h1 style={{'backgroundColor':'#8434'}}>
        let Random Number is: {Math.round(random)}
    </h1> 
}
export default Random;