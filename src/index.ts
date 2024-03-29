class D8 {
	date: Date
	constructor(...args: any[]) {
		// @ts-ignore
		this.date = new Date(...args)
	}

	getYear = (): number => {
		return this.date.getFullYear()
	}

	getMonth = (): number => {
		return this.date.getMonth()
	}

	getDay = (): number => {
		return this.date.getDate()
	}

	getHour = (): number => {
		return this.date.getHours()
	}

	getMinute = (): number => {
		return this.date.getMinutes()
	}

	getSecond = (): number => {
		return this.date.getSeconds()
	}

	getMillisecond = (): number => {
		return this.date.getMilliseconds()
	}

	explicitDay = (): string => {
		const days: string[] = [
			'sunday',
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday',
		]
		return days[this.date.getDay()]
	}

	explicitMonth = (): string => {
		const months: string[] = [
			'january',
			'february',
			'march',
			'april',
			'may',
			'june',
			'july',
			'august',
			'september',
			'october',
			'november',
			'december',
		]
		return months[this.date.getMonth()]
	}

	isLeapYear = (): boolean => {
		return this.date.getFullYear() % 4 == 0
	}
}
