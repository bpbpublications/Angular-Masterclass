export function Log(target: any, name: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method ${name} called with args `, args);
        const result = original.apply(this, args);
        console.log(`Method ${name} returns `, result);
        return result;
    }

    return descriptor;
}
