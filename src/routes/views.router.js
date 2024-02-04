import { Router } from "express";

const router = new Router()

router.get('/', async(req, res) => {
    res.render('home')
})

export default router