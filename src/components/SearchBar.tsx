import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMic, FiCamera } from 'react-icons/fi';
import useSpeechRecognition from '../hook/SpeechRecognistion';


const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { transcript, listening, setListening } = useSpeechRecognition();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      console.log(transcript,"transcript")
      if (inputRef.current) inputRef.current.value = transcript;
    }
  }, [transcript]);

  return (
    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md w-full max-w-lg mx-auto">
      <input
        ref={inputRef}
        type="text"
        defaultValue={query}
        placeholder="Search Google or type a URL"
        className="flex-1 outline-none"
        onKeyDown={(e) => {
          if (e.key === 'Enter') navigate('/search');
        }}
      />
      <FiMic
        className={`cursor-pointer ${listening ? 'text-red-500' : 'text-gray-500'} hover:text-black`}
        onClick={() => setListening(!listening)}
      />
      <FiCamera
        className="cursor-pointer text-gray-500 hover:text-black"
        onClick={() => navigate('/image-search')}
      />
    </div>
  );
};

export default SearchBar;