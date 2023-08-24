import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert {type: "json"};

export default {
  input: 'src/index.tsx', // 入口文件
  output: [
    {
      file: pkg.main, // 输出文件名称
      format: 'cjs', // 输出模块格式
      sourcemap: false, // 是否输出sourcemap
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
      useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
    }),
  ],
};
