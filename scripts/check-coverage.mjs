import fs from 'fs';
import path from 'path';

const summaryPath = path.resolve(process.cwd(), 'coverage', 'coverage-summary.json');
const finalPath = path.resolve(process.cwd(), 'coverage', 'coverage-final.json');
let data = null;

if (fs.existsSync(summaryPath)) {
  data = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
} else if (fs.existsSync(finalPath)) {
  // Vitest may emit an Istanbul "coverage-final.json". Convert to summary-like structure.
  const final = JSON.parse(fs.readFileSync(finalPath, 'utf-8'));
  // final has file keys with metrics under 'lines', 'branches', etc. We'll map to a summary object.
  data = { total: {} };
  for (const [file, metrics] of Object.entries(final)) {
    if (file === 'total') continue;
    const entry = {};
    if (metrics.lines)
      entry.lines = { total: metrics.lines.total || 0, covered: metrics.lines.covered || 0 };
    if (metrics.branches)
      entry.branches = {
        total: metrics.branches.total || 0,
        covered: metrics.branches.covered || 0,
      };
    if (metrics.functions)
      entry.functions = {
        total: metrics.functions.total || 0,
        covered: metrics.functions.covered || 0,
      };
    if (metrics.statements)
      entry.statements = {
        total: metrics.statements.total || 0,
        covered: metrics.statements.covered || 0,
      };
    data[file] = entry;
  }
} else {
  console.error('No coverage summary found. Did vitest generate coverage?');
  process.exit(2);
}

function aggregateForPrefix(prefix) {
  let linesTotal = 0,
    linesCovered = 0;
  let branchesTotal = 0,
    branchesCovered = 0;

  for (const [file, metrics] of Object.entries(data)) {
    if (file === 'total') continue;
    if (!file.startsWith(prefix)) continue;

    if (metrics.lines && typeof metrics.lines.total === 'number') {
      linesTotal += metrics.lines.total;
      linesCovered += metrics.lines.covered;
    }
    if (metrics.branches && typeof metrics.branches.total === 'number') {
      branchesTotal += metrics.branches.total;
      branchesCovered += metrics.branches.covered;
    }
  }

  const linesPct = linesTotal === 0 ? 100 : (linesCovered / linesTotal) * 100;
  const branchesPct = branchesTotal === 0 ? 100 : (branchesCovered / branchesTotal) * 100;
  return { linesPct, branchesPct, linesTotal, branchesTotal };
}

const targets = [
  {
    label: 'src',
    prefix: 'src/',
    thresholds: { lines: 85, branches: 75 },
  },
  {
    label: 'scripts/utils',
    prefix: 'scripts/utils/',
    thresholds: { lines: 60, branches: 40 },
  },
  {
    label: 'scripts (info only)',
    prefix: 'scripts/',
    thresholds: null,
  },
];

let failed = false;

for (const target of targets) {
  const result = aggregateForPrefix(target.prefix);

  const linesMsg = `${target.label}: lines ${result.linesPct.toFixed(1)}%`;
  const branchesMsg = `${target.label}: branches ${result.branchesPct.toFixed(1)}%`;

  if (!target.thresholds) {
    console.log(`[info] ${linesMsg}`);
    console.log(`[info] ${branchesMsg}`);
    continue;
  }

  const { lines: linesThreshold, branches: branchesThreshold } = target.thresholds;
  if (result.linesPct < linesThreshold) {
    console.error(
      `Coverage threshold failed for ${target.label}: lines ${result.linesPct.toFixed(1)}% < ${linesThreshold}%`
    );
    failed = true;
  } else {
    console.log(
      `Coverage OK for ${target.label}: lines ${result.linesPct.toFixed(1)}% >= ${linesThreshold}%`
    );
  }

  if (result.branchesPct < branchesThreshold) {
    console.error(
      `Coverage threshold failed for ${target.label}: branches ${result.branchesPct.toFixed(1)}% < ${branchesThreshold}%`
    );
    failed = true;
  } else {
    console.log(
      `Coverage OK for ${target.label}: branches ${result.branchesPct.toFixed(1)}% >= ${branchesThreshold}%`
    );
  }
}

if (failed) {
  process.exit(2);
}

console.log('All coverage thresholds met.');
process.exit(0);
