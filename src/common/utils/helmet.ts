import { NestExpressApplication } from "@nestjs/platform-express";
import helmet from 'helmet';

export function setupHelmet(server: NestExpressApplication) {
  server.use(helmet.contentSecurityPolicy());
  server.use(helmet.crossOriginEmbedderPolicy());
  server.use(helmet.crossOriginOpenerPolicy());
  server.use(helmet.crossOriginResourcePolicy());
  server.use(helmet.dnsPrefetchControl());
  server.use(helmet.frameguard());
  server.use(helmet.hidePoweredBy());
  server.use(helmet.hsts());
  server.use(helmet.ieNoOpen());
  server.use(helmet.noSniff());
  server.use(helmet.originAgentCluster());
  server.use(helmet.permittedCrossDomainPolicies());
  server.use(helmet.referrerPolicy());
  server.use(helmet.xssFilter());
}