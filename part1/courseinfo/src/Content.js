import Part from './Part.js'

const Content = ({parts})=>{
    return(
        <div>
            {
                parts.map((part)=> <Part part={part.part} exercises={part.exercises} />)
            }
        </div>
    )
}

export default Content
    