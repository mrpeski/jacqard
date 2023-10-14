import getHost from '@/helpers/getHost';
import {expect, it} from "@jest/globals";

it('should ', function () {
    expect(getHost('https://url-spliter.com.ng')).toBe('url-spliter.com.ng')
    expect(getHost('https://url-spliter.com.ng:9080')).toBe('url-spliter.com.ng')
});
