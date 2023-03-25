import { getInput, setOutput, debug } from '@actions/core';

/**
 * Formats a Git branch to a valid Docker tag
 * @param {*} parsedContext The branch to format
 * @returns {string} The formatted branch
 */
function formatBranch(parsedContext) {
	if (parsedContext.ref === 'refs/heads/main' && parsedContext.event_name === 'push') return 'latest';

	let formattedBranch = parsedContext.head_ref.replace(/[^a-zA-Z0-9-._]/g, '_').toLowerCase();

	while (formattedBranch.startsWith('-') || formattedBranch.startsWith('.')) {
		formattedBranch = formattedBranch.substring(1, formattedBranch.length);
	}

	if (formattedBranch.length >= 128) {
		formattedBranch = formattedBranch.substring(0, 127);
	}

	return formattedBranch;
}

const contextString = getInput('context', { required: true });
const contextJson = JSON.parse(contextString);

const parsed = formatBranch(contextJson);

setOutput('tag', parsed);
