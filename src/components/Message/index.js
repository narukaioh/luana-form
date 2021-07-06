export const Message = ({ message, type }) => {
    return (<p className={`message ${type}`}>{message}</p>)
}