'use strict';
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  plus(vector) {
    if (!(vector instanceof Vector)) {
      throw new Error('Можно прибавлять к вектору только вектор типа Vector');
    }

    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  times(multiplier) {
    return new Vector(this.x * multiplier, this.y * multiplier);
  }
}

class Actor {
  constructor(pos = new Vector(0, 0), size = new Vector(1, 1), speed = new Vector(0, 0)) {
    if (!(pos instanceof Vector)) {
      throw new Error('Расположение должно быть объектом типа Vector');
    }

    if (!(size instanceof Vector)) {
      throw new Error('Размер должен быть объектом типа Vector');
    }

    if (!(speed instanceof Vector)) {
      throw new Error('Скорость должна быть объектом типа Vector');
    }
    this.pos = pos
    this.size = size;
    this.speed = speed;    
  }

  act() {

  }

  get left() {
    return this.pos.x;
  }

  get top() {
    return this.pos.y;
  }

  get right() {
    return this.pos.x + this.size.x;
  }

  get bottom() {
    return this.pos.y + this.soze.y;
  }

  get type() {
    return 'actor';
  }

  isIntersect(actor) {
    if (!(actor instanceof Actor)) {
      throw new Error('Должен быть объектом типа Actor');
    }
    if (actor === this) {
      return false;
    }
    return actor.bottom > this.top && actor.top < this.bottom && actor.left < this.right && actor.right > this.left;
  }
}

