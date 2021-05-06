import { AsyncParallelHook, AsyncSeriesHook, SyncBailHook, SyncHook, SyncWaterfallHook } from 'tapable';

export class Compiler {
    shouldEmit = new SyncWaterfallHook(["compilation"]);
}
