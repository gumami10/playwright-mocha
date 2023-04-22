import supertest from "supertest";
import { url } from "./utils";
import {expect} from "chai";
const request = supertest(url);


describe('people', async () => {
    it('get people async', async () => {
        const res = await request.get('people/1');

        expect(res.body.name).to.eql("Luke Skywalker");
    });
});