import { Button, Card ,Spinner} from 'react-bootstrap'

export const Answer = ({value,onComponentClick}) => {
    const handleClick = () => {
        onComponentClick(value)
    }
    return (
        <>
            <Button variant="link" className="text-decoration-none" onClick={handleClick}>Load answers</Button>
        </>
    )
}