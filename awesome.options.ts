import { AwesompleteItem } from './model';
export interface AwesompleteOptions {
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
