import express, {Request, Response, json} from "express";
import app from "./app";

const server = app;

server.listen(process.env.PORT || 3333, ()=>{
  console.log("Starting server 😄");
});