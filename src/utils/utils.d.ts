/**
 * utiltity functions type declarations here
 */
declare module "";

/**
 * Use this helper function to conditionally apply classNames to react components
 * If the className needs to change upon one or multiple state values change, use this function as boolean-evaluable ternary expression.
 * @param ...strings : string[]
 * @returns string
 */
declare type classJoinFunction = (...strings: string[]) => string;
