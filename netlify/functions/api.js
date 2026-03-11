import serverless from "serverless-http";
import app from "../../BackendNew/Server.js";

export const handler = serverless(app);
