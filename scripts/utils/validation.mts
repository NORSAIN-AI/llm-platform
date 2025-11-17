import { readdir, stat } from 'fs/promises';
import { join } from 'path';

export interface GPTConfig {
  name: string;
  version: string;
  description: string;
  created: string;
  author: string;
  tags: string[];
  maxKnowledgeFiles: number;
  structure: {
    instructions: string;
    actions: string;
    knowledge: string;
  };
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate a GPT directory structure
 */
export async function validateGPTStructure(gptPath: string): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    // Check if main directories exist
    const requiredDirs = ['instructions', 'actions', 'knowledge'];
    for (const dir of requiredDirs) {
      const dirPath = join(gptPath, dir);
      try {
        const stats = await stat(dirPath);
        if (!stats.isDirectory()) {
          errors.push(`${dir} must be a directory`);
        }
      } catch {
        errors.push(`Missing required directory: ${dir}`);
      }
    }

    // Check for gpt.json
    try {
      await stat(join(gptPath, 'gpt.json'));
    } catch {
      errors.push('Missing required file: gpt.json');
    }

    // Validate knowledge files count (max 20)
    try {
      const knowledgePath = join(gptPath, 'knowledge');
      const files = await readdir(knowledgePath);
      const fileCount = files.filter((f) => !f.startsWith('.')).length;

      if (fileCount > 20) {
        errors.push(`Knowledge directory contains ${fileCount} files, maximum is 20`);
      } else if (fileCount === 0) {
        warnings.push('Knowledge directory is empty');
      }
    } catch {
      // Already caught missing directory above
    }

    // Check for instructions file
    try {
      await stat(join(gptPath, 'instructions', 'main.md'));
    } catch {
      warnings.push('Missing instructions/main.md file');
    }

    // Check for actions schema
    try {
      await stat(join(gptPath, 'actions', 'schema.json'));
    } catch {
      warnings.push('Missing actions/schema.json file');
    }
  } catch (error) {
    errors.push(`Validation error: ${error instanceof Error ? error.message : String(error)}`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Count files in a directory recursively
 */
export async function countFiles(dirPath: string): Promise<number> {
  let count = 0;
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && !entry.name.startsWith('.')) {
        count++;
      } else if (entry.isDirectory() && !entry.name.startsWith('.')) {
        count += await countFiles(join(dirPath, entry.name));
      }
    }
  } catch {
    // Directory doesn't exist or is not readable
  }
  return count;
}
