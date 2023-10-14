import {expect, it} from "@jest/globals";
import getProtocol from "@/helpers/getProtocol";

it('should properly return https', function () {
    expect(getProtocol('https://url-spliter.com.ng')).toBe('https:')
});

it('should properly return http', function () {
    expect(getProtocol('http://url-spliter.com.ng')).toBe('http:')
});
