const Total =({exercises})=>{
    return (
        <div>
            <p>Number of exercises { exercises.reduce((value1, value2)=> value1+value2) }</p>
        </div>
    )
    
} 

export default Total