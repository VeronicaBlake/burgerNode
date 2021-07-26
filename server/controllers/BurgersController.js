import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

// 1. write your controller, have it extend the basecontroller
// 2. write your constructor:
// - super('endpoint of your url)
// - this.router(get, put, post and delete)
// 3. Write your functions declared in the router:
// - try catch
// - req, res, next
// - kick to service

export class ValuesController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('/:id', this.getAll)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const burger = burgersService.getById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = burgersService.create(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      const burger = burgersService.edit(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      burgersService.delete(req.params.id)
      res.send('dooloortood')
    } catch (error) {
      next(error)
    }
  }
}
