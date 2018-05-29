import { Once } from "./once/once";
import { Debounce } from "./debounce/debounce";
import { GetAbsolueUrl } from "./get-absolute-url/get-absolute-url";
import { InsertRule } from "./insert-rule/insert-rule";
import { IsNative } from "./is-native/is-native";
import { MatchesSelector } from "./matches-selector/matches-selector";
import { Poll } from "./poll/poll";


export class ESU {
    public static Once: Function = Once;
    public static Poll: Function = Poll;
    public static Debounce: Function = Debounce;
    public static GetAbsolueUrl: Function = GetAbsolueUrl;
    public static InsertRule: Function = InsertRule;
    public static IsNative: Function = IsNative;
    public static MatchesSelector: Function = MatchesSelector;
}
// 
