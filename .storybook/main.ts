import type { StorybookConfig } from '@storybook/react-webpack5';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-webpack5-compiler-swc'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      resolve: {
        fallback: {
          zlib: false,
        },
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    // @ts-ignore
    config!.resolve!.plugins = [new TsconfigPathsPlugin()];
    config!.resolve!.alias= {
      zlib: require.resolve('browserify-zlib')
    };
    return config;
  }      ,    
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  staticDirs: ['./public'],
};
export default config;
