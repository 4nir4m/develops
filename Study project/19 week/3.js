class calculator {

    static sum() {
        return this.a + this.b;
    }
    
    static mul() {
      return this.a * this.b;
    }

    static sub() {
        return this.a - this.b;
    }
    
    static div() {
        return this.a / this.b;
    }

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
