import { Compiler } from "./Compiler"

test('should use plugin value', () => {
    let schema = 'schema';
    const c = new Compiler();

    c.shouldEmit.tap('plugin a', sa => {
        // noop
        return undefined;
    });

    c.shouldEmit.tap('plugin b', sa => {
        return 'use this schema';
    });

    const ret = c.shouldEmit.call(schema);
    
    expect(ret).toBe('use this schema');
});
