export const hey = msg => {
  const response = {
    TYPE_DEFAULT: 'Whatever.',
    TYPE_SHOUT: 'Whoa, chill out!',
    TYPE_QUESTION: 'Sure.',
    TYPE_STRONG_QUESTION: 'Calm down, I know what I\'m doing!',
    TYPE_SILENCE: 'Fine. Be that way!',
  }

  const hasAlpha = /[a-zA-Z]/.test(msg);
  if (msg === msg.toUpperCase() && hasAlpha) {
    // all alphas are upper case 
    if (/^.+\?\s*$/.test(msg)) {
      // upper case alphas with a question
      return response.TYPE_STRONG_QUESTION;
    }
    else {
      return response.TYPE_SHOUT;
    }
  }
  else if (/^.+\?\s*$/.test(msg)) {
    // question mark at the end 
    return response.TYPE_QUESTION;
  }
  else if (/^\s*$/.test(msg)) {
    // white spaces only
    return response.TYPE_SILENCE;
  }
  else {
    // response for anything else
    return response.TYPE_DEFAULT
  }
};
