import { once } from "./once/once";
import { debounce } from "./debounce/debounce";
import { getAbsolueUrl } from "./get-absolute-url/get-absolute-url";
import { insertRule } from "./insert-rule/insert-rule";
import { isNative } from "./is-native/is-native";
import { matchesSelector } from "./matches-selector/matches-selector";
import { poll } from "./poll/poll";


export class tu {
    public static once: Function = once;
    public static poll: Function = poll;
    public static debounce: Function = debounce;
    public static getAbsolueUrl: Function = getAbsolueUrl;
    public static insertRule: Function = insertRule;
    public static isNative: Function = isNative;
    public static matchesSelector: Function = matchesSelector;
}
