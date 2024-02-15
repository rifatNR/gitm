#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';
import tty from 'node:tty';

const cli = meow(
	`
	Usage
	  $ gitm-cli

	Options
		--name  Your name

	Examples
	  $ gitm-cli --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);
render(<App name={cli.flags.name} />);
