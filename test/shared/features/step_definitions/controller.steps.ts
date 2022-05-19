import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import assert = require('assert');
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../dist/app/app.module';

let _request: request.Test;
let _response: request.Response;
let application: INestApplication;

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.getHttpServer()).put(route).send(JSON.parse(body));
});

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.getHttpServer()).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

Then('the response content should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

BeforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  application = moduleFixture.createNestApplication();

  await application.init();
});

AfterAll(async () => {
  await application.close();
});
