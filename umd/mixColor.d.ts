export declare function parseColor(str: string): {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare function mix(from: string, to: string, point?: number): string;
export default mix;
