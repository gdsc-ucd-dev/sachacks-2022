const join: classJoinFunction = (...strings: string[]) =>
  strings.filter(Boolean).join(" ");

export { join as default };
