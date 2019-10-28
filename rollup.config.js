import fs from 'fs-extra';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';


const outputFolder = './dist';
const pJson = fs.readJsonSync('package.json');
const componentName = pJson.name.slice(pJson.name.lastIndexOf('/')+1);

const plugins = [
    resolve(),
    typescript({
        tsconfigDefaults: {
            compilerOptions: {
                module: 'ESNext',
                target: 'ESNEXT',
                declaration: true,
                strict: true,
            }
        },
    })
];

export default [
    {
        input: 'index.ts',
        output: {
            file: `${outputFolder}/${componentName}.umd.js`,
            format: 'umd',
            name: componentName,
        },
        plugins
    },
    {
        input: 'index.ts',
        external: Object.keys(pJson.dependencies || {}),
        output: {
            file: `${outputFolder}/${componentName}.js`,
            format: 'esm',
        },
        plugins
    },
]