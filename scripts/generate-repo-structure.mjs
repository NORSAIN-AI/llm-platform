#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function gitFiles() {
  const out = execSync('git ls-files', { encoding: 'utf8' });
  return out.split('\n').filter(Boolean);
}

function buildTree(paths) {
  const root = {};
  for (const p of paths) {
    const parts = p.split('/');
    let node = root;
    for (const part of parts) {
      if (!node[part]) node[part] = {};
      node = node[part];
    }
  }
  return root;
}

function renderTree(node, prefix = '') {
  const keys = Object.keys(node).sort();
  let lines = [];
  keys.forEach((key, idx) => {
    const isLast = idx === keys.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    lines.push(prefix + connector + key);
    const children = Object.keys(node[key]);
    if (children.length > 0) {
      const newPrefix = prefix + (isLast ? '    ' : '│   ');
      lines = lines.concat(renderTree(node[key], newPrefix));
    }
  });
  return lines;
}

function generateSnapshot() {
  const files = gitFiles();
  const tree = buildTree(files);
  const lines = ['(repo root)', ...renderTree(tree)];
  return lines.join('\n');
}

function replaceInRepoStructure(snapshot) {
  const mdPath = path.resolve('reports/REPO_STRUCTURE.md');
  if (!fs.existsSync(mdPath)) {
    console.error('reports/REPO_STRUCTURE.md not found');
    process.exit(1);
  }
  const content = fs.readFileSync(mdPath, 'utf8');
  const startTag = '```text';
  const start = content.indexOf(startTag);
  if (start === -1) {
    console.error('start code fence not found');
    process.exit(1);
  }
  const afterStart = content.indexOf('\n', start) + 1;
  const end = content.indexOf('\n```', afterStart);
  if (end === -1) {
    console.error('end code fence not found');
    process.exit(1);
  }
  const before = content.slice(0, afterStart);
  const after = content.slice(end + 1);
  const date = new Date().toISOString().split('T')[0];
  const newBody = snapshot + '\n\nGenerated: ' + date + '\n';
  const newContent = before + newBody + after;
  fs.writeFileSync(mdPath, newContent, 'utf8');
  console.log('Updated', mdPath);
}

function main() {
  const snapshot = generateSnapshot();
  replaceInRepoStructure(snapshot);
}

main();
