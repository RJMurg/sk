import type { Handle } from '@sveltejs/kit/hooks';

// Declare flag variables in src/env.ts, then read them from $app/env/private here.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- flags are added per project
export interface FeatureFlags {}

export const featureTogglesHandler: Handle = async ({ event, resolve }) => {
	event.locals.flags = {};

	return resolve(event);
};
