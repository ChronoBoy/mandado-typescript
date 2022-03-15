
import { Router }  from 'express'
import asyncify from 'express-asyncify'
const router = asyncify(Router())



router
  .get('/', getSucursales)
