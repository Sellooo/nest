/// <reference types="jest" />
import { Repository } from "typeorm";
export declare type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
