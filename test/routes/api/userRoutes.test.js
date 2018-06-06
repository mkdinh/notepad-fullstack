describe("User Routes", () => {
  let request;

  afterEach(async () => {
    await request.closeConnection();
  });

  describe("When user is not authenticated", () => {
    beforeEach(async () => {
      request = await SuperRequest.connect();
    });

    it("GET /current throw unauthorized error", async () => {
      const res = await request.get("/api/users/current");
      expect(res.status).to.equal(401);
    });
  });

  describe("When user is authenticated", () => {
    beforeEach(async () => {
      request = await SuperRequest.connect({ authenticated: true });
    });

    it("GET /current throw unauthorized error", async () => {
      const res = await request
        .get("/api/users/current")
        .set({ authorization: request._token });
      expect(res.status).to.equal(202);
      expect(res.body._id).to.be.ok;
      expect(res.body.password).to.be.undefined;
    });
  });
});
