import proxy from "http2-proxy";

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [],
  routes: [
    {
      match: "routes",
      src: "/new.html",
      dest: (req, res) => proxy.web(req, res, { port: 8081 }),
    },
  ],
  optimize: {},
  packageOptions: {},
  devOptions: {
    open: "none",
  },
  buildOptions: {},
};
