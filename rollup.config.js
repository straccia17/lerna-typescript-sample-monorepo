import path from 'path';
import fs from 'fs-extra';
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete';
import html from 'rollup-plugin-html';
import less from 'rollup-plugin-less';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';


const outputFolder = './dist';
const pJson = fs.readJsonSync('package.json');
const dependencies = Object.keys(pJson.dependencies || {});
const componentName = pJson.name.slice(pJson.name.lastIndexOf('/') + 1);

const plugins = (options) => [
    options.clean && del({
        targets: outputFolder
    }),
    html({
        insert: true,
        include: ['src/**/*.html', 'node_modules/**/*.html', '../**/*.html'],
        exclude: []
    }),
    less({
        insert: true,
        include: ['src/**/*.less', 'node_modules/**/*.less', '../**/*.less'],
        exclude: []
    }),
    resolve(),
    typescript({
        objectHashIgnoreUnknownHack: true,
        tsconfigDefaults: {
            compilerOptions: {
                module: 'ESNext',
                target: 'ESNEXT',
                declaration: true,
                strict: true,
                experimentalDecorators: true,
                types: [
                    path.resolve(__dirname, 'types')
                ],
            },
        },
    }),
    options.copyResource && copy({
        targets: [
            { src: ['src/**/*', '!**/*.{ts|js}'], dest: outputFolder }
        ]
    }),
];

export default [
    {
        input: 'src/index.ts',
        output: {
            file: `${outputFolder}/${componentName}.umd.js`,
            format: 'umd',
            name: componentName,
        },
        plugins: plugins({ clean: true })
    },
    {
        input: 'src/index.ts',
        external: (id) => {
            return dependencies.includes(id) ||  !['ts', 'js'].includes(path.extname(id));
        },
        output: {
            file: `${outputFolder}/${componentName}.js`,
            format: 'esm',
        },
        plugins: plugins({ copyResource: true })
    },
]