export function transformText(text: string, type: string): string {
  switch (type) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.replace(/\b\w/g, char => char.toUpperCase());
    case 'reverse':
      return text.split('').reverse().join('');
    case 'trim':
      return text.trim().replace(/\s+/g, ' ');
    default:
      return text;
  }
}