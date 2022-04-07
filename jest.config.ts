import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	preset: 'ts-jest',
	testPathIgnorePatterns: ['.js'],
};

export default config;
