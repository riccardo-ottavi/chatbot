import { useRef } from "react"

export default function ChatForm() {

    const inputRef = useRef(null)

    function handleFormSubmit(e) {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim()
        if (!userMessage) return;

        console.log(userMessage)
    }

    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder='Message...' required />
            <img className='arrow-symbol' src="/arrow-up-solid-full.svg" alt="" />
        </form>
    )
}