import { Button, Card ,Spinner} from 'react-bootstrap'

export const Answer = ({value,onComponentClick,id}) => {
    const handleClick = () => {
        onComponentClick(value)
        console.log("answer c.kids value",value,"id",id)
    }
    return (
        <>
            <Button variant="link" className="text-decoration-none" onClick={handleClick}>Load answers</Button>
        </>
    )
}