# ng2-awesomplete

![ng2-awesomplete](http://i.imgur.com/VSLmh6e.png)

`npm install ng2-awesomplete --save`

Angular wrapper for [Awesomplete](http://leaverou.github.io/awesomplete/#basic-usage)
- No dependencies
- Easy to use
- Can be use with `FormControl`

# Using

### Add to module

```js
@NgModule({
  imports: [
    AwesompleteModule
  ],
  declarations: [
    ...
  ],
  exports: [
    ...
  ]
})
```

### .html and .component.ts

1. Only use `list`

```js
<ng2-awesomplete formControlName="language" [list]="list"></ng2-awesomplete>
```

2. Combite between `list` and `options`

```js
<ng2-awesomplete formControlName="language" [options]="options" [list]="list"></ng2-awesomplete>
```

> You can learn the original option configuration from homepage [http://leaverou.github.io/awesomplete/#customization](http://leaverou.github.io/awesomplete/#customization)

### Interfaces, apis

- `list`

```js
AwesompleteItem[] | string[] | [string, string]

interface AwesompleteItem {
    label: string;
    value: any;
};

```

- `options`:

```js
interface AwesompleteOptions {
    /* Where to find the list of suggestions. Described in more detail in the “Basic usage” section above. */
    list?: AwesompleteItem[] | string[] | [string, string];
    /* Minimum characters the user has to type before the autocomplete popup shows up. */
    minChars?: number;
    /* Maximum number of suggestions to display. */
    maxItems?: number;
    /* Should the first element be automatically selected?  */
    autoFirst?: boolean;
    /* Controls how entries get matched. By default, the input can match anywhere in the string and it’s a case insensitive match. */
    filter?: any;
    /* Controls how list items are ordered. */
    sort?: any;
    /* Controls how list items are generated. */
    item?: any;
    /* Controls how the user’s selection replaces the user’s input. For example,
     this is useful if you want the selection to only partially replace the user’s input. */
    replace?: any;
    /* Controls suggestions' label and value. This is useful if you have list items in custom format,
     or want to change list items based on user's input. */
    data?: any;
};
```

Thanks.
