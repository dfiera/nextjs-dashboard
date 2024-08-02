export default function debounce(func: Function, wait: number = 0): Function {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID ?? undefined);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      func.apply(this, args);
    }, wait);
  };
}
