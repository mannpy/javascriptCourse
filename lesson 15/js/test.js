describe("Сумма", function() {
	it("Должна возвращать true", function() {
		assert.isTrue(sum(), "these function are strictly return true")
	});
	
})

describe("Переменная num", function() {
	it("равен 5", function() {
		assert.equal(num, 5)
	});
})

describe("Функция each (Jquery)", function() {
	it("возвращает массив", function() {
		assert.typeOf($.each([3, 4], sum), 'array')
	});

	it("длина массива равна 3", function() {
		assert.equal($.each([3, 4, 7], sum).length, 3)
	});
})