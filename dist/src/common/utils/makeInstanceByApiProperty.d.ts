export interface Type<T = any> extends Function {
    new (...args: any[]): T;
}
export declare function makeInstanceByApiProperty<T>(dtoClass: Type, generic?: Type): T;
