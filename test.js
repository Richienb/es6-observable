const test = require("ava")
const pObservable = require("p-observable")
const Observable = require(".")

test("main", async t => {
	const observable = new Observable(observer => {
		setImmediate(() => {
			observer.next("value")
			observer.complete()
		})
	})

	t.is(await pObservable(observable), "value")
})
