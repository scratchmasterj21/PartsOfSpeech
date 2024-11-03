import React, { useState } from 'react';

// Define types for the word objects
type Word = {
  id: string;
  word: string;
};

// Define the structure of the word bank
type WordBank = {
  pronouns: Word[];
  verbs: Word[];
  nouns: Word[];
  adjectives: Word[];
  articles: Word[];
  prepositions: Word[];
};

// Initial word bank with categories and words
const wordBank: WordBank = {
  pronouns: [
    { id: '1', word: 'I' },
    { id: '2', word: 'You' },
    { id: '3', word: 'He' },
    { id: '4', word: 'She' },
    { id: '5', word: 'It' },
    { id: '6', word: 'We' },
    { id: '7', word: 'They' },
  ],
  verbs: [
    { id: '8', word: 'am' },
    { id: '9', word: 'is' },
    { id: '10', word: 'are' },
  ],
  nouns: [
    { id: '11', word: 'student' },
    { id: '12', word: 'teacher' },
    { id: '13', word: 'school' },
    { id: '14', word: 'pilot' },
    { id: '15', word: 'nurse' },
    { id: '16', word: 'cat' },
    { id: '17', word: 'home' },
    { id: '18', word: 'hospital' },
  ],
  adjectives: [
    { id: '19', word: 'happy' },
    { id: '20', word: 'sad' },
    { id: '21', word: 'hungry' },
    { id: '22', word: 'thirsty' },
    { id: '23', word: 'quiet' },
    { id: '24', word: 'noisy' },
    { id: '25', word: 'early' },
    { id: '26', word: 'rich' },
    { id: '27', word: 'big' },
  ],
  articles: [
    { id: '28', word: 'a' },
    { id: '29', word: 'an' },
  ],
  prepositions: [
    { id: '30', word: 'at' },
  ],
};

const App: React.FC = () => {
  const [sentence, setSentence] = useState<Word[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Function to add a word to the sentence
  const addWordToSentence = (word: Word) => {
    setSentence((prevSentence) => [...prevSentence, word]);
  };

  // Function to remove a word from the sentence by index
  const removeWordFromSentence = (index: number) => {
    setSentence((prevSentence) => prevSentence.filter((_, i) => i !== index));
  };

  // Basic grammar check (placeholder, can be expanded)
  const grammarCheck = (words: string[]): boolean => {
    if (words.length < 2) return false;

    // Simple check: Pronoun + Verb + (Noun/Adjective) should be valid
    const [firstWord, secondWord, ...rest] = words;
    const validPronouns = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];
    const validVerbs = ['am', 'is', 'are'];

    if (validPronouns.includes(firstWord) && validVerbs.includes(secondWord)) {
      return true;
    }
    return false;
  };

  // Check the sentence for grammar rules
  const checkSentence = () => {
    const sentenceWords = sentence.map((item) => item.word);
    const isValid = grammarCheck(sentenceWords);
    setFeedback(isValid ? 'Correct sentence!' : 'Incorrect grammar. Try again.');
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Build a Sentence (To Be - Simple Present)</h1>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Word Bank */}
        <div className="grid grid-cols-3 gap-4">
          {/* Pronouns */}
          <div>
            <h3 className="font-bold">Pronouns</h3>
            {wordBank.pronouns.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-blue-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>

          {/* Verbs */}
          <div>
            <h3 className="font-bold">Verbs (To Be)</h3>
            {wordBank.verbs.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-yellow-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>

          {/* Nouns */}
          <div>
            <h3 className="font-bold">Nouns</h3>
            {wordBank.nouns.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-green-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>

          {/* Adjectives */}
          <div>
            <h3 className="font-bold">Adjectives</h3>
            {wordBank.adjectives.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-pink-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>

          {/* Articles */}
          <div>
            <h3 className="font-bold">Articles</h3>
            {wordBank.articles.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-indigo-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>

          {/* Prepositions */}
          <div>
            <h3 className="font-bold">Prepositions</h3>
            {wordBank.prepositions.map((word) => (
              <button
                key={word.id}
                onClick={() => addWordToSentence(word)}
                className="bg-red-200 p-2 m-2 rounded"
              >
                {word.word}
              </button>
            ))}
          </div>
        </div>

        {/* Sentence Construction Area */}
        <div className="flex space-x-4 p-4 border border-gray-300 rounded-md bg-gray-50 mb-4 mt-6">
          {sentence.length > 0 ? (
            sentence.map(({ id, word }, index) => (
              <div
                key={id}
                className="bg-green-100 px-4 py-2 rounded-md border border-green-300 text-center cursor-pointer"
                onClick={() => removeWordFromSentence(index)}
              >
                {word}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Click on the words to form a sentence</p>
          )}
        </div>

        {/* Display Sentence */}
        <div className="mt-6">
          <h3 className="text-xl font-medium">Your Sentence:</h3>
          <p className="bg-gray-200 p-4 rounded-md mt-2">{sentence.map(({ word }) => word).join(' ') || 'No sentence yet.'}</p>
        </div>

        {/* Submit Button */}
        <button
          onClick={checkSentence}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Check Sentence
        </button>

        {/* Feedback */}
        {feedback && (
          <div className="mt-4 text-lg font-semibold">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
