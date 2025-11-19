import { describe, it, expect } from 'vitest';
import { scaffoldGPT } from '../scaffolding.mts';
import { stat, rm, readFile } from 'fs/promises';
import { join } from 'path';

describe('scaffolding template resolution', () => {
  it('copies template and updates gpt.json and files', async () => {
    const name = `test_template_resolve_${Date.now()}`;
    const gptPath = await scaffoldGPT({ name, description: 'test scaffold', author: 'tester', tags: ['test'] });

    try {
      const gptJsonPath = join(gptPath, 'gpt.json');
      await stat(gptJsonPath);
      const gptJson = JSON.parse(await readFile(gptJsonPath, 'utf-8'));
      expect(gptJson.name).toBe(name);

      const instructionsPath = join(gptPath, 'instructions', 'main.md');
      await stat(instructionsPath);

      const actionsPath = join(gptPath, 'actions', 'schema.json');
      await stat(actionsPath);
    } finally {
      await rm(gptPath, { recursive: true, force: true });
    }
  });
});
