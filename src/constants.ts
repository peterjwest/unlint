/**
 * Files which are excluded from content checks by default
 * Either because they are binary, or not usually edited as plaintext
 */
export const DEFAULT_CONTENT_EXCLUDED = [
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock',
  '.DS_Store',
  '*.sln',
  '*.wav',
  '*.mp3',
  '*.raw',
  '*.webm',
  '*.jpg',
  '*.jpeg',
  '*.gif',
  '*.png',
  '*.bmp',
  '*.ico',
  '*.ttf',
  '*.eot',
  '*.woff',
  '*.woff2',
  '*.deb',
  '*.bin',
  '*.exe',
  '*.pdf',
  '*.svg',
  '*.z',
  '*.cod',
  '*.fwu',
  '*.tar',
  '*.gz',
  '*.zip',
  '*.7z',
  '*.7zip',
] as const;
