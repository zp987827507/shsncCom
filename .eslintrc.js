module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 0,
        'no-unused-vars': 0,
        'no-underscore-dangle': 1,
        'no-redeclare': 2, //禁止重复声明变量
        'no-multi-spaces': 1, //不能用多余的空格
        'for-direction': 'error',
        //eqeqeq: ['error', 'always'], //比较的时候使用严格等于
        'no-await-in-loop': 'off',
        'no-compare-neg-zero': 'error',
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': ['error', 'except-parens'],
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        'no-control-regex': 'error',
        // @fixable 禁止使用 debugger
        'no-prototype-builtins': 0,
        indent: 0,
        'no-case-declarations': 0,
    },
}
