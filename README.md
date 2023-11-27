# Fox Labs

> Simple playground for React, JS, GSAP, CSS, etc. labs

## Build Storybook

```bash
yarn build-storybook
```

## Run Storybook

```bash
yarn storybook
```

Please, use yarn for this repository.

## Workflow

1. Add(edit) component in src\Components folder
2. Add(update) story in src\stories folder
3. Commit changes
4. Create PR to main branch

## JS functions performance test
```js
console.time('startTime');
console.log(() => {
    forEach([1, 2, 3, 4, 5, 6, 7, 8], (value) => {
        console.log(value);
    });
});
console.timeEnd('endTime');
```

## Contacts
[GitHub Page](https://github.com/mdgfox)

## License

MIT © 
