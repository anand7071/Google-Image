import { useEffect, useState } from "react";

const useSpeechRecognition = () => {
    const [transcript, setTranscript] = useState('');
    const [listening, setListening] = useState(false);
  
    useEffect(() => {
      const SpeechRecognition =
        window?.SpeechRecognition || window?.webkitSpeechRecognition;
      if (!SpeechRecognition) return;
  
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
  
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
      };
  
      recognition.onend = () => setListening(false);
  
      if (listening) recognition.start();
      else recognition.stop();
  
      return () => recognition.stop();
    }, [listening]);
  
    return { transcript, listening, setListening };
  };
  
  export default useSpeechRecognition;