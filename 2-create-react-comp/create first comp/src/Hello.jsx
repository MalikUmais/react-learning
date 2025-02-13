function Hello(){
    // to use js we need to use '{}' like:
    let myName='Umais';
    let fullName=()=>{
        return 'Muhammad Umais Farooq'
    }
    return <h3>
        hello this is {fullName()}
        {/* hello this is {myName} */}
    </h3>
}
export default Hello;