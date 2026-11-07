/** Escape text for set:html and keep hyphenated short terms (Ar-Ge, R&D) from breaking across lines. */
export function nobr(text: string) {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/(\S+-\S+|R&amp;D)/g, '<span class="nobr">$1</span>');
}
