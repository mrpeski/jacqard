import {expect, it} from "@jest/globals";
import getSearchParams from "@/helpers/getSearchParams";

it('should ', function () {
    expect(getSearchParams('https://url-spliter.com.ng?name=ola&title=oloye')).toBeInstanceOf(URLSearchParams)
});
