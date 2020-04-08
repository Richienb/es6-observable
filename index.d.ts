declare global {
	interface SymbolConstructor {
		readonly observable: symbol
	}
}

declare namespace Observable {
	interface SubscriptionObserver<T> {
		closed: boolean
		next(value: T): void
		error(errorValue: any): void
		complete(): void
	}

	interface Subscription {
		closed: boolean
		unsubscribe(): void
	}

	interface Observer<T> {
		start?(subscription: Subscription): any
		next?(value: T): void
		error?(errorValue: any): void
		complete?(): void
	}

	type Subscriber<T> = (observer: SubscriptionObserver<T>) => void | (() => void) | Subscription

	interface ObservableLike<T> {
		subscribe?: Subscriber<T>
		[Symbol.observable](): Observable<T> | ObservableLike<T>
	}
}

declare class Observable<T> {
	constructor(subscriber: Observable.Subscriber<T>)

	static from<R>(observable: Observable<R> | Observable.ObservableLike<R> | ArrayLike<R>): Observable<R>
	static of<R>(...items: R[]): Observable<R>

	subscribe(observer: Observable.Observer<T>): Observable.Subscription
	subscribe(onNext: (value: T) => void, onError?: (error: any) => void, onComplete?: () => void): Observable.Subscription

	[Symbol.observable](): Observable<T>
}

export = Observable
