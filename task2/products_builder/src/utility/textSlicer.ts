/**
 * Truncates a text string to a specified character count and adds an ellipsis if needed.
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [charCount=104] - The maximum number of characters to keep. Defaults to 104.
 * @returns {string} The truncated text, with "..." appended if truncated, or ".." if truncated after a period.
 */
export function textSlicer(text: string, charCount = 104) {
  let str = "";

  const count = text.length < charCount ? text.length : charCount;

  for (let i = 0; i < count; i++) {
    str += text[i];
  }
  if (count !== text.length) {
    if (str[str.length - 1] === ".") str += "..";
    else str += "...";
  }

  return str;
}
