/**
 * Synchronous function that simulates a process on the stack
 * 
 * @param time value (millisecounds)
 */
export const waitFor = (time: number): boolean => {
    const future = Date.now() + time;
    while(Date.now() < future) {}
    return true;
}

export const startTime = () => {
    const instant = Date.now();
    return () => Date.now() - instant;
}

export const time = (milliseconds: number): string => {
    const clock = new Date(milliseconds);
    const minutes = `${clock.getMinutes()}`.padStart(2, '0');
    const seconds = `${clock.getSeconds()}`.padStart(2, '0');
    return `${minutes}:${seconds}`;
}
