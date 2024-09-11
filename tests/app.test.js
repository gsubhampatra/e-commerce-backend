
import supertest from "supertest";
import app from "../app.js";

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  }); 
});





