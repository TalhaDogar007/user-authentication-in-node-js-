const db =require('../database')


module.exports = class loginData {
    constructor(id, title ) {
      this.id = id;
       
    }
  
    save() {
    
      return db.execute(
        'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
        [this.title, this.price, this.imageUrl, this.description]
      );
    }
  
     
  
    static fetchAll() {
      return db.execute('SELECT * FROM products');
    }
   
  };
  