import { getInput, setOutput } from '@actions/core';

/**
 * Formats a Git branch to a valid Docker tag
 * @param {string} branch The branch to format
 * @returns {string} The formatted branch
 */
function formatBranch(branch) {
	if (branch === 'main') return 'latest';

	let formattedBranch = branch.replace(/[^a-zA-Z0-9-._]/g, '_').toLowerCase();

	while (formattedBranch.startsWith('-') || formattedBranch.startsWith('.')) {
		formattedBranch = formattedBranch.substring(1, formattedBranch.length);
	}

	if (formattedBranch.length >= 128) {
		formattedBranch = formattedBranch.substring(0, 127);
	}

	return formattedBranch;
}

const branch = getInput('branch', { required: true });
const parsed = formatBranch(branch);

setOutput('tag', parsed.tag);
