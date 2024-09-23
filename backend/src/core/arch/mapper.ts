export abstract class Mapper<A, B> {
    abstract transform(value: A): B;
}