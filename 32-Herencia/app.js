(() => {
    class Person {
        constructor(name = 'no name', surname = 'no surname', nickname = 'no nickname') {
            this.name = name;
            this.surname = surname;
            this.nickname = nickname;
            console.log('Ejecutado constructor');
        }
        setName(name) {
            this.name = name;
        }
        setSurname(surname) {
            this.surname = surname;
        }
        setNickname(nickname) {
            this.nickname = nickname;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    const victor = new Person('Victor', 'Manuel');
    console.log(victor);
    class Ingeniero extends Person {
        constructor(name, surname, nickname, ingenieria) {
            super(name, surname, nickname);
            this.ingenieria = ingenieria;
        }
    }
    Ingeniero.isEnginer = true;
    const sofia = new Ingeniero('Sofia', 'Cuntin', 'Sofrita', 'Electrónica');
    console.log(sofia);
    const sofia2 = new Ingeniero();
    console.log(sofia2);
    victor.setName('Victor Manuel');
    victor.setNickname('Jaleito');
    console.log(victor);
})();
export {};
//# sourceMappingURL=app.js.map