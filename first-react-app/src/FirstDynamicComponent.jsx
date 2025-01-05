function FirstDynamicComponent() {
    let myName = "Aniket" //This is the one method to use the dynamic component in the jsx
    let fullName = () =>{
        return "Aniket Kumar"; // This is another way to use the the dynamic component 
    }
    return <p>{fullName()}, this is my first dynamic component</p>
}

export default FirstDynamicComponent;