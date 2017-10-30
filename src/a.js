/*
eslint padding-line-between-statements: [
 "error",
 { blankLine: "always", prev: ["const", "let", "var"], next: "export"},
 { blankLine: "always", prev: ["import"], next: ["const", "let", "var"]}
 ]
*/
import { something } from './okta';
const L = 3;
const N = something(L);
export default { M: 3, N };
