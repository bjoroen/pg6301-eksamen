const request = require("supertest");

const express = require("express");

const app = express();
app.use(require("body-parser").json());
app.use(require("../src/server/crudUser"));

describe("User API", () => {
  it("can return the predefined users", async () => {
    await request(app)
      .get("/api/users")
      .then((response) => {
        expect(response.body.find(({ id }) => id === 1)).toMatchObject({
          username: "Thomas",
        });
      });
  });

  it("can create new users", async () => {
    await request(app)
      .post("/api/users")
      .send({
        username: "Nandi",
        password: "1010",
        email: "hello@world.no",
      })
      .expect(201);
    await request(app)
      .get("/api/users")
      .then((response) => {
        expect(response.body.map(({ username }) => username)).toContain(
          "Nandi"
        );
      });
  });

  it("can get a user from ID", async () => {
    await request(app)
      .get("/api/users/1")
      .then((response) => {
        expect(response.body.id).toEqual(1);
      });
  });

  it("can update user", async () => {
    await request(app)
      .put("/api/users/1")
      .send({
        username: "Thomas",
        password: "bra",
        email: "world@hello.com",
      })
      .expect(200);
    await request(app)
      .get("/api/users/1")
      .then((response) => {
        expect(response.body.email).toEqual("world@hello.com");
      });
  });
});
