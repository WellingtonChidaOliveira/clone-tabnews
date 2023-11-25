test("GET to /api/v1/status should returns 200", async () => {
  const resp = await fetch("http://localhost:3000/api/v1/status");
  expect(resp.status).toBe(200);
});
