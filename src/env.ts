import { defineEnvVars } from '@sveltejs/kit/env';

const isEnabled = (value: string | undefined): boolean => value?.toLowerCase() === 'true';

export const variables = defineEnvVars({
	PUBLIC_ENABLE_ANALYTICS: {
		public: true,
		schema: isEnabled,
		description: 'Set to "true" to load the analytics script'
	},
	PUBLIC_ANALYTICS_LINK: {
		public: true,
		schema: (value) => value ?? '',
		description: 'URL of the analytics script'
	},
	PUBLIC_ANALYTICS_ID: {
		public: true,
		schema: (value) => value ?? '',
		description: 'Site ID passed to the analytics script'
	}
});
