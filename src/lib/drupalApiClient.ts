import { JsonApiClient } from "@drupal-api-client/json-api-client";

// TODO - use process.env for site URL, etc.
export const client = new JsonApiClient('https://dev-drupal-api-client-poc.pantheonsite.io');