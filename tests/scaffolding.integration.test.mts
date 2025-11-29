import { mkdir, writeFile } from 'fs/promises';
import { mkdtempSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { describe, it, expect, vi } from 'vitest';

import { scaffoldGPT } from '../scripts/utils/scaffolding.mts';
import { validateGPTStructure } from '../scripts/utils/validation.mts';

async function createTempRepoWithTemplates() {
  const root = mkdtempSync(join(tmpdir(), 'llm-'));

  const base = join(root, 'gpt-packages', 'templates', 'custom_gpt');

  // Minimal template structure
  await mkdir(join(base, 'instructions'), { recursive: true });
  await writeFile(join(base, 'instructions', 'main.md'), '# [GPT Name]\n', 'utf8');

  await mkdir(join(base, 'actions'), { recursive: true });
  await writeFile(
    join(base, 'actions', 'schema.json'),
    JSON.stringify({ openapi: '3.1.0', info: { title: '', description: '' }, paths: {} }),
    'utf8'
  );

  await mkdir(join(base, 'knowledge'), { recursive: true });

  await writeFile(
    join(base, 'gpt.json'),
    JSON.stringify({ name: '', description: '', created: '', author: '', tags: [] }),
    'utf8'
  );

  return root;
}

describe('scaffolding + validation integration', () => {
  it('creates a working GPT package using templates', async () => {
    const root = await createTempRepoWithTemplates();

    // Mock project root by stubbing process.cwd()
    const cwdSpy = vi.spyOn(process, 'cwd').mockReturnValue(root);

    try {
      // Scaffold GPT
      const gptPath = await scaffoldGPT({ name: 'test_gpt', description: 'A test GPT' });

      // Validate output
      const validation = await validateGPTStructure(gptPath);

      expect(validation.errors.length).toBe(0);
      expect(validation.valid).toBe(true);
    } finally {
      cwdSpy.mockRestore();
    }
  });
});
