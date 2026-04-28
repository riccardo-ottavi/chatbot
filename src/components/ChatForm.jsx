import { useRef } from "react"

export default function ChatForm({ setChatHistory, generateBotResponse, chatHistory }) {

    const inputRef = useRef(null)

    function handleFormSubmit(e) {
        e.preventDefault();

        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        inputRef.current.value = "";

        const newHistory = [...chatHistory, {
            role: "user",
            text: userMessage
        }];

        setChatHistory(newHistory);

        setTimeout(() => {
            setChatHistory(prev => [
                ...prev,
                { role: "model", text: "thinking" }
            ]);

            console.log("Sto chiamando generateBotResponse");

            generateBotResponse(newHistory);
        }, 600);
    }
    
    return (
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" className="message-input" placeholder='Message...' required />
            <img className='arrow-symbol' src="/arrow-up-solid-full.svg" alt="" />
        </form>
    )
}