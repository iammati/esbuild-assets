#!/usr/bin/env node

// esbuild & plugins
import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

// process.argv represents the
// passed arguments when calling this script
const argv = process.argv;
const hasArgv = string => Boolean(argv.includes(string));

const isDevelopment = hasArgv('--development');
const hasWatch = hasArgv('--watch');

// config: production
let configuration = {
    logLevel: 'info',
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: '../packages/site_frontend/Resources/Public/',
    target: 'esnext',

    entryPoints: {
        'JavaScript/app.min': 'src/TypeScript/Application.ts',
        'Css/app.min': 'src/Scss/Application.scss'
    },

    plugins: [
        sassPlugin(),
    ],
};

// config: development
if (isDevelopment) {
    configuration = {
        ...configuration,
        ...{
            minify: false,
            sourcemap: true,
        }
    };
}

if (hasWatch) {
    configuration = {
        ...configuration,
        ...{
            watch: {
                onRebuild(error, result) {
                    // if (error) {
                    //     console.error('watch build failed:', error);
                    // } else {
                    //     console.log('watch build succeeded:', result);
                    // }
                }
            }
        }
    };
}

esbuild.build(configuration)
    .catch(() => process.exit(1))
;
