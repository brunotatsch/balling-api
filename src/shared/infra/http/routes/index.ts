import { Router } from "express";

import { ballingRouters } from "../../../../modules/balling/infra/http/routes/balling.routes";

const router = Router();

router.use('/balling', ballingRouters);

export { router };
