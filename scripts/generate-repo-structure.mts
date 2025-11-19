import { readdir, writeFile } from 'fs/promises';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = join(__dirname, '..');

const IGNORED = new Set(['node_modules', '.git', '.github', 'dist', '.DS_Store']);

async function generateTree(dir: string, prefix = ''): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });

  // Sorter: mapper først, filer etterpå
  const sorted = entries.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  const lines: string[] = [];

  const lastIndex = sorted.length - 1;

  for (let i = 0; i < sorted.length; i++) {
    const entry = sorted[i];
    const isLast = i === lastIndex;

    if (IGNORED.has(entry.name)) continue;

    const base = isLast ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLast ? '    ' : '│   ');

    lines.push(prefix + base + entry.name);

    if (entry.isDirectory()) {
      const subDir = join(dir, entry.name);
      const subTree = await generateTree(subDir, nextPrefix);
      lines.push(...subTree);
    }
  }

  return lines;
}

async function main() {
  const tree = await generateTree(projectRoot);

  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 16);

  const md = [
    '# Repository Structure',
    '',
    `Automatisk generert: ${timestamp}`,
    '',
    '```text',
    relative(projectRoot, projectRoot) + '/',
    ...tree,
    '```',
    '',
  ].join('\n');

  await writeFile(join(projectRoot, 'REPO_STRUCTURE.md'), md, 'utf8');
  console.log('✓ REPO_STRUCTURE.md oppdatert');
}

main().catch((err) => {
  console.error('Feil under generering:', err);
  process.exit(1);
});
