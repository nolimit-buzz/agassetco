export type RichTextBlock = { type: string; children: { text: string; type: string }[] };

export function extractText(blocks: RichTextBlock[]): string {
  return blocks?.map(b => b.children?.map(c => c.text).join('')).join('\n') ?? '';
}
