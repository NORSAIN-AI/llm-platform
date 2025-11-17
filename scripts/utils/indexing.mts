import { readdir } from 'fs/promises';
import { join, relative } from 'path';
import { writeFile } from 'fs/promises';

export interface KnowledgeFile {
  path: string;
  name: string;
  size?: number;
}

/**
 * Generate an index of knowledge files
 */
export async function generateKnowledgeIndex(
  knowledgePath: string
): Promise<KnowledgeFile[]> {
  const files: KnowledgeFile[] = [];

  async function scanDirectory(dirPath: string) {
    try {
      const entries = await readdir(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(dirPath, entry.name);
        if (entry.isFile() && !entry.name.startsWith('.') && entry.name !== 'index.md') {
          const relativePath = relative(knowledgePath, fullPath);
          files.push({
            path: relativePath,
            name: entry.name,
          });
        } else if (entry.isDirectory() && !entry.name.startsWith('.')) {
          await scanDirectory(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error);
    }
  }

  await scanDirectory(knowledgePath);
  return files;
}

/**
 * Create an index.md file listing all knowledge files
 */
export async function createKnowledgeIndexFile(
  knowledgePath: string,
  files: KnowledgeFile[]
): Promise<void> {
  const lines = [
    '# Knowledge Base Index',
    '',
    `Total files: ${files.length} / 20`,
    '',
    '## Files',
    '',
  ];

  // Group files by directory
  const filesByDir = new Map<string, KnowledgeFile[]>();
  for (const file of files) {
    const dir = file.path.includes('/') ? file.path.split('/')[0] : '.';
    if (!filesByDir.has(dir)) {
      filesByDir.set(dir, []);
    }
    filesByDir.get(dir)!.push(file);
  }

  // Write grouped files
  for (const [dir, dirFiles] of Array.from(filesByDir.entries()).sort()) {
    if (dir !== '.') {
      lines.push(`### ${dir}/`);
      lines.push('');
    }
    for (const file of dirFiles.sort((a, b) => a.name.localeCompare(b.name))) {
      lines.push(`- [${file.name}](${file.path})`);
    }
    lines.push('');
  }

  const indexPath = join(knowledgePath, 'index.md');
  await writeFile(indexPath, lines.join('\n'), 'utf-8');
}
