describe('#findAllPermutations', function() {
	it('returns all permutations of a string of length 1', function(){
		let str = 'a'
		expect(findAllPermutations(str)).toEqual(['a'])
	})

	it('returns all permutations of a string of length 3', function(){
		let str = 'abc'

		let returnArray = findAllPermutations(str)

		expect(returnArray.length).toEqual(6)
		expect(returnArray).toContain('abc')
		expect(returnArray).toContain('acb')
		expect(returnArray).toContain('bac')
		expect(returnArray).toContain('bca')
		expect(returnArray).toContain('cab')
		expect(returnArray).toContain('cba')
	})

	it('returns all permutations of a string of length 4', function(){
		let str = 'abcd'
		let returnArray = findAllPermutations(str)
		expect(returnArray.length).toEqual(24)
		})

	it('returns all permutations of a string of length 8', function(){
		let str = 'abcdefgh'
		let returnArray = findAllPermutations(str)
		expect(returnArray.length).toEqual(40320)
		})

});
