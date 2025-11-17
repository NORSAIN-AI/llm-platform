import { mkdir, cp, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface ScaffoldOptions {
  name: string;
  description?: string;
  author?: string;
  tags?: string[];
}

/**
 * Get the root directory of the project
 */
export function getProjectRoot(): string {
  // From scripts/utils/scaffolding.mts, go up 2 levels
  return join(__dirname, '..', '..');
}

/**
 * Scaffold a new GPT from the template
 */
export async function scaffoldGPT(options: ScaffoldOptions): Promise<string> {
  const projectRoot = getProjectRoot();
  const templatePath = join(projectRoot, 'agents', '_template');
  const gptPath = join(projectRoot, 'agents', options.name);

  // Create the new GPT directory structure
  try {
    await mkdir(gptPath, { recursive: true });
  } catch (error) {
    throw new Error(
      `Failed to create GPT directory: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  // Copy template files
  try {
    await cp(templatePath, gptPath, { recursive: true });
  } catch (error) {
    throw new Error(
      `Failed to copy template: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  // Update gpt.json with custom values
  const gptJsonPath = join(gptPath, 'gpt.json');
  try {
    const gptJsonContent = await readFile(gptJsonPath, 'utf-8');
    const gptConfig = JSON.parse(gptJsonContent);

    gptConfig.name = options.name;
    gptConfig.description = options.description || `Custom GPT: ${options.name}`;
    gptConfig.created = new Date().toISOString();
    gptConfig.author = options.author || 'NORSAIN-AI';
    gptConfig.tags = options.tags || [];

    await writeFile(gptJsonPath, JSON.stringify(gptConfig, null, 2) + '\n', 'utf-8');
  } catch (error) {
    throw new Error(
      `Failed to update gpt.json: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  // Update instructions with GPT name
  const instructionsPath = join(gptPath, 'instructions', 'main.md');
  try {
    let instructions = await readFile(instructionsPath, 'utf-8');
    instructions = instructions.replace(/\[GPT Name\]/g, options.name);
    await writeFile(instructionsPath, instructions, 'utf-8');
  } catch (error) {
    console.warn('Warning: Could not update instructions file');
  }

  // Update actions schema with GPT name
  const actionsPath = join(gptPath, 'actions', 'schema.json');
  try {
    const actionsContent = await readFile(actionsPath, 'utf-8');
    const actionsSchema = JSON.parse(actionsContent);
    actionsSchema.info.title = `${options.name} Actions API`;
    actionsSchema.info.description = `Custom actions for ${options.name}`;
    await writeFile(actionsPath, JSON.stringify(actionsSchema, null, 2) + '\n', 'utf-8');
  } catch (error) {
    console.warn('Warning: Could not update actions schema');
  }

  return gptPath;
}
