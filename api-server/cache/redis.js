"use strict";

import dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

// env variables
const redisHost = process.env.REDIS_HOST || "";
const redisUser = process.env.REDIS_HOST || "";
const redisPassword = process.env.REDIS_PASSWORD || "";
const redisPort = process.env.REDIS_PORT || "";

const redisUrl = `redis://default:${redisPassword}@${redisHost}:${redisPort}`;

const redisClient = createClient({ url: redisUrl });

// set cache in redis
export const setCache = async (key, value) => {
  await redisClient.connect();
  // handle connection error
  redisClient.on("error", (err) => {
    console.log("Redis connection error", err);
  });

  const data = JSON.stringify({ isCached: true, data: value });
  await redisClient.set(key, data);
  return redisClient.disconnect();
};

// get cache data from redis
export const getCache = async (key) => {
  await redisClient.connect();

  // handle connection error
  redisClient.on("error", (err) => {
    console.log("Redis connection error", err);
  });

  const data = await redisClient.get(key);
  await redisClient.disconnect();
  return data;
};

// invalidate cache
export const deleteCache = async (key) => {
  await redisClient.connect();
  await redisClient.del(key);
  return redisClient.disconnect();
};
