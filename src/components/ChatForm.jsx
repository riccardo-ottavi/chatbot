import { useRef } from "react"

export default function ChatForm({setChatHistory}) {

    const inputRef = useRef(null)

    function handleFormSubmit(e) {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim()
        if (!userMessage) return;
        inputRef.current.value = "";

        console.log(userMessage);
        setChatHistory(history => [...history, {role:"user", text: userMessage}])
        
        setTimeout(() => setChatHistory((history) => [...history,{role: "model", text: "thinking"}]),
        600);
    }

    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder='Message...' required />
            <img className='arrow-symbol' src="/arrow-up-solid-full.svg" alt="" />
        </form>
    )
}