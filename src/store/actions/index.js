export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and conditionally CORRECT_GUESS actions
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @return {function} - Redux Thunk Function
 */
export const guessWord = guessedWord => {
  return function(dispatch, getState) {};
};
