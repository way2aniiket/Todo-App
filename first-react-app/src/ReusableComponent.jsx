function ReusableComponent() {
    let randomNumber = Math.random() * 100
    return <>
    <p>Random number is: {Math.round(randomNumber)}</p>
    </>
}

export default ReusableComponent;